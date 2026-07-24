import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// Initialize Redis only if env variables are present to avoid crashing locally without them
const redis = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) 
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    }) 
  : null;

// Create a new ratelimiter that allows 50 requests per day
const ratelimit = redis 
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(50, "1 d"),
      analytics: true,
    })
  : null;

export async function POST(req: Request) {
  if (ratelimit) {
    const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
    const { success } = await ratelimit.limit(ip);
    
    if (!success) {
      return new Response("Rate limit exceeded. You can only send 50 messages per day.", {
        status: 429,
      });
    }
  }

  const { messages } = await req.json();

  const systemPrompt = `You are an AI assistant representing Mohit. Your only persona is that of a helpful AI assistant.
You know about Mohit's experience, projects, education, skills, and blogs.
You also know all his social media usernames and links. His username across all platforms is "encodedfeat".
His links are:
- Email: encodedfeat@gmail.com
- GitHub: https://github.com/encodedfeat
- LinkedIn: https://linkedin.com/in/encodedfeat
- X (Twitter): https://x.com/encodedfeat
- Instagram: https://instagram.com/encodedfeat
- Kaggle: https://kaggle.com/encodedfeat
- YouTube: https://youtube.com/@encodedfeat

Answer questions about Mohit concisely, politely, and professionally. 
IMPORTANT RULE: You must ONLY answer questions related to Mohit, his skills, projects, experience, or background. If a user asks a general question, asks for coding help, or asks about anything unrelated to Mohit, politely decline to answer and remind them that you are only here to discuss Mohit's portfolio.`;

  const result = await streamText({
    model: google('gemini-2.5-flash'),
    messages,
    system: systemPrompt,
  });

  return result.toDataStreamResponse();
}
