"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/date-fns/constants.js
var daysInYear, maxTime, minTime, millisecondsInDay, millisecondsInMinute, millisecondsInHour, secondsInHour, secondsInDay, secondsInWeek, secondsInYear, secondsInMonth, secondsInQuarter, constructFromSymbol;
var init_constants = __esm({
  "node_modules/date-fns/constants.js"() {
    daysInYear = 365.2425;
    maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
    minTime = -maxTime;
    millisecondsInDay = 864e5;
    millisecondsInMinute = 6e4;
    millisecondsInHour = 36e5;
    secondsInHour = 3600;
    secondsInDay = secondsInHour * 24;
    secondsInWeek = secondsInDay * 7;
    secondsInYear = secondsInDay * daysInYear;
    secondsInMonth = secondsInYear / 12;
    secondsInQuarter = secondsInMonth * 3;
    constructFromSymbol = /* @__PURE__ */ Symbol.for("constructDateFrom");
  }
});

// node_modules/date-fns/constructFrom.js
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}
var init_constructFrom = __esm({
  "node_modules/date-fns/constructFrom.js"() {
    init_constants();
  }
});

// node_modules/date-fns/toDate.js
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}
var init_toDate = __esm({
  "node_modules/date-fns/toDate.js"() {
    init_constructFrom();
  }
});

// node_modules/date-fns/addDays.js
function addDays(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}
var init_addDays = __esm({
  "node_modules/date-fns/addDays.js"() {
    init_constructFrom();
    init_toDate();
  }
});

// node_modules/date-fns/addMonths.js
var init_addMonths = __esm({
  "node_modules/date-fns/addMonths.js"() {
  }
});

// node_modules/date-fns/add.js
var init_add = __esm({
  "node_modules/date-fns/add.js"() {
  }
});

// node_modules/date-fns/isSaturday.js
var init_isSaturday = __esm({
  "node_modules/date-fns/isSaturday.js"() {
  }
});

// node_modules/date-fns/isSunday.js
var init_isSunday = __esm({
  "node_modules/date-fns/isSunday.js"() {
  }
});

// node_modules/date-fns/isWeekend.js
var init_isWeekend = __esm({
  "node_modules/date-fns/isWeekend.js"() {
  }
});

// node_modules/date-fns/addBusinessDays.js
var init_addBusinessDays = __esm({
  "node_modules/date-fns/addBusinessDays.js"() {
  }
});

// node_modules/date-fns/addMilliseconds.js
var init_addMilliseconds = __esm({
  "node_modules/date-fns/addMilliseconds.js"() {
  }
});

// node_modules/date-fns/addHours.js
var init_addHours = __esm({
  "node_modules/date-fns/addHours.js"() {
  }
});

// node_modules/date-fns/startOfWeek.js
var init_startOfWeek = __esm({
  "node_modules/date-fns/startOfWeek.js"() {
  }
});

// node_modules/date-fns/startOfISOWeek.js
var init_startOfISOWeek = __esm({
  "node_modules/date-fns/startOfISOWeek.js"() {
  }
});

// node_modules/date-fns/getISOWeekYear.js
var init_getISOWeekYear = __esm({
  "node_modules/date-fns/getISOWeekYear.js"() {
  }
});

// node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}
var init_getTimezoneOffsetInMilliseconds = __esm({
  "node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js"() {
    init_toDate();
  }
});

// node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}
var init_normalizeDates = __esm({
  "node_modules/date-fns/_lib/normalizeDates.js"() {
    init_constructFrom();
  }
});

// node_modules/date-fns/startOfDay.js
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
var init_startOfDay = __esm({
  "node_modules/date-fns/startOfDay.js"() {
    init_toDate();
  }
});

// node_modules/date-fns/differenceInCalendarDays.js
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}
var init_differenceInCalendarDays = __esm({
  "node_modules/date-fns/differenceInCalendarDays.js"() {
    init_getTimezoneOffsetInMilliseconds();
    init_normalizeDates();
    init_constants();
    init_startOfDay();
  }
});

// node_modules/date-fns/startOfISOWeekYear.js
var init_startOfISOWeekYear = __esm({
  "node_modules/date-fns/startOfISOWeekYear.js"() {
  }
});

// node_modules/date-fns/setISOWeekYear.js
var init_setISOWeekYear = __esm({
  "node_modules/date-fns/setISOWeekYear.js"() {
  }
});

// node_modules/date-fns/addISOWeekYears.js
var init_addISOWeekYears = __esm({
  "node_modules/date-fns/addISOWeekYears.js"() {
  }
});

// node_modules/date-fns/addMinutes.js
var init_addMinutes = __esm({
  "node_modules/date-fns/addMinutes.js"() {
  }
});

// node_modules/date-fns/addQuarters.js
var init_addQuarters = __esm({
  "node_modules/date-fns/addQuarters.js"() {
  }
});

// node_modules/date-fns/addSeconds.js
var init_addSeconds = __esm({
  "node_modules/date-fns/addSeconds.js"() {
  }
});

// node_modules/date-fns/addWeeks.js
function addWeeks(date, amount, options) {
  return addDays(date, amount * 7, options);
}
var init_addWeeks = __esm({
  "node_modules/date-fns/addWeeks.js"() {
    init_addDays();
  }
});

// node_modules/date-fns/addYears.js
var init_addYears = __esm({
  "node_modules/date-fns/addYears.js"() {
  }
});

// node_modules/date-fns/areIntervalsOverlapping.js
var init_areIntervalsOverlapping = __esm({
  "node_modules/date-fns/areIntervalsOverlapping.js"() {
  }
});

// node_modules/date-fns/max.js
var init_max = __esm({
  "node_modules/date-fns/max.js"() {
  }
});

// node_modules/date-fns/min.js
var init_min = __esm({
  "node_modules/date-fns/min.js"() {
  }
});

// node_modules/date-fns/clamp.js
var init_clamp = __esm({
  "node_modules/date-fns/clamp.js"() {
  }
});

// node_modules/date-fns/closestIndexTo.js
var init_closestIndexTo = __esm({
  "node_modules/date-fns/closestIndexTo.js"() {
  }
});

// node_modules/date-fns/closestTo.js
var init_closestTo = __esm({
  "node_modules/date-fns/closestTo.js"() {
  }
});

// node_modules/date-fns/compareAsc.js
var init_compareAsc = __esm({
  "node_modules/date-fns/compareAsc.js"() {
  }
});

// node_modules/date-fns/compareDesc.js
var init_compareDesc = __esm({
  "node_modules/date-fns/compareDesc.js"() {
  }
});

// node_modules/date-fns/constructNow.js
var init_constructNow = __esm({
  "node_modules/date-fns/constructNow.js"() {
  }
});

// node_modules/date-fns/daysToWeeks.js
var init_daysToWeeks = __esm({
  "node_modules/date-fns/daysToWeeks.js"() {
  }
});

// node_modules/date-fns/isSameDay.js
var init_isSameDay = __esm({
  "node_modules/date-fns/isSameDay.js"() {
  }
});

// node_modules/date-fns/isDate.js
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
var init_isDate = __esm({
  "node_modules/date-fns/isDate.js"() {
  }
});

// node_modules/date-fns/isValid.js
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}
var init_isValid = __esm({
  "node_modules/date-fns/isValid.js"() {
    init_isDate();
    init_toDate();
  }
});

// node_modules/date-fns/differenceInBusinessDays.js
var init_differenceInBusinessDays = __esm({
  "node_modules/date-fns/differenceInBusinessDays.js"() {
  }
});

// node_modules/date-fns/differenceInCalendarISOWeekYears.js
var init_differenceInCalendarISOWeekYears = __esm({
  "node_modules/date-fns/differenceInCalendarISOWeekYears.js"() {
  }
});

// node_modules/date-fns/differenceInCalendarISOWeeks.js
var init_differenceInCalendarISOWeeks = __esm({
  "node_modules/date-fns/differenceInCalendarISOWeeks.js"() {
  }
});

// node_modules/date-fns/differenceInCalendarMonths.js
var init_differenceInCalendarMonths = __esm({
  "node_modules/date-fns/differenceInCalendarMonths.js"() {
  }
});

// node_modules/date-fns/getQuarter.js
var init_getQuarter = __esm({
  "node_modules/date-fns/getQuarter.js"() {
  }
});

// node_modules/date-fns/differenceInCalendarQuarters.js
var init_differenceInCalendarQuarters = __esm({
  "node_modules/date-fns/differenceInCalendarQuarters.js"() {
  }
});

// node_modules/date-fns/differenceInCalendarWeeks.js
var init_differenceInCalendarWeeks = __esm({
  "node_modules/date-fns/differenceInCalendarWeeks.js"() {
  }
});

// node_modules/date-fns/differenceInCalendarYears.js
var init_differenceInCalendarYears = __esm({
  "node_modules/date-fns/differenceInCalendarYears.js"() {
  }
});

// node_modules/date-fns/differenceInDays.js
var init_differenceInDays = __esm({
  "node_modules/date-fns/differenceInDays.js"() {
  }
});

// node_modules/date-fns/differenceInHours.js
var init_differenceInHours = __esm({
  "node_modules/date-fns/differenceInHours.js"() {
  }
});

// node_modules/date-fns/subISOWeekYears.js
var init_subISOWeekYears = __esm({
  "node_modules/date-fns/subISOWeekYears.js"() {
  }
});

// node_modules/date-fns/differenceInISOWeekYears.js
var init_differenceInISOWeekYears = __esm({
  "node_modules/date-fns/differenceInISOWeekYears.js"() {
  }
});

// node_modules/date-fns/differenceInMilliseconds.js
var init_differenceInMilliseconds = __esm({
  "node_modules/date-fns/differenceInMilliseconds.js"() {
  }
});

// node_modules/date-fns/differenceInMinutes.js
var init_differenceInMinutes = __esm({
  "node_modules/date-fns/differenceInMinutes.js"() {
  }
});

// node_modules/date-fns/endOfDay.js
var init_endOfDay = __esm({
  "node_modules/date-fns/endOfDay.js"() {
  }
});

// node_modules/date-fns/endOfMonth.js
var init_endOfMonth = __esm({
  "node_modules/date-fns/endOfMonth.js"() {
  }
});

// node_modules/date-fns/isLastDayOfMonth.js
var init_isLastDayOfMonth = __esm({
  "node_modules/date-fns/isLastDayOfMonth.js"() {
  }
});

// node_modules/date-fns/differenceInMonths.js
var init_differenceInMonths = __esm({
  "node_modules/date-fns/differenceInMonths.js"() {
  }
});

// node_modules/date-fns/differenceInQuarters.js
var init_differenceInQuarters = __esm({
  "node_modules/date-fns/differenceInQuarters.js"() {
  }
});

// node_modules/date-fns/differenceInSeconds.js
var init_differenceInSeconds = __esm({
  "node_modules/date-fns/differenceInSeconds.js"() {
  }
});

// node_modules/date-fns/differenceInWeeks.js
var init_differenceInWeeks = __esm({
  "node_modules/date-fns/differenceInWeeks.js"() {
  }
});

// node_modules/date-fns/differenceInYears.js
var init_differenceInYears = __esm({
  "node_modules/date-fns/differenceInYears.js"() {
  }
});

// node_modules/date-fns/_lib/normalizeInterval.js
function normalizeInterval(context, interval) {
  const [start, end] = normalizeDates(context, interval.start, interval.end);
  return { start, end };
}
var init_normalizeInterval = __esm({
  "node_modules/date-fns/_lib/normalizeInterval.js"() {
    init_normalizeDates();
  }
});

// node_modules/date-fns/eachDayOfInterval.js
function eachDayOfInterval(interval, options) {
  const { start, end } = normalizeInterval(options?.in, interval);
  let reversed = +start > +end;
  const endTime = reversed ? +start : +end;
  const date = reversed ? end : start;
  date.setHours(0, 0, 0, 0);
  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }
  const dates = [];
  while (+date <= endTime) {
    dates.push(constructFrom(start, date));
    date.setDate(date.getDate() + step);
    date.setHours(0, 0, 0, 0);
  }
  return reversed ? dates.reverse() : dates;
}
var init_eachDayOfInterval = __esm({
  "node_modules/date-fns/eachDayOfInterval.js"() {
    init_normalizeInterval();
    init_constructFrom();
  }
});

// node_modules/date-fns/eachHourOfInterval.js
var init_eachHourOfInterval = __esm({
  "node_modules/date-fns/eachHourOfInterval.js"() {
  }
});

// node_modules/date-fns/eachMinuteOfInterval.js
var init_eachMinuteOfInterval = __esm({
  "node_modules/date-fns/eachMinuteOfInterval.js"() {
  }
});

// node_modules/date-fns/eachMonthOfInterval.js
var init_eachMonthOfInterval = __esm({
  "node_modules/date-fns/eachMonthOfInterval.js"() {
  }
});

// node_modules/date-fns/startOfQuarter.js
var init_startOfQuarter = __esm({
  "node_modules/date-fns/startOfQuarter.js"() {
  }
});

// node_modules/date-fns/eachQuarterOfInterval.js
var init_eachQuarterOfInterval = __esm({
  "node_modules/date-fns/eachQuarterOfInterval.js"() {
  }
});

// node_modules/date-fns/eachWeekOfInterval.js
var init_eachWeekOfInterval = __esm({
  "node_modules/date-fns/eachWeekOfInterval.js"() {
  }
});

// node_modules/date-fns/eachWeekendOfInterval.js
var init_eachWeekendOfInterval = __esm({
  "node_modules/date-fns/eachWeekendOfInterval.js"() {
  }
});

// node_modules/date-fns/startOfMonth.js
var init_startOfMonth = __esm({
  "node_modules/date-fns/startOfMonth.js"() {
  }
});

// node_modules/date-fns/eachWeekendOfMonth.js
var init_eachWeekendOfMonth = __esm({
  "node_modules/date-fns/eachWeekendOfMonth.js"() {
  }
});

// node_modules/date-fns/endOfYear.js
var init_endOfYear = __esm({
  "node_modules/date-fns/endOfYear.js"() {
  }
});

// node_modules/date-fns/startOfYear.js
var init_startOfYear = __esm({
  "node_modules/date-fns/startOfYear.js"() {
  }
});

// node_modules/date-fns/eachWeekendOfYear.js
var init_eachWeekendOfYear = __esm({
  "node_modules/date-fns/eachWeekendOfYear.js"() {
  }
});

// node_modules/date-fns/eachYearOfInterval.js
var init_eachYearOfInterval = __esm({
  "node_modules/date-fns/eachYearOfInterval.js"() {
  }
});

// node_modules/date-fns/endOfDecade.js
var init_endOfDecade = __esm({
  "node_modules/date-fns/endOfDecade.js"() {
  }
});

// node_modules/date-fns/endOfHour.js
var init_endOfHour = __esm({
  "node_modules/date-fns/endOfHour.js"() {
  }
});

// node_modules/date-fns/endOfWeek.js
var init_endOfWeek = __esm({
  "node_modules/date-fns/endOfWeek.js"() {
  }
});

// node_modules/date-fns/endOfISOWeek.js
var init_endOfISOWeek = __esm({
  "node_modules/date-fns/endOfISOWeek.js"() {
  }
});

// node_modules/date-fns/endOfISOWeekYear.js
var init_endOfISOWeekYear = __esm({
  "node_modules/date-fns/endOfISOWeekYear.js"() {
  }
});

// node_modules/date-fns/endOfMinute.js
var init_endOfMinute = __esm({
  "node_modules/date-fns/endOfMinute.js"() {
  }
});

// node_modules/date-fns/endOfQuarter.js
var init_endOfQuarter = __esm({
  "node_modules/date-fns/endOfQuarter.js"() {
  }
});

// node_modules/date-fns/endOfSecond.js
var init_endOfSecond = __esm({
  "node_modules/date-fns/endOfSecond.js"() {
  }
});

// node_modules/date-fns/endOfToday.js
var init_endOfToday = __esm({
  "node_modules/date-fns/endOfToday.js"() {
  }
});

// node_modules/date-fns/endOfTomorrow.js
var init_endOfTomorrow = __esm({
  "node_modules/date-fns/endOfTomorrow.js"() {
  }
});

// node_modules/date-fns/endOfYesterday.js
var init_endOfYesterday = __esm({
  "node_modules/date-fns/endOfYesterday.js"() {
  }
});

// node_modules/date-fns/getDayOfYear.js
var init_getDayOfYear = __esm({
  "node_modules/date-fns/getDayOfYear.js"() {
  }
});

// node_modules/date-fns/getISOWeek.js
var init_getISOWeek = __esm({
  "node_modules/date-fns/getISOWeek.js"() {
  }
});

// node_modules/date-fns/getWeekYear.js
var init_getWeekYear = __esm({
  "node_modules/date-fns/getWeekYear.js"() {
  }
});

// node_modules/date-fns/startOfWeekYear.js
var init_startOfWeekYear = __esm({
  "node_modules/date-fns/startOfWeekYear.js"() {
  }
});

// node_modules/date-fns/getWeek.js
var init_getWeek = __esm({
  "node_modules/date-fns/getWeek.js"() {
  }
});

// node_modules/date-fns/_lib/addLeadingZeros.js
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}
var init_addLeadingZeros = __esm({
  "node_modules/date-fns/_lib/addLeadingZeros.js"() {
  }
});

// node_modules/date-fns/format.js
var init_format = __esm({
  "node_modules/date-fns/format.js"() {
  }
});

// node_modules/date-fns/formatDistance.js
var init_formatDistance = __esm({
  "node_modules/date-fns/formatDistance.js"() {
  }
});

// node_modules/date-fns/formatDistanceStrict.js
var init_formatDistanceStrict = __esm({
  "node_modules/date-fns/formatDistanceStrict.js"() {
  }
});

// node_modules/date-fns/formatDistanceToNow.js
var init_formatDistanceToNow = __esm({
  "node_modules/date-fns/formatDistanceToNow.js"() {
  }
});

// node_modules/date-fns/formatDistanceToNowStrict.js
var init_formatDistanceToNowStrict = __esm({
  "node_modules/date-fns/formatDistanceToNowStrict.js"() {
  }
});

// node_modules/date-fns/formatDuration.js
var init_formatDuration = __esm({
  "node_modules/date-fns/formatDuration.js"() {
  }
});

// node_modules/date-fns/formatISO.js
function formatISO(date, options) {
  const date_ = toDate(date, options?.in);
  if (isNaN(+date_)) {
    throw new RangeError("Invalid time value");
  }
  const format = options?.format ?? "extended";
  const representation = options?.representation ?? "complete";
  let result = "";
  let tzOffset = "";
  const dateDelimiter = format === "extended" ? "-" : "";
  const timeDelimiter = format === "extended" ? ":" : "";
  if (representation !== "time") {
    const day = addLeadingZeros(date_.getDate(), 2);
    const month = addLeadingZeros(date_.getMonth() + 1, 2);
    const year = addLeadingZeros(date_.getFullYear(), 4);
    result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`;
  }
  if (representation !== "date") {
    const offset4 = date_.getTimezoneOffset();
    if (offset4 !== 0) {
      const absoluteOffset = Math.abs(offset4);
      const hourOffset = addLeadingZeros(Math.trunc(absoluteOffset / 60), 2);
      const minuteOffset = addLeadingZeros(absoluteOffset % 60, 2);
      const sign = offset4 < 0 ? "+" : "-";
      tzOffset = `${sign}${hourOffset}:${minuteOffset}`;
    } else {
      tzOffset = "Z";
    }
    const hour = addLeadingZeros(date_.getHours(), 2);
    const minute = addLeadingZeros(date_.getMinutes(), 2);
    const second = addLeadingZeros(date_.getSeconds(), 2);
    const separator = result === "" ? "" : "T";
    const time = [hour, minute, second].join(timeDelimiter);
    result = `${result}${separator}${time}${tzOffset}`;
  }
  return result;
}
var init_formatISO = __esm({
  "node_modules/date-fns/formatISO.js"() {
    init_addLeadingZeros();
    init_toDate();
  }
});

// node_modules/date-fns/formatISO9075.js
var init_formatISO9075 = __esm({
  "node_modules/date-fns/formatISO9075.js"() {
  }
});

// node_modules/date-fns/formatISODuration.js
var init_formatISODuration = __esm({
  "node_modules/date-fns/formatISODuration.js"() {
  }
});

// node_modules/date-fns/formatRFC3339.js
var init_formatRFC3339 = __esm({
  "node_modules/date-fns/formatRFC3339.js"() {
  }
});

// node_modules/date-fns/formatRFC7231.js
var init_formatRFC7231 = __esm({
  "node_modules/date-fns/formatRFC7231.js"() {
  }
});

// node_modules/date-fns/formatRelative.js
var init_formatRelative = __esm({
  "node_modules/date-fns/formatRelative.js"() {
  }
});

// node_modules/date-fns/fromUnixTime.js
var init_fromUnixTime = __esm({
  "node_modules/date-fns/fromUnixTime.js"() {
  }
});

// node_modules/date-fns/getDate.js
var init_getDate = __esm({
  "node_modules/date-fns/getDate.js"() {
  }
});

// node_modules/date-fns/getDay.js
function getDay(date, options) {
  return toDate(date, options?.in).getDay();
}
var init_getDay = __esm({
  "node_modules/date-fns/getDay.js"() {
    init_toDate();
  }
});

// node_modules/date-fns/getDaysInMonth.js
var init_getDaysInMonth = __esm({
  "node_modules/date-fns/getDaysInMonth.js"() {
  }
});

// node_modules/date-fns/isLeapYear.js
var init_isLeapYear = __esm({
  "node_modules/date-fns/isLeapYear.js"() {
  }
});

// node_modules/date-fns/getDaysInYear.js
var init_getDaysInYear = __esm({
  "node_modules/date-fns/getDaysInYear.js"() {
  }
});

// node_modules/date-fns/getDecade.js
var init_getDecade = __esm({
  "node_modules/date-fns/getDecade.js"() {
  }
});

// node_modules/date-fns/getDefaultOptions.js
var init_getDefaultOptions = __esm({
  "node_modules/date-fns/getDefaultOptions.js"() {
  }
});

// node_modules/date-fns/getHours.js
var init_getHours = __esm({
  "node_modules/date-fns/getHours.js"() {
  }
});

// node_modules/date-fns/getISODay.js
var init_getISODay = __esm({
  "node_modules/date-fns/getISODay.js"() {
  }
});

// node_modules/date-fns/getISOWeeksInYear.js
var init_getISOWeeksInYear = __esm({
  "node_modules/date-fns/getISOWeeksInYear.js"() {
  }
});

// node_modules/date-fns/getMilliseconds.js
var init_getMilliseconds = __esm({
  "node_modules/date-fns/getMilliseconds.js"() {
  }
});

// node_modules/date-fns/getMinutes.js
var init_getMinutes = __esm({
  "node_modules/date-fns/getMinutes.js"() {
  }
});

// node_modules/date-fns/getMonth.js
function getMonth(date, options) {
  return toDate(date, options?.in).getMonth();
}
var init_getMonth = __esm({
  "node_modules/date-fns/getMonth.js"() {
    init_toDate();
  }
});

// node_modules/date-fns/getOverlappingDaysInIntervals.js
var init_getOverlappingDaysInIntervals = __esm({
  "node_modules/date-fns/getOverlappingDaysInIntervals.js"() {
  }
});

// node_modules/date-fns/getSeconds.js
var init_getSeconds = __esm({
  "node_modules/date-fns/getSeconds.js"() {
  }
});

// node_modules/date-fns/getTime.js
var init_getTime = __esm({
  "node_modules/date-fns/getTime.js"() {
  }
});

// node_modules/date-fns/getUnixTime.js
var init_getUnixTime = __esm({
  "node_modules/date-fns/getUnixTime.js"() {
  }
});

// node_modules/date-fns/getWeekOfMonth.js
var init_getWeekOfMonth = __esm({
  "node_modules/date-fns/getWeekOfMonth.js"() {
  }
});

// node_modules/date-fns/lastDayOfMonth.js
var init_lastDayOfMonth = __esm({
  "node_modules/date-fns/lastDayOfMonth.js"() {
  }
});

// node_modules/date-fns/getWeeksInMonth.js
var init_getWeeksInMonth = __esm({
  "node_modules/date-fns/getWeeksInMonth.js"() {
  }
});

// node_modules/date-fns/getYear.js
function getYear(date, options) {
  return toDate(date, options?.in).getFullYear();
}
var init_getYear = __esm({
  "node_modules/date-fns/getYear.js"() {
    init_toDate();
  }
});

// node_modules/date-fns/hoursToMilliseconds.js
var init_hoursToMilliseconds = __esm({
  "node_modules/date-fns/hoursToMilliseconds.js"() {
  }
});

// node_modules/date-fns/hoursToMinutes.js
var init_hoursToMinutes = __esm({
  "node_modules/date-fns/hoursToMinutes.js"() {
  }
});

// node_modules/date-fns/hoursToSeconds.js
var init_hoursToSeconds = __esm({
  "node_modules/date-fns/hoursToSeconds.js"() {
  }
});

// node_modules/date-fns/interval.js
var init_interval = __esm({
  "node_modules/date-fns/interval.js"() {
  }
});

// node_modules/date-fns/intervalToDuration.js
var init_intervalToDuration = __esm({
  "node_modules/date-fns/intervalToDuration.js"() {
  }
});

// node_modules/date-fns/intlFormat.js
var init_intlFormat = __esm({
  "node_modules/date-fns/intlFormat.js"() {
  }
});

// node_modules/date-fns/intlFormatDistance.js
var init_intlFormatDistance = __esm({
  "node_modules/date-fns/intlFormatDistance.js"() {
  }
});

// node_modules/date-fns/isAfter.js
var init_isAfter = __esm({
  "node_modules/date-fns/isAfter.js"() {
  }
});

// node_modules/date-fns/isBefore.js
var init_isBefore = __esm({
  "node_modules/date-fns/isBefore.js"() {
  }
});

// node_modules/date-fns/isEqual.js
var init_isEqual = __esm({
  "node_modules/date-fns/isEqual.js"() {
  }
});

// node_modules/date-fns/isExists.js
var init_isExists = __esm({
  "node_modules/date-fns/isExists.js"() {
  }
});

// node_modules/date-fns/isFirstDayOfMonth.js
var init_isFirstDayOfMonth = __esm({
  "node_modules/date-fns/isFirstDayOfMonth.js"() {
  }
});

// node_modules/date-fns/isFriday.js
var init_isFriday = __esm({
  "node_modules/date-fns/isFriday.js"() {
  }
});

// node_modules/date-fns/isFuture.js
var init_isFuture = __esm({
  "node_modules/date-fns/isFuture.js"() {
  }
});

// node_modules/date-fns/transpose.js
var init_transpose = __esm({
  "node_modules/date-fns/transpose.js"() {
  }
});

// node_modules/date-fns/setWeek.js
var init_setWeek = __esm({
  "node_modules/date-fns/setWeek.js"() {
  }
});

// node_modules/date-fns/setISOWeek.js
var init_setISOWeek = __esm({
  "node_modules/date-fns/setISOWeek.js"() {
  }
});

// node_modules/date-fns/setDay.js
var init_setDay = __esm({
  "node_modules/date-fns/setDay.js"() {
  }
});

// node_modules/date-fns/setISODay.js
var init_setISODay = __esm({
  "node_modules/date-fns/setISODay.js"() {
  }
});

// node_modules/date-fns/parse.js
var init_parse = __esm({
  "node_modules/date-fns/parse.js"() {
  }
});

// node_modules/date-fns/isMatch.js
var init_isMatch = __esm({
  "node_modules/date-fns/isMatch.js"() {
  }
});

// node_modules/date-fns/isMonday.js
var init_isMonday = __esm({
  "node_modules/date-fns/isMonday.js"() {
  }
});

// node_modules/date-fns/isPast.js
var init_isPast = __esm({
  "node_modules/date-fns/isPast.js"() {
  }
});

// node_modules/date-fns/startOfHour.js
var init_startOfHour = __esm({
  "node_modules/date-fns/startOfHour.js"() {
  }
});

// node_modules/date-fns/isSameHour.js
var init_isSameHour = __esm({
  "node_modules/date-fns/isSameHour.js"() {
  }
});

// node_modules/date-fns/isSameWeek.js
var init_isSameWeek = __esm({
  "node_modules/date-fns/isSameWeek.js"() {
  }
});

// node_modules/date-fns/isSameISOWeek.js
var init_isSameISOWeek = __esm({
  "node_modules/date-fns/isSameISOWeek.js"() {
  }
});

// node_modules/date-fns/isSameISOWeekYear.js
var init_isSameISOWeekYear = __esm({
  "node_modules/date-fns/isSameISOWeekYear.js"() {
  }
});

// node_modules/date-fns/startOfMinute.js
var init_startOfMinute = __esm({
  "node_modules/date-fns/startOfMinute.js"() {
  }
});

// node_modules/date-fns/isSameMinute.js
var init_isSameMinute = __esm({
  "node_modules/date-fns/isSameMinute.js"() {
  }
});

// node_modules/date-fns/isSameMonth.js
var init_isSameMonth = __esm({
  "node_modules/date-fns/isSameMonth.js"() {
  }
});

// node_modules/date-fns/isSameQuarter.js
var init_isSameQuarter = __esm({
  "node_modules/date-fns/isSameQuarter.js"() {
  }
});

// node_modules/date-fns/startOfSecond.js
var init_startOfSecond = __esm({
  "node_modules/date-fns/startOfSecond.js"() {
  }
});

// node_modules/date-fns/isSameSecond.js
var init_isSameSecond = __esm({
  "node_modules/date-fns/isSameSecond.js"() {
  }
});

// node_modules/date-fns/isSameYear.js
var init_isSameYear = __esm({
  "node_modules/date-fns/isSameYear.js"() {
  }
});

// node_modules/date-fns/isThisHour.js
var init_isThisHour = __esm({
  "node_modules/date-fns/isThisHour.js"() {
  }
});

// node_modules/date-fns/isThisISOWeek.js
var init_isThisISOWeek = __esm({
  "node_modules/date-fns/isThisISOWeek.js"() {
  }
});

// node_modules/date-fns/isThisMinute.js
var init_isThisMinute = __esm({
  "node_modules/date-fns/isThisMinute.js"() {
  }
});

// node_modules/date-fns/isThisMonth.js
var init_isThisMonth = __esm({
  "node_modules/date-fns/isThisMonth.js"() {
  }
});

// node_modules/date-fns/isThisQuarter.js
var init_isThisQuarter = __esm({
  "node_modules/date-fns/isThisQuarter.js"() {
  }
});

// node_modules/date-fns/isThisSecond.js
var init_isThisSecond = __esm({
  "node_modules/date-fns/isThisSecond.js"() {
  }
});

// node_modules/date-fns/isThisWeek.js
var init_isThisWeek = __esm({
  "node_modules/date-fns/isThisWeek.js"() {
  }
});

// node_modules/date-fns/isThisYear.js
var init_isThisYear = __esm({
  "node_modules/date-fns/isThisYear.js"() {
  }
});

// node_modules/date-fns/isThursday.js
var init_isThursday = __esm({
  "node_modules/date-fns/isThursday.js"() {
  }
});

// node_modules/date-fns/isToday.js
var init_isToday = __esm({
  "node_modules/date-fns/isToday.js"() {
  }
});

// node_modules/date-fns/isTomorrow.js
var init_isTomorrow = __esm({
  "node_modules/date-fns/isTomorrow.js"() {
  }
});

// node_modules/date-fns/isTuesday.js
var init_isTuesday = __esm({
  "node_modules/date-fns/isTuesday.js"() {
  }
});

// node_modules/date-fns/isWednesday.js
var init_isWednesday = __esm({
  "node_modules/date-fns/isWednesday.js"() {
  }
});

// node_modules/date-fns/isWithinInterval.js
var init_isWithinInterval = __esm({
  "node_modules/date-fns/isWithinInterval.js"() {
  }
});

// node_modules/date-fns/subDays.js
var init_subDays = __esm({
  "node_modules/date-fns/subDays.js"() {
  }
});

// node_modules/date-fns/isYesterday.js
var init_isYesterday = __esm({
  "node_modules/date-fns/isYesterday.js"() {
  }
});

// node_modules/date-fns/lastDayOfDecade.js
var init_lastDayOfDecade = __esm({
  "node_modules/date-fns/lastDayOfDecade.js"() {
  }
});

// node_modules/date-fns/lastDayOfWeek.js
var init_lastDayOfWeek = __esm({
  "node_modules/date-fns/lastDayOfWeek.js"() {
  }
});

// node_modules/date-fns/lastDayOfISOWeek.js
var init_lastDayOfISOWeek = __esm({
  "node_modules/date-fns/lastDayOfISOWeek.js"() {
  }
});

// node_modules/date-fns/lastDayOfISOWeekYear.js
var init_lastDayOfISOWeekYear = __esm({
  "node_modules/date-fns/lastDayOfISOWeekYear.js"() {
  }
});

// node_modules/date-fns/lastDayOfQuarter.js
var init_lastDayOfQuarter = __esm({
  "node_modules/date-fns/lastDayOfQuarter.js"() {
  }
});

// node_modules/date-fns/lastDayOfYear.js
var init_lastDayOfYear = __esm({
  "node_modules/date-fns/lastDayOfYear.js"() {
  }
});

// node_modules/date-fns/lightFormat.js
var init_lightFormat = __esm({
  "node_modules/date-fns/lightFormat.js"() {
  }
});

// node_modules/date-fns/milliseconds.js
var init_milliseconds = __esm({
  "node_modules/date-fns/milliseconds.js"() {
  }
});

// node_modules/date-fns/millisecondsToHours.js
var init_millisecondsToHours = __esm({
  "node_modules/date-fns/millisecondsToHours.js"() {
  }
});

// node_modules/date-fns/millisecondsToMinutes.js
var init_millisecondsToMinutes = __esm({
  "node_modules/date-fns/millisecondsToMinutes.js"() {
  }
});

// node_modules/date-fns/millisecondsToSeconds.js
var init_millisecondsToSeconds = __esm({
  "node_modules/date-fns/millisecondsToSeconds.js"() {
  }
});

// node_modules/date-fns/minutesToHours.js
var init_minutesToHours = __esm({
  "node_modules/date-fns/minutesToHours.js"() {
  }
});

// node_modules/date-fns/minutesToMilliseconds.js
var init_minutesToMilliseconds = __esm({
  "node_modules/date-fns/minutesToMilliseconds.js"() {
  }
});

// node_modules/date-fns/minutesToSeconds.js
var init_minutesToSeconds = __esm({
  "node_modules/date-fns/minutesToSeconds.js"() {
  }
});

// node_modules/date-fns/monthsToQuarters.js
var init_monthsToQuarters = __esm({
  "node_modules/date-fns/monthsToQuarters.js"() {
  }
});

// node_modules/date-fns/monthsToYears.js
var init_monthsToYears = __esm({
  "node_modules/date-fns/monthsToYears.js"() {
  }
});

// node_modules/date-fns/nextDay.js
function nextDay(date, day, options) {
  let delta = day - getDay(date, options);
  if (delta <= 0) delta += 7;
  return addDays(date, delta, options);
}
var init_nextDay = __esm({
  "node_modules/date-fns/nextDay.js"() {
    init_addDays();
    init_getDay();
  }
});

// node_modules/date-fns/nextFriday.js
var init_nextFriday = __esm({
  "node_modules/date-fns/nextFriday.js"() {
  }
});

// node_modules/date-fns/nextMonday.js
var init_nextMonday = __esm({
  "node_modules/date-fns/nextMonday.js"() {
  }
});

// node_modules/date-fns/nextSaturday.js
var init_nextSaturday = __esm({
  "node_modules/date-fns/nextSaturday.js"() {
  }
});

// node_modules/date-fns/nextSunday.js
var init_nextSunday = __esm({
  "node_modules/date-fns/nextSunday.js"() {
  }
});

// node_modules/date-fns/nextThursday.js
var init_nextThursday = __esm({
  "node_modules/date-fns/nextThursday.js"() {
  }
});

// node_modules/date-fns/nextTuesday.js
var init_nextTuesday = __esm({
  "node_modules/date-fns/nextTuesday.js"() {
  }
});

// node_modules/date-fns/nextWednesday.js
var init_nextWednesday = __esm({
  "node_modules/date-fns/nextWednesday.js"() {
  }
});

// node_modules/date-fns/parseISO.js
function parseISO(argument, options) {
  const invalidDate = () => constructFrom(options?.in, NaN);
  const additionalDigits = options?.additionalDigits ?? 2;
  const dateStrings = splitDateString(argument);
  let date;
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(+date)) return invalidDate();
  const timestamp = +date;
  let time = 0;
  let offset4;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) return invalidDate();
  }
  if (dateStrings.timezone) {
    offset4 = parseTimezone(dateStrings.timezone);
    if (isNaN(offset4)) return invalidDate();
  } else {
    const tmpDate = new Date(timestamp + time);
    const result = toDate(0, options?.in);
    result.setFullYear(
      tmpDate.getUTCFullYear(),
      tmpDate.getUTCMonth(),
      tmpDate.getUTCDate()
    );
    result.setHours(
      tmpDate.getUTCHours(),
      tmpDate.getUTCMinutes(),
      tmpDate.getUTCSeconds(),
      tmpDate.getUTCMilliseconds()
    );
    return result;
  }
  return toDate(timestamp + time + offset4, options?.in);
}
function splitDateString(dateString) {
  const dateStrings = {};
  const array = dateString.split(patterns.dateTimeDelimiter);
  let timeString;
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(
        dateStrings.date.length,
        dateString.length
      );
    }
  }
  if (timeString) {
    const token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  const regex = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)"
  );
  const captures = dateString.match(regex);
  if (!captures) return { year: NaN, restDateString: "" };
  const year = captures[1] ? parseInt(captures[1]) : null;
  const century = captures[2] ? parseInt(captures[2]) : null;
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  if (year === null) return /* @__PURE__ */ new Date(NaN);
  const captures = dateString.match(dateRegex);
  if (!captures) return /* @__PURE__ */ new Date(NaN);
  const isWeekDate = !!captures[4];
  const dayOfYear = parseDateUnit(captures[1]);
  const month = parseDateUnit(captures[2]) - 1;
  const day = parseDateUnit(captures[3]);
  const week = parseDateUnit(captures[4]);
  const dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    const date = /* @__PURE__ */ new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  const captures = timeString.match(timeRegex);
  if (!captures) return NaN;
  const hours = parseTimeUnit(captures[1]);
  const minutes = parseTimeUnit(captures[2]);
  const seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1e3;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === "Z") return 0;
  const captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  const sign = captures[1] === "+" ? -1 : 1;
  const hours = parseInt(captures[2]);
  const minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  const date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}
var patterns, dateRegex, timeRegex, timezoneRegex, daysInMonths;
var init_parseISO = __esm({
  "node_modules/date-fns/parseISO.js"() {
    init_constants();
    init_constructFrom();
    init_toDate();
    patterns = {
      dateTimeDelimiter: /[T ]/,
      timeZoneDelimiter: /[Z ]/i,
      timezone: /([Z+-].*)$/
    };
    dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
    timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
    timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
    daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }
});

// node_modules/date-fns/parseJSON.js
var init_parseJSON = __esm({
  "node_modules/date-fns/parseJSON.js"() {
  }
});

// node_modules/date-fns/previousDay.js
var init_previousDay = __esm({
  "node_modules/date-fns/previousDay.js"() {
  }
});

// node_modules/date-fns/previousFriday.js
var init_previousFriday = __esm({
  "node_modules/date-fns/previousFriday.js"() {
  }
});

// node_modules/date-fns/previousMonday.js
var init_previousMonday = __esm({
  "node_modules/date-fns/previousMonday.js"() {
  }
});

// node_modules/date-fns/previousSaturday.js
var init_previousSaturday = __esm({
  "node_modules/date-fns/previousSaturday.js"() {
  }
});

// node_modules/date-fns/previousSunday.js
var init_previousSunday = __esm({
  "node_modules/date-fns/previousSunday.js"() {
  }
});

// node_modules/date-fns/previousThursday.js
var init_previousThursday = __esm({
  "node_modules/date-fns/previousThursday.js"() {
  }
});

// node_modules/date-fns/previousTuesday.js
var init_previousTuesday = __esm({
  "node_modules/date-fns/previousTuesday.js"() {
  }
});

// node_modules/date-fns/previousWednesday.js
var init_previousWednesday = __esm({
  "node_modules/date-fns/previousWednesday.js"() {
  }
});

// node_modules/date-fns/quartersToMonths.js
var init_quartersToMonths = __esm({
  "node_modules/date-fns/quartersToMonths.js"() {
  }
});

// node_modules/date-fns/quartersToYears.js
var init_quartersToYears = __esm({
  "node_modules/date-fns/quartersToYears.js"() {
  }
});

// node_modules/date-fns/roundToNearestHours.js
var init_roundToNearestHours = __esm({
  "node_modules/date-fns/roundToNearestHours.js"() {
  }
});

// node_modules/date-fns/roundToNearestMinutes.js
var init_roundToNearestMinutes = __esm({
  "node_modules/date-fns/roundToNearestMinutes.js"() {
  }
});

// node_modules/date-fns/secondsToHours.js
var init_secondsToHours = __esm({
  "node_modules/date-fns/secondsToHours.js"() {
  }
});

// node_modules/date-fns/secondsToMilliseconds.js
var init_secondsToMilliseconds = __esm({
  "node_modules/date-fns/secondsToMilliseconds.js"() {
  }
});

// node_modules/date-fns/secondsToMinutes.js
var init_secondsToMinutes = __esm({
  "node_modules/date-fns/secondsToMinutes.js"() {
  }
});

// node_modules/date-fns/setMonth.js
var init_setMonth = __esm({
  "node_modules/date-fns/setMonth.js"() {
  }
});

// node_modules/date-fns/set.js
var init_set = __esm({
  "node_modules/date-fns/set.js"() {
  }
});

// node_modules/date-fns/setDate.js
var init_setDate = __esm({
  "node_modules/date-fns/setDate.js"() {
  }
});

// node_modules/date-fns/setDayOfYear.js
var init_setDayOfYear = __esm({
  "node_modules/date-fns/setDayOfYear.js"() {
  }
});

// node_modules/date-fns/setDefaultOptions.js
var init_setDefaultOptions = __esm({
  "node_modules/date-fns/setDefaultOptions.js"() {
  }
});

// node_modules/date-fns/setHours.js
var init_setHours = __esm({
  "node_modules/date-fns/setHours.js"() {
  }
});

// node_modules/date-fns/setMilliseconds.js
var init_setMilliseconds = __esm({
  "node_modules/date-fns/setMilliseconds.js"() {
  }
});

// node_modules/date-fns/setMinutes.js
var init_setMinutes = __esm({
  "node_modules/date-fns/setMinutes.js"() {
  }
});

// node_modules/date-fns/setQuarter.js
var init_setQuarter = __esm({
  "node_modules/date-fns/setQuarter.js"() {
  }
});

// node_modules/date-fns/setSeconds.js
var init_setSeconds = __esm({
  "node_modules/date-fns/setSeconds.js"() {
  }
});

// node_modules/date-fns/setWeekYear.js
var init_setWeekYear = __esm({
  "node_modules/date-fns/setWeekYear.js"() {
  }
});

// node_modules/date-fns/setYear.js
var init_setYear = __esm({
  "node_modules/date-fns/setYear.js"() {
  }
});

// node_modules/date-fns/startOfDecade.js
var init_startOfDecade = __esm({
  "node_modules/date-fns/startOfDecade.js"() {
  }
});

// node_modules/date-fns/startOfToday.js
var init_startOfToday = __esm({
  "node_modules/date-fns/startOfToday.js"() {
  }
});

// node_modules/date-fns/startOfTomorrow.js
var init_startOfTomorrow = __esm({
  "node_modules/date-fns/startOfTomorrow.js"() {
  }
});

// node_modules/date-fns/startOfYesterday.js
var init_startOfYesterday = __esm({
  "node_modules/date-fns/startOfYesterday.js"() {
  }
});

// node_modules/date-fns/subMonths.js
var init_subMonths = __esm({
  "node_modules/date-fns/subMonths.js"() {
  }
});

// node_modules/date-fns/sub.js
var init_sub = __esm({
  "node_modules/date-fns/sub.js"() {
  }
});

// node_modules/date-fns/subBusinessDays.js
var init_subBusinessDays = __esm({
  "node_modules/date-fns/subBusinessDays.js"() {
  }
});

// node_modules/date-fns/subHours.js
var init_subHours = __esm({
  "node_modules/date-fns/subHours.js"() {
  }
});

// node_modules/date-fns/subMilliseconds.js
var init_subMilliseconds = __esm({
  "node_modules/date-fns/subMilliseconds.js"() {
  }
});

// node_modules/date-fns/subMinutes.js
var init_subMinutes = __esm({
  "node_modules/date-fns/subMinutes.js"() {
  }
});

// node_modules/date-fns/subQuarters.js
var init_subQuarters = __esm({
  "node_modules/date-fns/subQuarters.js"() {
  }
});

// node_modules/date-fns/subSeconds.js
var init_subSeconds = __esm({
  "node_modules/date-fns/subSeconds.js"() {
  }
});

// node_modules/date-fns/subWeeks.js
function subWeeks(date, amount, options) {
  return addWeeks(date, -amount, options);
}
var init_subWeeks = __esm({
  "node_modules/date-fns/subWeeks.js"() {
    init_addWeeks();
  }
});

// node_modules/date-fns/subYears.js
var init_subYears = __esm({
  "node_modules/date-fns/subYears.js"() {
  }
});

// node_modules/date-fns/weeksToDays.js
var init_weeksToDays = __esm({
  "node_modules/date-fns/weeksToDays.js"() {
  }
});

// node_modules/date-fns/yearsToDays.js
var init_yearsToDays = __esm({
  "node_modules/date-fns/yearsToDays.js"() {
  }
});

// node_modules/date-fns/yearsToMonths.js
var init_yearsToMonths = __esm({
  "node_modules/date-fns/yearsToMonths.js"() {
  }
});

// node_modules/date-fns/yearsToQuarters.js
var init_yearsToQuarters = __esm({
  "node_modules/date-fns/yearsToQuarters.js"() {
  }
});

// node_modules/date-fns/index.js
var init_date_fns = __esm({
  "node_modules/date-fns/index.js"() {
    init_add();
    init_addBusinessDays();
    init_addDays();
    init_addHours();
    init_addISOWeekYears();
    init_addMilliseconds();
    init_addMinutes();
    init_addMonths();
    init_addQuarters();
    init_addSeconds();
    init_addWeeks();
    init_addYears();
    init_areIntervalsOverlapping();
    init_clamp();
    init_closestIndexTo();
    init_closestTo();
    init_compareAsc();
    init_compareDesc();
    init_constructFrom();
    init_constructNow();
    init_daysToWeeks();
    init_differenceInBusinessDays();
    init_differenceInCalendarDays();
    init_differenceInCalendarISOWeekYears();
    init_differenceInCalendarISOWeeks();
    init_differenceInCalendarMonths();
    init_differenceInCalendarQuarters();
    init_differenceInCalendarWeeks();
    init_differenceInCalendarYears();
    init_differenceInDays();
    init_differenceInHours();
    init_differenceInISOWeekYears();
    init_differenceInMilliseconds();
    init_differenceInMinutes();
    init_differenceInMonths();
    init_differenceInQuarters();
    init_differenceInSeconds();
    init_differenceInWeeks();
    init_differenceInYears();
    init_eachDayOfInterval();
    init_eachHourOfInterval();
    init_eachMinuteOfInterval();
    init_eachMonthOfInterval();
    init_eachQuarterOfInterval();
    init_eachWeekOfInterval();
    init_eachWeekendOfInterval();
    init_eachWeekendOfMonth();
    init_eachWeekendOfYear();
    init_eachYearOfInterval();
    init_endOfDay();
    init_endOfDecade();
    init_endOfHour();
    init_endOfISOWeek();
    init_endOfISOWeekYear();
    init_endOfMinute();
    init_endOfMonth();
    init_endOfQuarter();
    init_endOfSecond();
    init_endOfToday();
    init_endOfTomorrow();
    init_endOfWeek();
    init_endOfYear();
    init_endOfYesterday();
    init_format();
    init_formatDistance();
    init_formatDistanceStrict();
    init_formatDistanceToNow();
    init_formatDistanceToNowStrict();
    init_formatDuration();
    init_formatISO();
    init_formatISO9075();
    init_formatISODuration();
    init_formatRFC3339();
    init_formatRFC7231();
    init_formatRelative();
    init_fromUnixTime();
    init_getDate();
    init_getDay();
    init_getDayOfYear();
    init_getDaysInMonth();
    init_getDaysInYear();
    init_getDecade();
    init_getDefaultOptions();
    init_getHours();
    init_getISODay();
    init_getISOWeek();
    init_getISOWeekYear();
    init_getISOWeeksInYear();
    init_getMilliseconds();
    init_getMinutes();
    init_getMonth();
    init_getOverlappingDaysInIntervals();
    init_getQuarter();
    init_getSeconds();
    init_getTime();
    init_getUnixTime();
    init_getWeek();
    init_getWeekOfMonth();
    init_getWeekYear();
    init_getWeeksInMonth();
    init_getYear();
    init_hoursToMilliseconds();
    init_hoursToMinutes();
    init_hoursToSeconds();
    init_interval();
    init_intervalToDuration();
    init_intlFormat();
    init_intlFormatDistance();
    init_isAfter();
    init_isBefore();
    init_isDate();
    init_isEqual();
    init_isExists();
    init_isFirstDayOfMonth();
    init_isFriday();
    init_isFuture();
    init_isLastDayOfMonth();
    init_isLeapYear();
    init_isMatch();
    init_isMonday();
    init_isPast();
    init_isSameDay();
    init_isSameHour();
    init_isSameISOWeek();
    init_isSameISOWeekYear();
    init_isSameMinute();
    init_isSameMonth();
    init_isSameQuarter();
    init_isSameSecond();
    init_isSameWeek();
    init_isSameYear();
    init_isSaturday();
    init_isSunday();
    init_isThisHour();
    init_isThisISOWeek();
    init_isThisMinute();
    init_isThisMonth();
    init_isThisQuarter();
    init_isThisSecond();
    init_isThisWeek();
    init_isThisYear();
    init_isThursday();
    init_isToday();
    init_isTomorrow();
    init_isTuesday();
    init_isValid();
    init_isWednesday();
    init_isWeekend();
    init_isWithinInterval();
    init_isYesterday();
    init_lastDayOfDecade();
    init_lastDayOfISOWeek();
    init_lastDayOfISOWeekYear();
    init_lastDayOfMonth();
    init_lastDayOfQuarter();
    init_lastDayOfWeek();
    init_lastDayOfYear();
    init_lightFormat();
    init_max();
    init_milliseconds();
    init_millisecondsToHours();
    init_millisecondsToMinutes();
    init_millisecondsToSeconds();
    init_min();
    init_minutesToHours();
    init_minutesToMilliseconds();
    init_minutesToSeconds();
    init_monthsToQuarters();
    init_monthsToYears();
    init_nextDay();
    init_nextFriday();
    init_nextMonday();
    init_nextSaturday();
    init_nextSunday();
    init_nextThursday();
    init_nextTuesday();
    init_nextWednesday();
    init_parse();
    init_parseISO();
    init_parseJSON();
    init_previousDay();
    init_previousFriday();
    init_previousMonday();
    init_previousSaturday();
    init_previousSunday();
    init_previousThursday();
    init_previousTuesday();
    init_previousWednesday();
    init_quartersToMonths();
    init_quartersToYears();
    init_roundToNearestHours();
    init_roundToNearestMinutes();
    init_secondsToHours();
    init_secondsToMilliseconds();
    init_secondsToMinutes();
    init_set();
    init_setDate();
    init_setDay();
    init_setDayOfYear();
    init_setDefaultOptions();
    init_setHours();
    init_setISODay();
    init_setISOWeek();
    init_setISOWeekYear();
    init_setMilliseconds();
    init_setMinutes();
    init_setMonth();
    init_setQuarter();
    init_setSeconds();
    init_setWeek();
    init_setWeekYear();
    init_setYear();
    init_startOfDay();
    init_startOfDecade();
    init_startOfHour();
    init_startOfISOWeek();
    init_startOfISOWeekYear();
    init_startOfMinute();
    init_startOfMonth();
    init_startOfQuarter();
    init_startOfSecond();
    init_startOfToday();
    init_startOfTomorrow();
    init_startOfWeek();
    init_startOfWeekYear();
    init_startOfYear();
    init_startOfYesterday();
    init_sub();
    init_subBusinessDays();
    init_subDays();
    init_subHours();
    init_subISOWeekYears();
    init_subMilliseconds();
    init_subMinutes();
    init_subMonths();
    init_subQuarters();
    init_subSeconds();
    init_subWeeks();
    init_subYears();
    init_toDate();
    init_transpose();
    init_weeksToDays();
    init_yearsToDays();
    init_yearsToMonths();
    init_yearsToQuarters();
  }
});

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
function isTableElement(element) {
  return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
  try {
    if (element.matches(":popover-open")) {
      return true;
    }
  } catch (_e) {
  }
  try {
    return element.matches(":modal");
  } catch (_e) {
    return false;
  }
}
function isContainingBlock(elementOrCss) {
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (isWebKitValue == null) {
    isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
  }
  return isWebKitValue;
}
function isLastTraversableNode(node) {
  return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  } else {
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
var willChangeRe, containRe, isNotNone, isWebKitValue;
var init_floating_ui_utils_dom = __esm({
  "node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs"() {
    willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
    containRe = /paint|layout|strict|content/;
    isNotNone = (value) => !!value && value !== "none";
  }
});

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  const firstChar = placement[0];
  return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  const side = getSide(placement);
  return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
var min, max, round, floor, createCoords, oppositeSideMap, lrPlacement, rlPlacement, tbPlacement, btPlacement;
var init_floating_ui_utils = __esm({
  "node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs"() {
    min = Math.min;
    max = Math.max;
    round = Math.round;
    floor = Math.floor;
    createCoords = (v) => ({
      x: v,
      y: v
    });
    oppositeSideMap = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    lrPlacement = ["left", "right"];
    rlPlacement = ["right", "left"];
    tbPlacement = ["top", "bottom"];
    btPlacement = ["bottom", "top"];
  }
});

// node_modules/tabbable/dist/index.js
var require_dist = __commonJS({
  "node_modules/tabbable/dist/index.js"(exports2) {
    "use strict";
    var candidateSelectors = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"];
    var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
    var NoElement = typeof Element === "undefined";
    var matches = NoElement ? function() {
    } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
      var _element$getRootNode;
      return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
    } : function(element) {
      return element === null || element === void 0 ? void 0 : element.ownerDocument;
    };
    var _isInert = function isInert(node, lookUp) {
      var _node$getAttribute;
      if (lookUp === void 0) {
        lookUp = true;
      }
      var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
      var inert = inertAtt === "" || inertAtt === "true";
      var result = inert || lookUp && node && // closest does not exist on shadow roots, so we fall back to a manual
      // lookup upward, in case it is not defined.
      (typeof node.closest === "function" ? node.closest("[inert]") : _isInert(node.parentNode));
      return result;
    };
    var isContentEditable = function isContentEditable2(node) {
      var _node$getAttribute2;
      var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
      return attValue === "" || attValue === "true";
    };
    var getCandidates = function getCandidates2(el, includeContainer, filter) {
      if (_isInert(el)) {
        return [];
      }
      var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
      if (includeContainer && matches.call(el, candidateSelector)) {
        candidates.unshift(el);
      }
      candidates = candidates.filter(filter);
      return candidates;
    };
    var _getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
      var candidates = [];
      var elementsToCheck = Array.from(elements);
      while (elementsToCheck.length) {
        var element = elementsToCheck.shift();
        if (_isInert(element, false)) {
          continue;
        }
        if (element.tagName === "SLOT") {
          var assigned = element.assignedElements();
          var content = assigned.length ? assigned : element.children;
          var nestedCandidates = _getCandidatesIteratively(content, true, options);
          if (options.flatten) {
            candidates.push.apply(candidates, nestedCandidates);
          } else {
            candidates.push({
              scopeParent: element,
              candidates: nestedCandidates
            });
          }
        } else {
          var validCandidate = matches.call(element, candidateSelector);
          if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
            candidates.push(element);
          }
          var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
          typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
          var validShadowRoot = !_isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
          if (shadowRoot && validShadowRoot) {
            var _nestedCandidates = _getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
            if (options.flatten) {
              candidates.push.apply(candidates, _nestedCandidates);
            } else {
              candidates.push({
                scopeParent: element,
                candidates: _nestedCandidates
              });
            }
          } else {
            elementsToCheck.unshift.apply(elementsToCheck, element.children);
          }
        }
      }
      return candidates;
    };
    var hasTabIndex = function hasTabIndex2(node) {
      return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
    };
    var getTabIndex = function getTabIndex2(node) {
      if (!node) {
        throw new Error("No node provided");
      }
      if (node.tabIndex < 0) {
        if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
          return 0;
        }
      }
      return node.tabIndex;
    };
    var getSortOrderTabIndex = function getSortOrderTabIndex2(node, isScope) {
      var tabIndex = getTabIndex(node);
      if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
        return 0;
      }
      return tabIndex;
    };
    var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
      return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
    };
    var isInput = function isInput2(node) {
      return node.tagName === "INPUT";
    };
    var isHiddenInput = function isHiddenInput2(node) {
      return isInput(node) && node.type === "hidden";
    };
    var isDetailsWithSummary = function isDetailsWithSummary2(node) {
      var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
        return child.tagName === "SUMMARY";
      });
      return r;
    };
    var getCheckedRadio = function getCheckedRadio2(nodes, form) {
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].checked && nodes[i].form === form) {
          return nodes[i];
        }
      }
    };
    var isTabbableRadio = function isTabbableRadio2(node) {
      if (!node.name) {
        return true;
      }
      var radioScope = node.form || getRootNode(node);
      var queryRadios = function queryRadios2(name) {
        return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
      };
      var radioSet;
      if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
        radioSet = queryRadios(window.CSS.escape(node.name));
      } else {
        try {
          radioSet = queryRadios(node.name);
        } catch (err) {
          console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
          return false;
        }
      }
      var checked = getCheckedRadio(radioSet, node.form);
      return !checked || checked === node;
    };
    var isRadio = function isRadio2(node) {
      return isInput(node) && node.type === "radio";
    };
    var isNonTabbableRadio = function isNonTabbableRadio2(node) {
      return isRadio(node) && !isTabbableRadio(node);
    };
    var isNodeAttached = function isNodeAttached2(node) {
      var _nodeRoot;
      var nodeRoot = node && getRootNode(node);
      var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
      var attached = false;
      if (nodeRoot && nodeRoot !== node) {
        var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
        attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
        while (!attached && nodeRootHost) {
          var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
          nodeRoot = getRootNode(nodeRootHost);
          nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
          attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
        }
      }
      return attached;
    };
    var isZeroArea = function isZeroArea2(node) {
      var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
      return width === 0 && height === 0;
    };
    var isHidden = function isHidden2(node, _ref) {
      var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
      if (displayCheck === "full-native") {
        if ("checkVisibility" in node) {
          var visible = node.checkVisibility({
            // Checking opacity might be desirable for some use cases, but natively,
            // opacity zero elements _are_ focusable and tabbable.
            checkOpacity: false,
            opacityProperty: false,
            contentVisibilityAuto: true,
            visibilityProperty: true,
            // This is an alias for `visibilityProperty`. Contemporary browsers
            // support both. However, this alias has wider browser support (Chrome
            // >= 105 and Firefox >= 106, vs. Chrome >= 121 and Firefox >= 122), so
            // we include it anyway.
            checkVisibilityCSS: true
          });
          return !visible;
        }
      }
      var _getComputedStyle = getComputedStyle(node), visibility = _getComputedStyle.visibility;
      if (visibility === "hidden" || visibility === "collapse") {
        return true;
      }
      var isDirectSummary = matches.call(node, "details>summary:first-of-type");
      var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
      if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
        return true;
      }
      if (!displayCheck || displayCheck === "full" || // full-native can run this branch when it falls through in case
      // Element#checkVisibility is unsupported
      displayCheck === "full-native" || displayCheck === "legacy-full") {
        if (typeof getShadowRoot === "function") {
          var originalNode = node;
          while (node) {
            var parentElement = node.parentElement;
            var rootNode = getRootNode(node);
            if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
              return isZeroArea(node);
            } else if (node.assignedSlot) {
              node = node.assignedSlot;
            } else if (!parentElement && rootNode !== node.ownerDocument) {
              node = rootNode.host;
            } else {
              node = parentElement;
            }
          }
          node = originalNode;
        }
        if (isNodeAttached(node)) {
          return !node.getClientRects().length;
        }
        if (displayCheck !== "legacy-full") {
          return true;
        }
      } else if (displayCheck === "non-zero-area") {
        return isZeroArea(node);
      }
      return false;
    };
    var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
      if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
        var parentNode = node.parentElement;
        while (parentNode) {
          if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
            for (var i = 0; i < parentNode.children.length; i++) {
              var child = parentNode.children.item(i);
              if (child.tagName === "LEGEND") {
                return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
              }
            }
            return true;
          }
          parentNode = parentNode.parentElement;
        }
      }
      return false;
    };
    var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
      if (node.disabled || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
      isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
        return false;
      }
      return true;
    };
    var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
      if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
        return false;
      }
      return true;
    };
    var isShadowRootTabbable = function isShadowRootTabbable2(shadowHostNode) {
      var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
      if (isNaN(tabIndex) || tabIndex >= 0) {
        return true;
      }
      return false;
    };
    var _sortByOrder = function sortByOrder(candidates) {
      var regularTabbables = [];
      var orderedTabbables = [];
      candidates.forEach(function(item, i) {
        var isScope = !!item.scopeParent;
        var element = isScope ? item.scopeParent : item;
        var candidateTabindex = getSortOrderTabIndex(element, isScope);
        var elements = isScope ? _sortByOrder(item.candidates) : element;
        if (candidateTabindex === 0) {
          isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
        } else {
          orderedTabbables.push({
            documentOrder: i,
            tabIndex: candidateTabindex,
            item,
            isScope,
            content: elements
          });
        }
      });
      return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
        sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
        return acc;
      }, []).concat(regularTabbables);
    };
    var tabbable2 = function tabbable3(container, options) {
      options = options || {};
      var candidates;
      if (options.getShadowRoot) {
        candidates = _getCandidatesIteratively([container], options.includeContainer, {
          filter: isNodeMatchingSelectorTabbable.bind(null, options),
          flatten: false,
          getShadowRoot: options.getShadowRoot,
          shadowRootFilter: isShadowRootTabbable
        });
      } else {
        candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
      }
      return _sortByOrder(candidates);
    };
    var focusable = function focusable2(container, options) {
      options = options || {};
      var candidates;
      if (options.getShadowRoot) {
        candidates = _getCandidatesIteratively([container], options.includeContainer, {
          filter: isNodeMatchingSelectorFocusable.bind(null, options),
          flatten: true,
          getShadowRoot: options.getShadowRoot
        });
      } else {
        candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
      }
      return candidates;
    };
    var isTabbable = function isTabbable2(node, options) {
      options = options || {};
      if (!node) {
        throw new Error("No node provided");
      }
      if (matches.call(node, candidateSelector) === false) {
        return false;
      }
      return isNodeMatchingSelectorTabbable(options, node);
    };
    var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe:not([inert]):not([inert] *)").join(",");
    var isFocusable = function isFocusable2(node, options) {
      options = options || {};
      if (!node) {
        throw new Error("No node provided");
      }
      if (matches.call(node, focusableCandidateSelector) === false) {
        return false;
      }
      return isNodeMatchingSelectorFocusable(options, node);
    };
    exports2.focusable = focusable;
    exports2.getTabIndex = getTabIndex;
    exports2.isFocusable = isFocusable;
    exports2.isTabbable = isTabbable;
    exports2.tabbable = tabbable2;
  }
});

// node_modules/react-activity-calendar/node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
function activeElement(doc) {
  let activeElement2 = doc.activeElement;
  while (((_activeElement = activeElement2) == null || (_activeElement = _activeElement.shadowRoot) == null ? void 0 : _activeElement.activeElement) != null) {
    var _activeElement;
    activeElement2 = activeElement2.shadowRoot.activeElement;
  }
  return activeElement2;
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();
  if (parent.contains(child)) {
    return true;
  }
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0];
  }
  return event.target;
}
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ("composedPath" in event) {
    return event.composedPath().includes(node);
  }
  const e = event;
  return e.target != null && node.contains(e.target);
}
function isRootElement(element) {
  return element.matches("html,body");
}
function getDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}
function getFloatingFocusElement(floatingElement) {
  if (!floatingElement) {
    return null;
  }
  return floatingElement.hasAttribute(FOCUSABLE_ATTRIBUTE) ? floatingElement : floatingElement.querySelector("[" + FOCUSABLE_ATTRIBUTE + "]") || floatingElement;
}
function getNodeChildren(nodes, id, onlyOpenChildren) {
  if (onlyOpenChildren === void 0) {
    onlyOpenChildren = true;
  }
  const directChildren = nodes.filter((node) => {
    var _node$context;
    return node.parentId === id && (!onlyOpenChildren || ((_node$context = node.context) == null ? void 0 : _node$context.open));
  });
  return directChildren.flatMap((child) => [child, ...getNodeChildren(nodes, child.id, onlyOpenChildren)]);
}
function isReactEvent(event) {
  return "nativeEvent" in event;
}
function isMouseLikePointerType(pointerType, strict) {
  const values = ["mouse", "pen"];
  if (!strict) {
    values.push("", void 0);
  }
  return values.includes(pointerType);
}
function useLatestRef(value) {
  const ref = React.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useEffectEvent(callback) {
  const ref = React.useRef(() => {
    if (process.env.NODE_ENV !== "production") {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
function getTabbableIn(container, dir) {
  const list = (0, import_tabbable.tabbable)(container, getTabbableOptions());
  const len = list.length;
  if (len === 0) return;
  const active = activeElement(getDocument(container));
  const index3 = list.indexOf(active);
  const nextIndex = index3 === -1 ? dir === 1 ? 0 : len - 1 : index3 + dir;
  return list[nextIndex];
}
function getNextTabbable(referenceElement) {
  return getTabbableIn(getDocument(referenceElement).body, 1) || referenceElement;
}
function getPreviousTabbable(referenceElement) {
  return getTabbableIn(getDocument(referenceElement).body, -1) || referenceElement;
}
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
  const tabbableElements = (0, import_tabbable.tabbable)(container, getTabbableOptions());
  tabbableElements.forEach((element) => {
    element.dataset.tabindex = element.getAttribute("tabindex") || "";
    element.setAttribute("tabindex", "-1");
  });
}
function enableFocusInside(container) {
  const elements = container.querySelectorAll("[data-tabindex]");
  elements.forEach((element) => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  });
}
var React, import_react, import_tabbable, FOCUSABLE_ATTRIBUTE, isClient, noop, index, SafeReact, useInsertionEffect, useSafeInsertionEffect, getTabbableOptions;
var init_floating_ui_react_utils = __esm({
  "node_modules/react-activity-calendar/node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs"() {
    init_floating_ui_utils_dom();
    React = __toESM(require("react"), 1);
    import_react = require("react");
    import_tabbable = __toESM(require_dist(), 1);
    FOCUSABLE_ATTRIBUTE = "data-floating-ui-focusable";
    isClient = typeof document !== "undefined";
    noop = function noop2() {
    };
    index = isClient ? import_react.useLayoutEffect : noop;
    SafeReact = {
      ...React
    };
    useInsertionEffect = SafeReact.useInsertionEffect;
    useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
    getTabbableOptions = () => ({
      getShadowRoot: true,
      displayCheck: (
        // JSDOM does not support the `tabbable` library. To solve this we can
        // check if `ResizeObserver` is a real function (not polyfilled), which
        // determines if the current environment is JSDOM-like.
        typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
      )
    });
  }
});

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var MAX_RESET_COUNT, computePosition, arrow, flip, originSides, offset, shift;
var init_floating_ui_core = __esm({
  "node_modules/@floating-ui/core/dist/floating-ui.core.mjs"() {
    init_floating_ui_utils();
    init_floating_ui_utils();
    MAX_RESET_COUNT = 50;
    computePosition = async (reference, floating, config) => {
      const {
        placement = "bottom",
        strategy = "absolute",
        middleware = [],
        platform: platform2
      } = config;
      const platformWithDetectOverflow = platform2.detectOverflow ? platform2 : {
        ...platform2,
        detectOverflow
      };
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
      let rects = await platform2.getElementRects({
        reference,
        floating,
        strategy
      });
      let {
        x,
        y
      } = computeCoordsFromPlacement(rects, placement, rtl);
      let statefulPlacement = placement;
      let resetCount = 0;
      const middlewareData = {};
      for (let i = 0; i < middleware.length; i++) {
        const currentMiddleware = middleware[i];
        if (!currentMiddleware) {
          continue;
        }
        const {
          name,
          fn
        } = currentMiddleware;
        const {
          x: nextX,
          y: nextY,
          data,
          reset
        } = await fn({
          x,
          y,
          initialPlacement: placement,
          placement: statefulPlacement,
          strategy,
          middlewareData,
          rects,
          platform: platformWithDetectOverflow,
          elements: {
            reference,
            floating
          }
        });
        x = nextX != null ? nextX : x;
        y = nextY != null ? nextY : y;
        middlewareData[name] = {
          ...middlewareData[name],
          ...data
        };
        if (reset && resetCount < MAX_RESET_COUNT) {
          resetCount++;
          if (typeof reset === "object") {
            if (reset.placement) {
              statefulPlacement = reset.placement;
            }
            if (reset.rects) {
              rects = reset.rects === true ? await platform2.getElementRects({
                reference,
                floating,
                strategy
              }) : reset.rects;
            }
            ({
              x,
              y
            } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
          }
          i = -1;
        }
      }
      return {
        x,
        y,
        placement: statefulPlacement,
        strategy,
        middlewareData
      };
    };
    arrow = (options) => ({
      name: "arrow",
      options,
      async fn(state) {
        const {
          x,
          y,
          placement,
          rects,
          platform: platform2,
          elements,
          middlewareData
        } = state;
        const {
          element,
          padding = 0
        } = evaluate(options, state) || {};
        if (element == null) {
          return {};
        }
        const paddingObject = getPaddingObject(padding);
        const coords = {
          x,
          y
        };
        const axis = getAlignmentAxis(placement);
        const length = getAxisLength(axis);
        const arrowDimensions = await platform2.getDimensions(element);
        const isYAxis = axis === "y";
        const minProp = isYAxis ? "top" : "left";
        const maxProp = isYAxis ? "bottom" : "right";
        const clientProp = isYAxis ? "clientHeight" : "clientWidth";
        const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
        const startDiff = coords[axis] - rects.reference[axis];
        const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
        let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
        if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
          clientSize = elements.floating[clientProp] || rects.floating[length];
        }
        const centerToReference = endDiff / 2 - startDiff / 2;
        const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
        const minPadding = min(paddingObject[minProp], largestPossiblePadding);
        const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
        const min$1 = minPadding;
        const max2 = clientSize - arrowDimensions[length] - maxPadding;
        const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
        const offset4 = clamp(min$1, center, max2);
        const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
        const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
        return {
          [axis]: coords[axis] + alignmentOffset,
          data: {
            [axis]: offset4,
            centerOffset: center - offset4 - alignmentOffset,
            ...shouldAddOffset && {
              alignmentOffset
            }
          },
          reset: shouldAddOffset
        };
      }
    });
    flip = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "flip",
        options,
        async fn(state) {
          var _middlewareData$arrow, _middlewareData$flip;
          const {
            placement,
            middlewareData,
            rects,
            initialPlacement,
            platform: platform2,
            elements
          } = state;
          const {
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = true,
            fallbackPlacements: specifiedFallbackPlacements,
            fallbackStrategy = "bestFit",
            fallbackAxisSideDirection = "none",
            flipAlignment = true,
            ...detectOverflowOptions
          } = evaluate(options, state);
          if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
            return {};
          }
          const side = getSide(placement);
          const initialSideAxis = getSideAxis(initialPlacement);
          const isBasePlacement = getSide(initialPlacement) === initialPlacement;
          const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
          const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
          const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
          if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
            fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
          }
          const placements2 = [initialPlacement, ...fallbackPlacements];
          const overflow = await platform2.detectOverflow(state, detectOverflowOptions);
          const overflows = [];
          let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
          if (checkMainAxis) {
            overflows.push(overflow[side]);
          }
          if (checkCrossAxis) {
            const sides2 = getAlignmentSides(placement, rects, rtl);
            overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
          }
          overflowsData = [...overflowsData, {
            placement,
            overflows
          }];
          if (!overflows.every((side2) => side2 <= 0)) {
            var _middlewareData$flip2, _overflowsData$filter;
            const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
            const nextPlacement = placements2[nextIndex];
            if (nextPlacement) {
              const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
              if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
              // overflows the main axis.
              overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
                return {
                  data: {
                    index: nextIndex,
                    overflows: overflowsData
                  },
                  reset: {
                    placement: nextPlacement
                  }
                };
              }
            }
            let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
            if (!resetPlacement) {
              switch (fallbackStrategy) {
                case "bestFit": {
                  var _overflowsData$filter2;
                  const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                    if (hasFallbackAxisSideDirection) {
                      const currentSideAxis = getSideAxis(d.placement);
                      return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                      // reading directions favoring greater width.
                      currentSideAxis === "y";
                    }
                    return true;
                  }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                  if (placement2) {
                    resetPlacement = placement2;
                  }
                  break;
                }
                case "initialPlacement":
                  resetPlacement = initialPlacement;
                  break;
              }
            }
            if (placement !== resetPlacement) {
              return {
                reset: {
                  placement: resetPlacement
                }
              };
            }
          }
          return {};
        }
      };
    };
    originSides = /* @__PURE__ */ new Set(["left", "top"]);
    offset = function(options) {
      if (options === void 0) {
        options = 0;
      }
      return {
        name: "offset",
        options,
        async fn(state) {
          var _middlewareData$offse, _middlewareData$arrow;
          const {
            x,
            y,
            placement,
            middlewareData
          } = state;
          const diffCoords = await convertValueToCoords(state, options);
          if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
            return {};
          }
          return {
            x: x + diffCoords.x,
            y: y + diffCoords.y,
            data: {
              ...diffCoords,
              placement
            }
          };
        }
      };
    };
    shift = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "shift",
        options,
        async fn(state) {
          const {
            x,
            y,
            placement,
            platform: platform2
          } = state;
          const {
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = false,
            limiter = {
              fn: (_ref) => {
                let {
                  x: x2,
                  y: y2
                } = _ref;
                return {
                  x: x2,
                  y: y2
                };
              }
            },
            ...detectOverflowOptions
          } = evaluate(options, state);
          const coords = {
            x,
            y
          };
          const overflow = await platform2.detectOverflow(state, detectOverflowOptions);
          const crossAxis = getSideAxis(getSide(placement));
          const mainAxis = getOppositeAxis(crossAxis);
          let mainAxisCoord = coords[mainAxis];
          let crossAxisCoord = coords[crossAxis];
          if (checkMainAxis) {
            const minSide = mainAxis === "y" ? "top" : "left";
            const maxSide = mainAxis === "y" ? "bottom" : "right";
            const min2 = mainAxisCoord + overflow[minSide];
            const max2 = mainAxisCoord - overflow[maxSide];
            mainAxisCoord = clamp(min2, mainAxisCoord, max2);
          }
          if (checkCrossAxis) {
            const minSide = crossAxis === "y" ? "top" : "left";
            const maxSide = crossAxis === "y" ? "bottom" : "right";
            const min2 = crossAxisCoord + overflow[minSide];
            const max2 = crossAxisCoord - overflow[maxSide];
            crossAxisCoord = clamp(min2, crossAxisCoord, max2);
          }
          const limitedCoords = limiter.fn({
            ...state,
            [mainAxis]: mainAxisCoord,
            [crossAxis]: crossAxisCoord
          });
          return {
            ...limitedCoords,
            data: {
              x: limitedCoords.x - x,
              y: limitedCoords.y - y,
              enabled: {
                [mainAxis]: checkMainAxis,
                [crossAxis]: checkCrossAxis
              }
            }
          };
        }
      };
    };
  }
});

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && (currentContainingBlockComputedStyle.position === "absolute" || currentContainingBlockComputedStyle.position === "fixed") || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
  let top = firstRect.top;
  let right = firstRect.right;
  let bottom = firstRect.bottom;
  let left = firstRect.left;
  for (let i = 1; i < clippingAncestors.length; i++) {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
    top = max(rect.top, top);
    right = min(rect.right, right);
    bottom = min(rect.bottom, bottom);
    left = max(rect.left, left);
  }
  return {
    width: right - left,
    height: bottom - top,
    x: left,
    y: top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    if (floating) {
      resizeObserver.observe(floating);
    }
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var noOffsets, SCROLLBAR_MAX, getElementRects, platform, offset2, shift2, flip2, arrow2, computePosition2;
var init_floating_ui_dom = __esm({
  "node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"() {
    init_floating_ui_core();
    init_floating_ui_utils();
    init_floating_ui_utils_dom();
    init_floating_ui_utils_dom();
    noOffsets = /* @__PURE__ */ createCoords(0);
    SCROLLBAR_MAX = 25;
    getElementRects = async function(data) {
      const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
      const getDimensionsFn = this.getDimensions;
      const floatingDimensions = await getDimensionsFn(data.floating);
      return {
        reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
        floating: {
          x: 0,
          y: 0,
          width: floatingDimensions.width,
          height: floatingDimensions.height
        }
      };
    };
    platform = {
      convertOffsetParentRelativeRectToViewportRelativeRect,
      getDocumentElement,
      getClippingRect,
      getOffsetParent,
      getElementRects,
      getClientRects,
      getDimensions,
      getScale,
      isElement,
      isRTL
    };
    offset2 = offset;
    shift2 = shift;
    flip2 = flip;
    arrow2 = arrow;
    computePosition2 = (reference, floating, options) => {
      const cache = /* @__PURE__ */ new Map();
      const mergedOptions = {
        platform,
        ...options
      };
      const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
      };
      return computePosition(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
      });
    };
  }
});

// node_modules/react-activity-calendar/node_modules/@floating-ui/react/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef2(value) {
  const ref = React2.useRef(value);
  index2(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React2.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React2.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React2.useState(null);
  const [_floating, _setFloating] = React2.useState(null);
  const setReference = React2.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React2.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React2.useRef(null);
  const floatingRef = React2.useRef(null);
  const dataRef = React2.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef2(whileElementsMounted);
  const platformRef = useLatestRef2(platform2);
  const openRef = useLatestRef2(open);
  const update = React2.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index2(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React2.useRef(false);
  index2(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index2(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React2.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React2.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React2.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React2.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var React2, import_react2, ReactDOM, isClient2, noop3, index2, arrow$1, offset3, shift3, flip3, arrow3;
var init_floating_ui_react_dom = __esm({
  "node_modules/react-activity-calendar/node_modules/@floating-ui/react/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"() {
    init_floating_ui_dom();
    init_floating_ui_dom();
    React2 = __toESM(require("react"), 1);
    import_react2 = require("react");
    ReactDOM = __toESM(require("react-dom"), 1);
    isClient2 = typeof document !== "undefined";
    noop3 = function noop4() {
    };
    index2 = isClient2 ? import_react2.useLayoutEffect : noop3;
    arrow$1 = (options) => {
      function isRef(value) {
        return {}.hasOwnProperty.call(value, "current");
      }
      return {
        name: "arrow",
        options,
        fn(state) {
          const {
            element,
            padding
          } = typeof options === "function" ? options(state) : options;
          if (element && isRef(element)) {
            if (element.current != null) {
              return arrow2({
                element: element.current,
                padding
              }).fn(state);
            }
            return {};
          }
          if (element) {
            return arrow2({
              element,
              padding
            }).fn(state);
          }
          return {};
        }
      };
    };
    offset3 = (options, deps) => {
      const result = offset2(options);
      return {
        name: result.name,
        fn: result.fn,
        options: [options, deps]
      };
    };
    shift3 = (options, deps) => {
      const result = shift2(options);
      return {
        name: result.name,
        fn: result.fn,
        options: [options, deps]
      };
    };
    flip3 = (options, deps) => {
      const result = flip2(options);
      return {
        name: result.name,
        fn: result.fn,
        options: [options, deps]
      };
    };
    arrow3 = (options, deps) => {
      const result = arrow$1(options);
      return {
        name: result.name,
        fn: result.fn,
        options: [options, deps]
      };
    };
  }
});

// node_modules/react-activity-calendar/node_modules/@floating-ui/react/dist/floating-ui.react.mjs
function useFloatingId() {
  const [id, setId] = React3.useState(() => serverHandoffComplete ? genId() : void 0);
  index(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React3.useEffect(() => {
    serverHandoffComplete = true;
  }, []);
  return id;
}
function warn() {
  var _devMessageSet;
  for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
    messages[_key] = arguments[_key];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
    var _devMessageSet2;
    (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message);
    console.warn(message);
  }
}
function error() {
  var _devMessageSet3;
  for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    messages[_key2] = arguments[_key2];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
    var _devMessageSet4;
    (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
    console.error(message);
  }
}
function createEventEmitter() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach((listener) => listener(data));
    },
    on(event, listener) {
      if (!map.has(event)) {
        map.set(event, /* @__PURE__ */ new Set());
      }
      map.get(event).add(listener);
    },
    off(event, listener) {
      var _map$get2;
      (_map$get2 = map.get(event)) == null || _map$get2.delete(listener);
    }
  };
}
function createAttribute(name) {
  return "data-floating-ui-" + name;
}
function clearTimeoutIfSet(timeoutRef) {
  if (timeoutRef.current !== -1) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = -1;
  }
}
function getDelay(value, prop, pointerType) {
  if (pointerType && !isMouseLikePointerType(pointerType)) {
    return 0;
  }
  if (typeof value === "number") {
    return value;
  }
  if (typeof value === "function") {
    const result = value();
    if (typeof result === "number") {
      return result;
    }
    return result == null ? void 0 : result[prop];
  }
  return value == null ? void 0 : value[prop];
}
function getRestMs(value) {
  if (typeof value === "function") {
    return value();
  }
  return value;
}
function useHover(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    elements
  } = context;
  const {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true
  } = props;
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  const handleCloseRef = useLatestRef(handleClose);
  const delayRef = useLatestRef(delay);
  const openRef = useLatestRef(open);
  const restMsRef = useLatestRef(restMs);
  const pointerTypeRef = React3.useRef();
  const timeoutRef = React3.useRef(-1);
  const handlerRef = React3.useRef();
  const restTimeoutRef = React3.useRef(-1);
  const blockMouseMoveRef = React3.useRef(true);
  const performedPointerEventsMutationRef = React3.useRef(false);
  const unbindMouseMoveRef = React3.useRef(() => {
  });
  const restTimeoutPendingRef = React3.useRef(false);
  const isHoverOpen = useEffectEvent(() => {
    var _dataRef$current$open;
    const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
    return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
  });
  React3.useEffect(() => {
    if (!enabled) return;
    function onOpenChange2(_ref) {
      let {
        open: open2
      } = _ref;
      if (!open2) {
        clearTimeoutIfSet(timeoutRef);
        clearTimeoutIfSet(restTimeoutRef);
        blockMouseMoveRef.current = true;
        restTimeoutPendingRef.current = false;
      }
    }
    events.on("openchange", onOpenChange2);
    return () => {
      events.off("openchange", onOpenChange2);
    };
  }, [enabled, events]);
  React3.useEffect(() => {
    if (!enabled) return;
    if (!handleCloseRef.current) return;
    if (!open) return;
    function onLeave(event) {
      if (isHoverOpen()) {
        onOpenChange(false, event, "hover");
      }
    }
    const html = getDocument(elements.floating).documentElement;
    html.addEventListener("mouseleave", onLeave);
    return () => {
      html.removeEventListener("mouseleave", onLeave);
    };
  }, [elements.floating, open, onOpenChange, enabled, handleCloseRef, isHoverOpen]);
  const closeWithDelay = React3.useCallback(function(event, runElseBranch, reason) {
    if (runElseBranch === void 0) {
      runElseBranch = true;
    }
    if (reason === void 0) {
      reason = "hover";
    }
    const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
    if (closeDelay && !handlerRef.current) {
      clearTimeoutIfSet(timeoutRef);
      timeoutRef.current = window.setTimeout(() => onOpenChange(false, event, reason), closeDelay);
    } else if (runElseBranch) {
      clearTimeoutIfSet(timeoutRef);
      onOpenChange(false, event, reason);
    }
  }, [delayRef, onOpenChange]);
  const cleanupMouseMoveHandler = useEffectEvent(() => {
    unbindMouseMoveRef.current();
    handlerRef.current = void 0;
  });
  const clearPointerEvents = useEffectEvent(() => {
    if (performedPointerEventsMutationRef.current) {
      const body = getDocument(elements.floating).body;
      body.style.pointerEvents = "";
      body.removeAttribute(safePolygonIdentifier);
      performedPointerEventsMutationRef.current = false;
    }
  });
  const isClickLikeOpenEvent = useEffectEvent(() => {
    return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
  });
  React3.useEffect(() => {
    if (!enabled) return;
    function onReferenceMouseEnter(event) {
      clearTimeoutIfSet(timeoutRef);
      blockMouseMoveRef.current = false;
      if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || getRestMs(restMsRef.current) > 0 && !getDelay(delayRef.current, "open")) {
        return;
      }
      const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
      if (openDelay) {
        timeoutRef.current = window.setTimeout(() => {
          if (!openRef.current) {
            onOpenChange(true, event, "hover");
          }
        }, openDelay);
      } else if (!open) {
        onOpenChange(true, event, "hover");
      }
    }
    function onReferenceMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        clearPointerEvents();
        return;
      }
      unbindMouseMoveRef.current();
      const doc = getDocument(elements.floating);
      clearTimeoutIfSet(restTimeoutRef);
      restTimeoutPendingRef.current = false;
      if (handleCloseRef.current && dataRef.current.floatingContext) {
        if (!open) {
          clearTimeoutIfSet(timeoutRef);
        }
        handlerRef.current = handleCloseRef.current({
          ...dataRef.current.floatingContext,
          tree,
          x: event.clientX,
          y: event.clientY,
          onClose() {
            clearPointerEvents();
            cleanupMouseMoveHandler();
            if (!isClickLikeOpenEvent()) {
              closeWithDelay(event, true, "safe-polygon");
            }
          }
        });
        const handler = handlerRef.current;
        doc.addEventListener("mousemove", handler);
        unbindMouseMoveRef.current = () => {
          doc.removeEventListener("mousemove", handler);
        };
        return;
      }
      const shouldClose = pointerTypeRef.current === "touch" ? !contains(elements.floating, event.relatedTarget) : true;
      if (shouldClose) {
        closeWithDelay(event);
      }
    }
    function onScrollMouseLeave(event) {
      if (isClickLikeOpenEvent()) return;
      if (!dataRef.current.floatingContext) return;
      handleCloseRef.current == null || handleCloseRef.current({
        ...dataRef.current.floatingContext,
        tree,
        x: event.clientX,
        y: event.clientY,
        onClose() {
          clearPointerEvents();
          cleanupMouseMoveHandler();
          if (!isClickLikeOpenEvent()) {
            closeWithDelay(event);
          }
        }
      })(event);
    }
    function onFloatingMouseEnter() {
      clearTimeoutIfSet(timeoutRef);
    }
    function onFloatingMouseLeave(event) {
      if (!isClickLikeOpenEvent()) {
        closeWithDelay(event, false);
      }
    }
    if (isElement(elements.domReference)) {
      const reference2 = elements.domReference;
      const floating = elements.floating;
      if (open) {
        reference2.addEventListener("mouseleave", onScrollMouseLeave);
      }
      if (move) {
        reference2.addEventListener("mousemove", onReferenceMouseEnter, {
          once: true
        });
      }
      reference2.addEventListener("mouseenter", onReferenceMouseEnter);
      reference2.addEventListener("mouseleave", onReferenceMouseLeave);
      if (floating) {
        floating.addEventListener("mouseleave", onScrollMouseLeave);
        floating.addEventListener("mouseenter", onFloatingMouseEnter);
        floating.addEventListener("mouseleave", onFloatingMouseLeave);
      }
      return () => {
        if (open) {
          reference2.removeEventListener("mouseleave", onScrollMouseLeave);
        }
        if (move) {
          reference2.removeEventListener("mousemove", onReferenceMouseEnter);
        }
        reference2.removeEventListener("mouseenter", onReferenceMouseEnter);
        reference2.removeEventListener("mouseleave", onReferenceMouseLeave);
        if (floating) {
          floating.removeEventListener("mouseleave", onScrollMouseLeave);
          floating.removeEventListener("mouseenter", onFloatingMouseEnter);
          floating.removeEventListener("mouseleave", onFloatingMouseLeave);
        }
      };
    }
  }, [elements, enabled, context, mouseOnly, move, closeWithDelay, cleanupMouseMoveHandler, clearPointerEvents, onOpenChange, open, openRef, tree, delayRef, handleCloseRef, dataRef, isClickLikeOpenEvent, restMsRef]);
  index(() => {
    var _handleCloseRef$curre;
    if (!enabled) return;
    if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && (_handleCloseRef$curre = _handleCloseRef$curre.__options) != null && _handleCloseRef$curre.blockPointerEvents && isHoverOpen()) {
      performedPointerEventsMutationRef.current = true;
      const floatingEl = elements.floating;
      if (isElement(elements.domReference) && floatingEl) {
        var _tree$nodesRef$curren;
        const body = getDocument(elements.floating).body;
        body.setAttribute(safePolygonIdentifier, "");
        const ref = elements.domReference;
        const parentFloating = tree == null || (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null || (_tree$nodesRef$curren = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren.elements.floating;
        if (parentFloating) {
          parentFloating.style.pointerEvents = "";
        }
        body.style.pointerEvents = "none";
        ref.style.pointerEvents = "auto";
        floatingEl.style.pointerEvents = "auto";
        return () => {
          body.style.pointerEvents = "";
          ref.style.pointerEvents = "";
          floatingEl.style.pointerEvents = "";
        };
      }
    }
  }, [enabled, open, parentId, elements, tree, handleCloseRef, isHoverOpen]);
  index(() => {
    if (!open) {
      pointerTypeRef.current = void 0;
      restTimeoutPendingRef.current = false;
      cleanupMouseMoveHandler();
      clearPointerEvents();
    }
  }, [open, cleanupMouseMoveHandler, clearPointerEvents]);
  React3.useEffect(() => {
    return () => {
      cleanupMouseMoveHandler();
      clearTimeoutIfSet(timeoutRef);
      clearTimeoutIfSet(restTimeoutRef);
      clearPointerEvents();
    };
  }, [enabled, elements.domReference, cleanupMouseMoveHandler, clearPointerEvents]);
  const reference = React3.useMemo(() => {
    function setPointerRef(event) {
      pointerTypeRef.current = event.pointerType;
    }
    return {
      onPointerDown: setPointerRef,
      onPointerEnter: setPointerRef,
      onMouseMove(event) {
        const {
          nativeEvent
        } = event;
        function handleMouseMove() {
          if (!blockMouseMoveRef.current && !openRef.current) {
            onOpenChange(true, nativeEvent, "hover");
          }
        }
        if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current)) {
          return;
        }
        if (open || getRestMs(restMsRef.current) === 0) {
          return;
        }
        if (restTimeoutPendingRef.current && event.movementX ** 2 + event.movementY ** 2 < 2) {
          return;
        }
        clearTimeoutIfSet(restTimeoutRef);
        if (pointerTypeRef.current === "touch") {
          handleMouseMove();
        } else {
          restTimeoutPendingRef.current = true;
          restTimeoutRef.current = window.setTimeout(handleMouseMove, getRestMs(restMsRef.current));
        }
      }
    };
  }, [mouseOnly, onOpenChange, open, openRef, restMsRef]);
  return React3.useMemo(() => enabled ? {
    reference
  } : {}, [enabled, reference]);
}
function useFloatingPortalNode(props) {
  if (props === void 0) {
    props = {};
  }
  const {
    id,
    root
  } = props;
  const uniqueId = useId();
  const portalContext = usePortalContext();
  const [portalNode, setPortalNode] = React3.useState(null);
  const portalNodeRef = React3.useRef(null);
  index(() => {
    return () => {
      portalNode == null || portalNode.remove();
      queueMicrotask(() => {
        portalNodeRef.current = null;
      });
    };
  }, [portalNode]);
  index(() => {
    if (!uniqueId) return;
    if (portalNodeRef.current) return;
    const existingIdRoot = id ? document.getElementById(id) : null;
    if (!existingIdRoot) return;
    const subRoot = document.createElement("div");
    subRoot.id = uniqueId;
    subRoot.setAttribute(attr, "");
    existingIdRoot.appendChild(subRoot);
    portalNodeRef.current = subRoot;
    setPortalNode(subRoot);
  }, [id, uniqueId]);
  index(() => {
    if (root === null) return;
    if (!uniqueId) return;
    if (portalNodeRef.current) return;
    let container = root || (portalContext == null ? void 0 : portalContext.portalNode);
    if (container && !isNode(container)) container = container.current;
    container = container || document.body;
    let idWrapper = null;
    if (id) {
      idWrapper = document.createElement("div");
      idWrapper.id = id;
      container.appendChild(idWrapper);
    }
    const subRoot = document.createElement("div");
    subRoot.id = uniqueId;
    subRoot.setAttribute(attr, "");
    container = idWrapper || container;
    container.appendChild(subRoot);
    portalNodeRef.current = subRoot;
    setPortalNode(subRoot);
  }, [id, root, uniqueId, portalContext]);
  return portalNode;
}
function FloatingPortal(props) {
  const {
    children,
    id,
    root,
    preserveTabOrder = true
  } = props;
  const portalNode = useFloatingPortalNode({
    id,
    root
  });
  const [focusManagerState, setFocusManagerState] = React3.useState(null);
  const beforeOutsideRef = React3.useRef(null);
  const afterOutsideRef = React3.useRef(null);
  const beforeInsideRef = React3.useRef(null);
  const afterInsideRef = React3.useRef(null);
  const modal = focusManagerState == null ? void 0 : focusManagerState.modal;
  const open = focusManagerState == null ? void 0 : focusManagerState.open;
  const shouldRenderGuards = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!focusManagerState && // Guards are only for non-modal focus management.
    !focusManagerState.modal && // Don't render if unmount is transitioning.
    focusManagerState.open && preserveTabOrder && !!(root || portalNode)
  );
  React3.useEffect(() => {
    if (!portalNode || !preserveTabOrder || modal) {
      return;
    }
    function onFocus(event) {
      if (portalNode && isOutsideEvent(event)) {
        const focusing = event.type === "focusin";
        const manageFocus = focusing ? enableFocusInside : disableFocusInside;
        manageFocus(portalNode);
      }
    }
    portalNode.addEventListener("focusin", onFocus, true);
    portalNode.addEventListener("focusout", onFocus, true);
    return () => {
      portalNode.removeEventListener("focusin", onFocus, true);
      portalNode.removeEventListener("focusout", onFocus, true);
    };
  }, [portalNode, preserveTabOrder, modal]);
  React3.useEffect(() => {
    if (!portalNode) return;
    if (open) return;
    enableFocusInside(portalNode);
  }, [open, portalNode]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalContext.Provider, {
    value: React3.useMemo(() => ({
      preserveTabOrder,
      beforeOutsideRef,
      afterOutsideRef,
      beforeInsideRef,
      afterInsideRef,
      portalNode,
      setFocusManagerState
    }), [preserveTabOrder, portalNode]),
    children: [shouldRenderGuards && portalNode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusGuard, {
      "data-type": "outside",
      ref: beforeOutsideRef,
      onFocus: (event) => {
        if (isOutsideEvent(event, portalNode)) {
          var _beforeInsideRef$curr;
          (_beforeInsideRef$curr = beforeInsideRef.current) == null || _beforeInsideRef$curr.focus();
        } else {
          const domReference = focusManagerState ? focusManagerState.domReference : null;
          const prevTabbable = getPreviousTabbable(domReference);
          prevTabbable == null || prevTabbable.focus();
        }
      }
    }), shouldRenderGuards && portalNode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
      "aria-owns": portalNode.id,
      style: HIDDEN_OWNER_STYLES
    }), portalNode && /* @__PURE__ */ ReactDOM2.createPortal(children, portalNode), shouldRenderGuards && portalNode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusGuard, {
      "data-type": "outside",
      ref: afterOutsideRef,
      onFocus: (event) => {
        if (isOutsideEvent(event, portalNode)) {
          var _afterInsideRef$curre;
          (_afterInsideRef$curre = afterInsideRef.current) == null || _afterInsideRef$curre.focus();
        } else {
          const domReference = focusManagerState ? focusManagerState.domReference : null;
          const nextTabbable = getNextTabbable(domReference);
          nextTabbable == null || nextTabbable.focus();
          (focusManagerState == null ? void 0 : focusManagerState.closeOnFocusOut) && (focusManagerState == null ? void 0 : focusManagerState.onOpenChange(false, event.nativeEvent, "focus-out"));
        }
      }
    })]
  });
}
function useDismiss(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    elements,
    dataRef
  } = context;
  const {
    enabled = true,
    escapeKey = true,
    outsidePress: unstable_outsidePress = true,
    outsidePressEvent = "pointerdown",
    referencePress = false,
    referencePressEvent = "pointerdown",
    ancestorScroll = false,
    bubbles,
    capture
  } = props;
  const tree = useFloatingTree();
  const outsidePressFn = useEffectEvent(typeof unstable_outsidePress === "function" ? unstable_outsidePress : () => false);
  const outsidePress = typeof unstable_outsidePress === "function" ? outsidePressFn : unstable_outsidePress;
  const endedOrStartedInsideRef = React3.useRef(false);
  const {
    escapeKey: escapeKeyBubbles,
    outsidePress: outsidePressBubbles
  } = normalizeProp(bubbles);
  const {
    escapeKey: escapeKeyCapture,
    outsidePress: outsidePressCapture
  } = normalizeProp(capture);
  const isComposingRef = React3.useRef(false);
  const closeOnEscapeKeyDown = useEffectEvent((event) => {
    var _dataRef$current$floa;
    if (!open || !enabled || !escapeKey || event.key !== "Escape") {
      return;
    }
    if (isComposingRef.current) {
      return;
    }
    const nodeId = (_dataRef$current$floa = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa.nodeId;
    const children = tree ? getNodeChildren(tree.nodesRef.current, nodeId) : [];
    if (!escapeKeyBubbles) {
      event.stopPropagation();
      if (children.length > 0) {
        let shouldDismiss = true;
        children.forEach((child) => {
          var _child$context;
          if ((_child$context = child.context) != null && _child$context.open && !child.context.dataRef.current.__escapeKeyBubbles) {
            shouldDismiss = false;
            return;
          }
        });
        if (!shouldDismiss) {
          return;
        }
      }
    }
    onOpenChange(false, isReactEvent(event) ? event.nativeEvent : event, "escape-key");
  });
  const closeOnEscapeKeyDownCapture = useEffectEvent((event) => {
    var _getTarget2;
    const callback = () => {
      var _getTarget;
      closeOnEscapeKeyDown(event);
      (_getTarget = getTarget(event)) == null || _getTarget.removeEventListener("keydown", callback);
    };
    (_getTarget2 = getTarget(event)) == null || _getTarget2.addEventListener("keydown", callback);
  });
  const closeOnPressOutside = useEffectEvent((event) => {
    var _dataRef$current$floa2;
    const insideReactTree = dataRef.current.insideReactTree;
    dataRef.current.insideReactTree = false;
    const endedOrStartedInside = endedOrStartedInsideRef.current;
    endedOrStartedInsideRef.current = false;
    if (outsidePressEvent === "click" && endedOrStartedInside) {
      return;
    }
    if (insideReactTree) {
      return;
    }
    if (typeof outsidePress === "function" && !outsidePress(event)) {
      return;
    }
    const target = getTarget(event);
    const inertSelector = "[" + createAttribute("inert") + "]";
    const markers = getDocument(elements.floating).querySelectorAll(inertSelector);
    let targetRootAncestor = isElement(target) ? target : null;
    while (targetRootAncestor && !isLastTraversableNode(targetRootAncestor)) {
      const nextParent = getParentNode(targetRootAncestor);
      if (isLastTraversableNode(nextParent) || !isElement(nextParent)) {
        break;
      }
      targetRootAncestor = nextParent;
    }
    if (markers.length && isElement(target) && !isRootElement(target) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !contains(target, elements.floating) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(markers).every((marker) => !contains(targetRootAncestor, marker))) {
      return;
    }
    if (isHTMLElement(target) && floating) {
      const lastTraversableNode = isLastTraversableNode(target);
      const style = getComputedStyle2(target);
      const scrollRe = /auto|scroll/;
      const isScrollableX = lastTraversableNode || scrollRe.test(style.overflowX);
      const isScrollableY = lastTraversableNode || scrollRe.test(style.overflowY);
      const canScrollX = isScrollableX && target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
      const canScrollY = isScrollableY && target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
      const isRTL2 = style.direction === "rtl";
      const pressedVerticalScrollbar = canScrollY && (isRTL2 ? event.offsetX <= target.offsetWidth - target.clientWidth : event.offsetX > target.clientWidth);
      const pressedHorizontalScrollbar = canScrollX && event.offsetY > target.clientHeight;
      if (pressedVerticalScrollbar || pressedHorizontalScrollbar) {
        return;
      }
    }
    const nodeId = (_dataRef$current$floa2 = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa2.nodeId;
    const targetIsInsideChildren = tree && getNodeChildren(tree.nodesRef.current, nodeId).some((node) => {
      var _node$context;
      return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.elements.floating);
    });
    if (isEventTargetWithin(event, elements.floating) || isEventTargetWithin(event, elements.domReference) || targetIsInsideChildren) {
      return;
    }
    const children = tree ? getNodeChildren(tree.nodesRef.current, nodeId) : [];
    if (children.length > 0) {
      let shouldDismiss = true;
      children.forEach((child) => {
        var _child$context2;
        if ((_child$context2 = child.context) != null && _child$context2.open && !child.context.dataRef.current.__outsidePressBubbles) {
          shouldDismiss = false;
          return;
        }
      });
      if (!shouldDismiss) {
        return;
      }
    }
    onOpenChange(false, event, "outside-press");
  });
  const closeOnPressOutsideCapture = useEffectEvent((event) => {
    var _getTarget4;
    const callback = () => {
      var _getTarget3;
      closeOnPressOutside(event);
      (_getTarget3 = getTarget(event)) == null || _getTarget3.removeEventListener(outsidePressEvent, callback);
    };
    (_getTarget4 = getTarget(event)) == null || _getTarget4.addEventListener(outsidePressEvent, callback);
  });
  React3.useEffect(() => {
    if (!open || !enabled) {
      return;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    let compositionTimeout = -1;
    function onScroll(event) {
      onOpenChange(false, event, "ancestor-scroll");
    }
    function handleCompositionStart() {
      window.clearTimeout(compositionTimeout);
      isComposingRef.current = true;
    }
    function handleCompositionEnd() {
      compositionTimeout = window.setTimeout(
        () => {
          isComposingRef.current = false;
        },
        // 0ms or 1ms don't work in Safari. 5ms appears to consistently work.
        // Only apply to WebKit for the test to remain 0ms.
        isWebKit() ? 5 : 0
      );
    }
    const doc = getDocument(elements.floating);
    if (escapeKey) {
      doc.addEventListener("keydown", escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
      doc.addEventListener("compositionstart", handleCompositionStart);
      doc.addEventListener("compositionend", handleCompositionEnd);
    }
    outsidePress && doc.addEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
    let ancestors = [];
    if (ancestorScroll) {
      if (isElement(elements.domReference)) {
        ancestors = getOverflowAncestors(elements.domReference);
      }
      if (isElement(elements.floating)) {
        ancestors = ancestors.concat(getOverflowAncestors(elements.floating));
      }
      if (!isElement(elements.reference) && elements.reference && elements.reference.contextElement) {
        ancestors = ancestors.concat(getOverflowAncestors(elements.reference.contextElement));
      }
    }
    ancestors = ancestors.filter((ancestor) => {
      var _doc$defaultView;
      return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
    });
    ancestors.forEach((ancestor) => {
      ancestor.addEventListener("scroll", onScroll, {
        passive: true
      });
    });
    return () => {
      if (escapeKey) {
        doc.removeEventListener("keydown", escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
        doc.removeEventListener("compositionstart", handleCompositionStart);
        doc.removeEventListener("compositionend", handleCompositionEnd);
      }
      outsidePress && doc.removeEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
      ancestors.forEach((ancestor) => {
        ancestor.removeEventListener("scroll", onScroll);
      });
      window.clearTimeout(compositionTimeout);
    };
  }, [dataRef, elements, escapeKey, outsidePress, outsidePressEvent, open, onOpenChange, ancestorScroll, enabled, escapeKeyBubbles, outsidePressBubbles, closeOnEscapeKeyDown, escapeKeyCapture, closeOnEscapeKeyDownCapture, closeOnPressOutside, outsidePressCapture, closeOnPressOutsideCapture]);
  React3.useEffect(() => {
    dataRef.current.insideReactTree = false;
  }, [dataRef, outsidePress, outsidePressEvent]);
  const reference = React3.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    ...referencePress && {
      [bubbleHandlerKeys[referencePressEvent]]: (event) => {
        onOpenChange(false, event.nativeEvent, "reference-press");
      },
      ...referencePressEvent !== "click" && {
        onClick(event) {
          onOpenChange(false, event.nativeEvent, "reference-press");
        }
      }
    }
  }), [closeOnEscapeKeyDown, onOpenChange, referencePress, referencePressEvent]);
  const floating = React3.useMemo(() => {
    function setMouseDownOrUpInside(event) {
      if (event.button !== 0) {
        return;
      }
      endedOrStartedInsideRef.current = true;
    }
    return {
      onKeyDown: closeOnEscapeKeyDown,
      onMouseDown: setMouseDownOrUpInside,
      onMouseUp: setMouseDownOrUpInside,
      [captureHandlerKeys[outsidePressEvent]]: () => {
        dataRef.current.insideReactTree = true;
      }
    };
  }, [closeOnEscapeKeyDown, outsidePressEvent, dataRef]);
  return React3.useMemo(() => enabled ? {
    reference,
    floating
  } : {}, [enabled, reference, floating]);
}
function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange: onOpenChangeProp,
    elements: elementsProp
  } = options;
  const floatingId = useId();
  const dataRef = React3.useRef({});
  const [events] = React3.useState(() => createEventEmitter());
  const nested = useFloatingParentNodeId() != null;
  if (process.env.NODE_ENV !== "production") {
    const optionDomReference = elementsProp.reference;
    if (optionDomReference && !isElement(optionDomReference)) {
      error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
    }
  }
  const [positionReference, setPositionReference] = React3.useState(elementsProp.reference);
  const onOpenChange = useEffectEvent((open2, event, reason) => {
    dataRef.current.openEvent = open2 ? event : void 0;
    events.emit("openchange", {
      open: open2,
      event,
      reason,
      nested
    });
    onOpenChangeProp == null || onOpenChangeProp(open2, event, reason);
  });
  const refs = React3.useMemo(() => ({
    setPositionReference
  }), []);
  const elements = React3.useMemo(() => ({
    reference: positionReference || elementsProp.reference || null,
    floating: elementsProp.floating || null,
    domReference: elementsProp.reference
  }), [positionReference, elementsProp.reference, elementsProp.floating]);
  return React3.useMemo(() => ({
    dataRef,
    open,
    onOpenChange,
    elements,
    events,
    floatingId,
    refs
  }), [open, onOpenChange, elements, events, floatingId, refs]);
}
function useFloating2(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    nodeId
  } = options;
  const internalRootContext = useFloatingRootContext({
    ...options,
    elements: {
      reference: null,
      floating: null,
      ...options.elements
    }
  });
  const rootContext = options.rootContext || internalRootContext;
  const computedElements = rootContext.elements;
  const [_domReference, setDomReference] = React3.useState(null);
  const [positionReference, _setPositionReference] = React3.useState(null);
  const optionDomReference = computedElements == null ? void 0 : computedElements.domReference;
  const domReference = optionDomReference || _domReference;
  const domReferenceRef = React3.useRef(null);
  const tree = useFloatingTree();
  index(() => {
    if (domReference) {
      domReferenceRef.current = domReference;
    }
  }, [domReference]);
  const position = useFloating({
    ...options,
    elements: {
      ...computedElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  });
  const setPositionReference = React3.useCallback((node) => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      getClientRects: () => node.getClientRects(),
      contextElement: node
    } : node;
    _setPositionReference(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = React3.useCallback((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React3.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React3.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const context = React3.useMemo(() => ({
    ...position,
    ...rootContext,
    refs,
    elements,
    nodeId
  }), [position, refs, elements, nodeId, rootContext]);
  index(() => {
    rootContext.dataRef.current.floatingContext = context;
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React3.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  const isItem = elementKey === "item";
  let domUserProps = userProps;
  if (isItem && userProps) {
    const {
      [ACTIVE_KEY]: _,
      [SELECTED_KEY]: __,
      ...validProps
    } = userProps;
    domUserProps = validProps;
  }
  return {
    ...elementKey === "floating" && {
      tabIndex: -1,
      [FOCUSABLE_ATTRIBUTE2]: ""
    },
    ...domUserProps,
    ...propsList.map((value) => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === "function") {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
          return;
        }
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn) => fn(...args)).find((val) => val !== void 0);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
function useInteractions(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const referenceDeps = propsList.map((key) => key == null ? void 0 : key.reference);
  const floatingDeps = propsList.map((key) => key == null ? void 0 : key.floating);
  const itemDeps = propsList.map((key) => key == null ? void 0 : key.item);
  const getReferenceProps = React3.useCallback(
    (userProps) => mergeProps(userProps, propsList, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    referenceDeps
  );
  const getFloatingProps = React3.useCallback(
    (userProps) => mergeProps(userProps, propsList, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    floatingDeps
  );
  const getItemProps = React3.useCallback(
    (userProps) => mergeProps(userProps, propsList, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    itemDeps
  );
  return React3.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}
function useRole(context, props) {
  var _elements$domReferenc, _componentRoleToAriaR;
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    elements,
    floatingId: defaultFloatingId
  } = context;
  const {
    enabled = true,
    role = "dialog"
  } = props;
  const defaultReferenceId = useId();
  const referenceId = ((_elements$domReferenc = elements.domReference) == null ? void 0 : _elements$domReferenc.id) || defaultReferenceId;
  const floatingId = React3.useMemo(() => {
    var _getFloatingFocusElem;
    return ((_getFloatingFocusElem = getFloatingFocusElement(elements.floating)) == null ? void 0 : _getFloatingFocusElem.id) || defaultFloatingId;
  }, [elements.floating, defaultFloatingId]);
  const ariaRole = (_componentRoleToAriaR = componentRoleToAriaRoleMap.get(role)) != null ? _componentRoleToAriaR : role;
  const parentId = useFloatingParentNodeId();
  const isNested = parentId != null;
  const reference = React3.useMemo(() => {
    if (ariaRole === "tooltip" || role === "label") {
      return {
        ["aria-" + (role === "label" ? "labelledby" : "describedby")]: open ? floatingId : void 0
      };
    }
    return {
      "aria-expanded": open ? "true" : "false",
      "aria-haspopup": ariaRole === "alertdialog" ? "dialog" : ariaRole,
      "aria-controls": open ? floatingId : void 0,
      ...ariaRole === "listbox" && {
        role: "combobox"
      },
      ...ariaRole === "menu" && {
        id: referenceId
      },
      ...ariaRole === "menu" && isNested && {
        role: "menuitem"
      },
      ...role === "select" && {
        "aria-autocomplete": "none"
      },
      ...role === "combobox" && {
        "aria-autocomplete": "list"
      }
    };
  }, [ariaRole, floatingId, isNested, open, referenceId, role]);
  const floating = React3.useMemo(() => {
    const floatingProps = {
      id: floatingId,
      ...ariaRole && {
        role: ariaRole
      }
    };
    if (ariaRole === "tooltip" || role === "label") {
      return floatingProps;
    }
    return {
      ...floatingProps,
      ...ariaRole === "menu" && {
        "aria-labelledby": referenceId
      }
    };
  }, [ariaRole, floatingId, referenceId, role]);
  const item = React3.useCallback((_ref) => {
    let {
      active,
      selected
    } = _ref;
    const commonProps = {
      role: "option",
      ...active && {
        id: floatingId + "-fui-option"
      }
    };
    switch (role) {
      case "select":
      case "combobox":
        return {
          ...commonProps,
          "aria-selected": selected
        };
    }
    return {};
  }, [floatingId, role]);
  return React3.useMemo(() => enabled ? {
    reference,
    floating,
    item
  } : {}, [enabled, reference, floating, item]);
}
function execWithArgsOrReturn(valueOrFn, args) {
  return typeof valueOrFn === "function" ? valueOrFn(args) : valueOrFn;
}
function useDelayUnmount(open, durationMs) {
  const [isMounted, setIsMounted] = React3.useState(open);
  if (open && !isMounted) {
    setIsMounted(true);
  }
  React3.useEffect(() => {
    if (!open && isMounted) {
      const timeout = setTimeout(() => setIsMounted(false), durationMs);
      return () => clearTimeout(timeout);
    }
  }, [open, isMounted, durationMs]);
  return isMounted;
}
function useTransitionStatus(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    elements: {
      floating
    }
  } = context;
  const {
    duration = 250
  } = props;
  const isNumberDuration = typeof duration === "number";
  const closeDuration = (isNumberDuration ? duration : duration.close) || 0;
  const [status, setStatus] = React3.useState("unmounted");
  const isMounted = useDelayUnmount(open, closeDuration);
  if (!isMounted && status === "close") {
    setStatus("unmounted");
  }
  index(() => {
    if (!floating) return;
    if (open) {
      setStatus("initial");
      const frame = requestAnimationFrame(() => {
        ReactDOM2.flushSync(() => {
          setStatus("open");
        });
      });
      return () => {
        cancelAnimationFrame(frame);
      };
    }
    setStatus("close");
  }, [open, floating]);
  return {
    isMounted,
    status
  };
}
function useTransitionStyles(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    initial: unstable_initial = {
      opacity: 0
    },
    open: unstable_open,
    close: unstable_close,
    common: unstable_common,
    duration = 250
  } = props;
  const placement = context.placement;
  const side = placement.split("-")[0];
  const fnArgs = React3.useMemo(() => ({
    side,
    placement
  }), [side, placement]);
  const isNumberDuration = typeof duration === "number";
  const openDuration = (isNumberDuration ? duration : duration.open) || 0;
  const closeDuration = (isNumberDuration ? duration : duration.close) || 0;
  const [styles2, setStyles] = React3.useState(() => ({
    ...execWithArgsOrReturn(unstable_common, fnArgs),
    ...execWithArgsOrReturn(unstable_initial, fnArgs)
  }));
  const {
    isMounted,
    status
  } = useTransitionStatus(context, {
    duration
  });
  const initialRef = useLatestRef(unstable_initial);
  const openRef = useLatestRef(unstable_open);
  const closeRef = useLatestRef(unstable_close);
  const commonRef = useLatestRef(unstable_common);
  index(() => {
    const initialStyles = execWithArgsOrReturn(initialRef.current, fnArgs);
    const closeStyles = execWithArgsOrReturn(closeRef.current, fnArgs);
    const commonStyles = execWithArgsOrReturn(commonRef.current, fnArgs);
    const openStyles = execWithArgsOrReturn(openRef.current, fnArgs) || Object.keys(initialStyles).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});
    if (status === "initial") {
      setStyles((styles3) => ({
        transitionProperty: styles3.transitionProperty,
        ...commonStyles,
        ...initialStyles
      }));
    }
    if (status === "open") {
      setStyles({
        transitionProperty: Object.keys(openStyles).map(camelCaseToKebabCase).join(","),
        transitionDuration: openDuration + "ms",
        ...commonStyles,
        ...openStyles
      });
    }
    if (status === "close") {
      const styles3 = closeStyles || initialStyles;
      setStyles({
        transitionProperty: Object.keys(styles3).map(camelCaseToKebabCase).join(","),
        transitionDuration: closeDuration + "ms",
        ...commonStyles,
        ...styles3
      });
    }
  }, [closeDuration, closeRef, initialRef, openRef, commonRef, openDuration, status, fnArgs]);
  return {
    isMounted,
    styles: styles2
  };
}
var React3, import_jsx_runtime, ReactDOM2, FOCUSABLE_ATTRIBUTE2, ACTIVE_KEY, SELECTED_KEY, ARROW_LEFT, ARROW_RIGHT, ARROW_UP, ARROW_DOWN, horizontalKeys, verticalKeys, allKeys, SafeReact2, serverHandoffComplete, count, genId, useReactId, useId, devMessageSet, FloatingArrow, FloatingNodeContext, FloatingTreeContext, useFloatingParentNodeId, useFloatingTree, safePolygonIdentifier, HIDDEN_STYLES, FocusGuard, HIDDEN_OWNER_STYLES, PortalContext, attr, usePortalContext, bubbleHandlerKeys, captureHandlerKeys, normalizeProp, componentRoleToAriaRoleMap, camelCaseToKebabCase;
var init_floating_ui_react = __esm({
  "node_modules/react-activity-calendar/node_modules/@floating-ui/react/dist/floating-ui.react.mjs"() {
    React3 = __toESM(require("react"), 1);
    init_floating_ui_react_utils();
    import_jsx_runtime = require("react/jsx-runtime");
    init_floating_ui_utils_dom();
    ReactDOM2 = __toESM(require("react-dom"), 1);
    init_floating_ui_react_dom();
    init_floating_ui_react_dom();
    FOCUSABLE_ATTRIBUTE2 = "data-floating-ui-focusable";
    ACTIVE_KEY = "active";
    SELECTED_KEY = "selected";
    ARROW_LEFT = "ArrowLeft";
    ARROW_RIGHT = "ArrowRight";
    ARROW_UP = "ArrowUp";
    ARROW_DOWN = "ArrowDown";
    horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
    verticalKeys = [ARROW_UP, ARROW_DOWN];
    allKeys = [...horizontalKeys, ...verticalKeys];
    SafeReact2 = {
      ...React3
    };
    serverHandoffComplete = false;
    count = 0;
    genId = () => (
      // Ensure the id is unique with multiple independent versions of Floating UI
      // on <React 18
      "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++
    );
    useReactId = SafeReact2.useId;
    useId = useReactId || useFloatingId;
    if (process.env.NODE_ENV !== "production") {
      devMessageSet = /* @__PURE__ */ new Set();
    }
    FloatingArrow = /* @__PURE__ */ React3.forwardRef(function FloatingArrow2(props, ref) {
      const {
        context: {
          placement,
          elements: {
            floating
          },
          middlewareData: {
            arrow: arrow4,
            shift: shift4
          }
        },
        width = 14,
        height = 7,
        tipRadius = 0,
        strokeWidth = 0,
        staticOffset,
        stroke,
        d,
        style: {
          transform,
          ...restStyle
        } = {},
        ...rest
      } = props;
      if (process.env.NODE_ENV !== "production") {
        if (!ref) {
          warn("The `ref` prop is required for `FloatingArrow`.");
        }
      }
      const clipPathId = useId();
      const [isRTL2, setIsRTL] = React3.useState(false);
      index(() => {
        if (!floating) return;
        const isRTL3 = getComputedStyle2(floating).direction === "rtl";
        if (isRTL3) {
          setIsRTL(true);
        }
      }, [floating]);
      if (!floating) {
        return null;
      }
      const [side, alignment] = placement.split("-");
      const isVerticalSide = side === "top" || side === "bottom";
      let computedStaticOffset = staticOffset;
      if (isVerticalSide && shift4 != null && shift4.x || !isVerticalSide && shift4 != null && shift4.y) {
        computedStaticOffset = null;
      }
      const computedStrokeWidth = strokeWidth * 2;
      const halfStrokeWidth = computedStrokeWidth / 2;
      const svgX = width / 2 * (tipRadius / -8 + 1);
      const svgY = height / 2 * tipRadius / 4;
      const isCustomShape = !!d;
      const yOffsetProp = computedStaticOffset && alignment === "end" ? "bottom" : "top";
      let xOffsetProp = computedStaticOffset && alignment === "end" ? "right" : "left";
      if (computedStaticOffset && isRTL2) {
        xOffsetProp = alignment === "end" ? "left" : "right";
      }
      const arrowX = (arrow4 == null ? void 0 : arrow4.x) != null ? computedStaticOffset || arrow4.x : "";
      const arrowY = (arrow4 == null ? void 0 : arrow4.y) != null ? computedStaticOffset || arrow4.y : "";
      const dValue = d || "M0,0" + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + " Z";
      const rotation = {
        top: isCustomShape ? "rotate(180deg)" : "",
        left: isCustomShape ? "rotate(90deg)" : "rotate(-90deg)",
        bottom: isCustomShape ? "" : "rotate(180deg)",
        right: isCustomShape ? "rotate(-90deg)" : "rotate(90deg)"
      }[side];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
        ...rest,
        "aria-hidden": true,
        ref,
        width: isCustomShape ? width : width + computedStrokeWidth,
        height: width,
        viewBox: "0 0 " + width + " " + (height > width ? height : width),
        style: {
          position: "absolute",
          pointerEvents: "none",
          [xOffsetProp]: arrowX,
          [yOffsetProp]: arrowY,
          [side]: isVerticalSide || isCustomShape ? "100%" : "calc(100% - " + computedStrokeWidth / 2 + "px)",
          transform: [rotation, transform].filter((t) => !!t).join(" "),
          ...restStyle
        },
        children: [computedStrokeWidth > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
          clipPath: "url(#" + clipPathId + ")",
          fill: "none",
          stroke,
          strokeWidth: computedStrokeWidth + (d ? 0 : 1),
          d: dValue
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
          stroke: computedStrokeWidth && !d ? rest.fill : "none",
          d: dValue
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
          id: clipPathId,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
            x: -halfStrokeWidth,
            y: halfStrokeWidth * (isCustomShape ? -1 : 1),
            width: width + computedStrokeWidth,
            height: width
          })
        })]
      });
    });
    FloatingNodeContext = /* @__PURE__ */ React3.createContext(null);
    FloatingTreeContext = /* @__PURE__ */ React3.createContext(null);
    useFloatingParentNodeId = () => {
      var _React$useContext;
      return ((_React$useContext = React3.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
    };
    useFloatingTree = () => React3.useContext(FloatingTreeContext);
    safePolygonIdentifier = /* @__PURE__ */ createAttribute("safe-polygon");
    HIDDEN_STYLES = {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "fixed",
      whiteSpace: "nowrap",
      width: "1px",
      top: 0,
      left: 0
    };
    FocusGuard = /* @__PURE__ */ React3.forwardRef(function FocusGuard2(props, ref) {
      const [role, setRole] = React3.useState();
      index(() => {
        if (isSafari()) {
          setRole("button");
        }
      }, []);
      const restProps = {
        ref,
        tabIndex: 0,
        // Role is only for VoiceOver
        role,
        "aria-hidden": role ? void 0 : true,
        [createAttribute("focus-guard")]: "",
        style: HIDDEN_STYLES
      };
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        ...props,
        ...restProps
      });
    });
    HIDDEN_OWNER_STYLES = {
      clipPath: "inset(50%)",
      position: "fixed",
      top: 0,
      left: 0
    };
    PortalContext = /* @__PURE__ */ React3.createContext(null);
    attr = /* @__PURE__ */ createAttribute("portal");
    usePortalContext = () => React3.useContext(PortalContext);
    bubbleHandlerKeys = {
      pointerdown: "onPointerDown",
      mousedown: "onMouseDown",
      click: "onClick"
    };
    captureHandlerKeys = {
      pointerdown: "onPointerDownCapture",
      mousedown: "onMouseDownCapture",
      click: "onClickCapture"
    };
    normalizeProp = (normalizable) => {
      var _normalizable$escapeK, _normalizable$outside;
      return {
        escapeKey: typeof normalizable === "boolean" ? normalizable : (_normalizable$escapeK = normalizable == null ? void 0 : normalizable.escapeKey) != null ? _normalizable$escapeK : false,
        outsidePress: typeof normalizable === "boolean" ? normalizable : (_normalizable$outside = normalizable == null ? void 0 : normalizable.outsidePress) != null ? _normalizable$outside : true
      };
    };
    componentRoleToAriaRoleMap = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", false]]);
    camelCaseToKebabCase = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());
  }
});

// node_modules/react-activity-calendar/build/chunks/Tooltip-B8gZJWmn.js
var Tooltip_B8gZJWmn_exports = {};
__export(Tooltip_B8gZJWmn_exports, {
  Tooltip: () => Tooltip
});
function Tooltip({
  children,
  text,
  colorScheme,
  placement,
  offset: offsetProp = 4,
  transitionStyles: transitionStylesProp,
  hoverRestMs = 150,
  withArrow = false
}) {
  const [isOpen, setIsOpen] = (0, import_react3.useState)(false);
  const arrowRef = (0, import_react3.useRef)(null);
  const {
    context,
    refs,
    floatingStyles
  } = useFloating2({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [
      flip3(),
      offset3(offsetProp),
      shift3({
        padding: 8
      }),
      withArrow ? arrow3({
        element: arrowRef
      }) : null
      // eslint-disable-line react-hooks/refs
    ],
    whileElementsMounted: autoUpdate
  });
  const hover = useHover(context, {
    restMs: hoverRestMs
  });
  const dismiss = useDismiss(context);
  const role = useRole(context, {
    role: "tooltip"
  });
  const {
    getReferenceProps,
    getFloatingProps
  } = useInteractions([hover, dismiss, role]);
  const {
    isMounted,
    styles: transitionStyles
  } = useTransitionStyles(context, transitionStylesProp);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, {
    children: [/* @__PURE__ */ (0, import_react3.cloneElement)(children, {
      ref: refs.setReference,
      ...getReferenceProps()
    }), isMounted && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FloatingPortal, {
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
        ref: refs.setFloating,
        className: getClassName("tooltip"),
        style: {
          ...floatingStyles,
          ...transitionStyles
        },
        "data-color-scheme": colorScheme,
        ...getFloatingProps(),
        children: [text, withArrow && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FloatingArrow, {
          ref: arrowRef,
          context,
          className: getClassName("tooltip-arrow")
        })]
      })
    })]
  });
}
var import_react3, import_jsx_runtime2;
var init_Tooltip_B8gZJWmn = __esm({
  "node_modules/react-activity-calendar/build/chunks/Tooltip-B8gZJWmn.js"() {
    "use client";
    import_react3 = require("react");
    init_floating_ui_react();
    init_index_CLOTiFb2();
    import_jsx_runtime2 = require("react/jsx-runtime");
  }
});

// node_modules/react-activity-calendar/build/chunks/index-CLOTiFb2.js
function useColorScheme() {
  const [colorScheme, setColorScheme] = (0, import_react5.useState)(() => typeof window === "undefined" ? "light" : window.matchMedia(query$1).matches ? "dark" : "light");
  const onChange = (event) => {
    setColorScheme(event.matches ? "dark" : "light");
  };
  (0, import_react5.useEffect)(() => {
    const mediaQuery = window.matchMedia(query$1);
    setColorScheme(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", onChange);
    return () => {
      mediaQuery.removeEventListener("change", onChange);
    };
  }, []);
  return colorScheme;
}
function useLoadingAnimation(zeroColor, colorScheme) {
  const [loaded, setLoaded] = (0, import_react5.useState)(false);
  (0, import_react5.useEffect)(() => {
    const colorLoading = `oklab(from ${zeroColor} l a b)`;
    const colorActive = colorScheme === "light" ? `oklab(from ${zeroColor} calc(l * 0.96) a b)` : `oklab(from ${zeroColor} calc(l * 1.08) a b)`;
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes ${loadingAnimationName} {
        0% {
          fill: ${colorLoading};
        }
        50% {
          fill: ${colorActive};
        }
        100% {
          fill: ${colorLoading};
        }
      }
    `;
    const handleLoad = () => {
      setLoaded(true);
    };
    document.head.appendChild(style);
    style.addEventListener("load", handleLoad);
    return () => {
      document.head.removeChild(style);
      style.removeEventListener("load", handleLoad);
      setLoaded(false);
    };
  }, [zeroColor, colorScheme]);
  return loaded;
}
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = (0, import_react5.useState)(() => typeof window === "undefined" ? true : window.matchMedia(query).matches);
  (0, import_react5.useEffect)(() => {
    const mediaQuery = window.matchMedia(query);
    setPrefersReducedMotion(mediaQuery.matches);
    const onChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };
    mediaQuery.addEventListener("change", onChange);
    return () => {
      mediaQuery.removeEventListener("change", onChange);
    };
  }, []);
  return prefersReducedMotion;
}
function validateActivities(activities, {
  minLevel,
  maxLevel
}) {
  if (activities.length === 0) {
    throw new Error("Activity data must not be empty.");
  }
  for (const {
    date,
    level
  } of activities) {
    if (!isValid(parseISO(date))) {
      throw new Error(`Activity date '${date}' is not a valid ISO 8601 date string.`);
    }
    if (level < minLevel || level > maxLevel) {
      throw new RangeError(`Activity level ${level} for ${date} is out of range. It must be between ${minLevel} and ${maxLevel}.`);
    }
  }
}
function groupByWeeks(activities, weekStart = 0) {
  const normalizedActivities = fillHoles(activities);
  const firstActivity = normalizedActivities[0];
  const firstDate = parseISO(firstActivity.date);
  const firstCalendarDate = getDay(firstDate) === weekStart ? firstDate : subWeeks(nextDay(firstDate, weekStart), 1);
  const paddedActivities = [...Array(differenceInCalendarDays(firstDate, firstCalendarDate)).fill(void 0), ...normalizedActivities];
  const numberOfWeeks = Math.ceil(paddedActivities.length / 7);
  return range(numberOfWeeks).map((weekIndex) => paddedActivities.slice(weekIndex * 7, weekIndex * 7 + 7));
}
function fillHoles(activities) {
  const calendar = new Map(activities.map((a) => [a.date, a]));
  const firstActivity = activities[0];
  const lastActivity = activities[activities.length - 1];
  return eachDayOfInterval({
    start: parseISO(firstActivity.date),
    end: parseISO(lastActivity.date)
  }).map((day) => {
    const date = formatISO(day, {
      representation: "date"
    });
    if (calendar.has(date)) {
      return calendar.get(date);
    }
    return {
      date,
      count: 0,
      level: 0
    };
  });
}
function getClassName(element) {
  return `${NAMESPACE}__${element}`;
}
function generateEmptyData() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const days = eachDayOfInterval({
    start: new Date(year, 0, 1),
    end: new Date(year, 11, 31)
  });
  return days.map((date) => ({
    date: formatISO(date, {
      representation: "date"
    }),
    count: 0,
    level: 0
  }));
}
function range(fromArg, toArg) {
  const from = toArg === void 0 ? 0 : fromArg;
  const to = toArg ?? fromArg;
  if (to <= from) {
    throw new RangeError("Invalid range: to must be greater than from");
  }
  return Array.from({
    length: to - from
  }, (_, i) => from + i);
}
function getMonthLabels(weeks, monthNames = DEFAULT_MONTH_LABELS) {
  return weeks.reduce((labels, week, weekIndex) => {
    const firstActivity = week.find((activity) => activity !== void 0);
    if (!firstActivity) {
      throw new Error(`Unexpected error: Week ${weekIndex + 1} is empty.`);
    }
    const month = monthNames[getMonth(parseISO(firstActivity.date))];
    if (!month) {
      const monthName = new Date(firstActivity.date).toLocaleString("en-US", {
        month: "short"
      });
      throw new Error(`Unexpected error: undefined month label for ${monthName}.`);
    }
    const prevLabel = labels[labels.length - 1];
    if (weekIndex === 0 || prevLabel?.label !== month) {
      return [...labels, {
        weekIndex,
        label: month
      }];
    }
    return labels;
  }, []).filter(({
    weekIndex
  }, index3, labels) => {
    const minWeeks = 3;
    if (index3 === 0) {
      return labels[1] && labels[1].weekIndex - weekIndex >= minWeeks;
    }
    if (index3 === labels.length - 1) {
      return weeks.slice(weekIndex).length >= minWeeks;
    }
    return true;
  });
}
function maxWeekdayLabelWidth(labels, showWeekdayLabel, fontSize) {
  if (labels.length !== 7) {
    throw new Error("Exactly 7 labels, one for each weekday must be passed.");
  }
  return labels.reduce((maxWidth, label, index3) => showWeekdayLabel.byDayIndex(index3) ? Math.max(maxWidth, Math.ceil(calcTextDimensions(label, fontSize).width)) : maxWidth, 0);
}
function calcTextDimensions(text, fontSize) {
  if (typeof document === "undefined" || typeof window === "undefined") {
    return {
      width: 0,
      height: 0
    };
  }
  if (fontSize < 1) {
    throw new RangeError("fontSize must be positive");
  }
  if (text.length === 0) {
    return {
      width: 0,
      height: 0
    };
  }
  const namespace = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(namespace, "svg");
  svg.style.position = "absolute";
  svg.style.visibility = "hidden";
  svg.style.fontFamily = window.getComputedStyle(document.body).fontFamily;
  svg.style.fontSize = `${fontSize}px`;
  const textNode = document.createElementNS(namespace, "text");
  textNode.textContent = text;
  svg.appendChild(textNode);
  document.body.appendChild(svg);
  const boundingBox = textNode.getBBox();
  document.body.removeChild(svg);
  return {
    width: boundingBox.width,
    height: boundingBox.height
  };
}
function initWeekdayLabels(input, weekStart) {
  if (!input) return {
    byDayIndex: () => false,
    shouldShow: false
  };
  if (input === true) {
    return {
      byDayIndex: (index3) => {
        return (7 + index3 - weekStart) % 7 % 2 !== 0;
      },
      shouldShow: true
    };
  }
  const indexed = [];
  for (const name of input) {
    const index3 = dayNameToIndex[name.toLowerCase()];
    indexed[index3] = true;
  }
  return {
    byDayIndex: (index3) => indexed[index3] ?? false,
    shouldShow: input.length > 0
  };
}
function createTheme(input, levels = {
  minLevel: 0,
  maxLevel: 4
}) {
  const defaultTheme = createDefaultTheme(levels);
  if (input) {
    const numberOfLevels = levels.maxLevel - levels.minLevel + 1;
    validateThemeInput(input, numberOfLevels);
    input.light = input.light ?? defaultTheme.light;
    input.dark = input.dark ?? defaultTheme.dark;
    return {
      light: isPair(input.light) ? calcColorScale([input.light[1], input.light[0], input.light[1]], levels) : isTriple(input.light) ? calcColorScale(input.light, levels) : input.light,
      dark: isPair(input.dark) ? calcColorScale([input.dark[1], input.dark[0], input.dark[1]], levels) : isTriple(input.dark) ? calcColorScale(input.dark, levels) : input.dark
    };
  }
  return defaultTheme;
}
function createDefaultTheme(levels) {
  return {
    light: calcColorScale(["hsl(0, 0%, 26%)", "hsl(0, 0%, 92%)", "hsl(0, 0%, 26%)"], levels),
    dark: calcColorScale(["hsl(0, 0%, 92%)", "hsl(0, 0%, 22%)", "hsl(0, 0%, 92%)"], levels)
  };
}
function validateThemeInput(input, numberOfLevels) {
  const levelsHint = "The number of colors must match the number of activity levels controlled by the `minLevel` and `maxLevel` properties.";
  if (typeof input !== "object" || input.light === void 0 && input.dark === void 0) {
    throw new Error(`The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${numberOfLevels} colors respectively. ${levelsHint}`);
  }
  if (input.light) {
    const {
      length
    } = input.light;
    if (length !== 2 && length !== 3 && length !== numberOfLevels) {
      throw new Error(`theme.light must contain exactly 2 or 3 or ${numberOfLevels} colors, ${length} passed. ${levelsHint}`);
    }
    for (const c of input.light) {
      if (typeof window !== "undefined" && !CSS.supports("color", c)) {
        throw new Error(`Invalid color "${c}" passed. All CSS color formats are accepted.`);
      }
    }
  }
  if (input.dark) {
    const {
      length
    } = input.dark;
    if (length !== 2 && length !== 3 && length !== numberOfLevels) {
      throw new Error(`theme.dark must contain exactly 2 or 3 or ${numberOfLevels} colors, ${length} passed. ${levelsHint}`);
    }
    for (const c of input.dark) {
      if (typeof window !== "undefined" && !CSS.supports("color", c)) {
        throw new Error(`Invalid color "${c}" passed. All CSS color formats are accepted.`);
      }
    }
  }
}
function calcColorScale([colorNeg, colorZero, colorPos], {
  minLevel,
  maxLevel
}) {
  return range(minLevel, maxLevel + 1).map((i) => {
    if (i < 0) {
      if (i === minLevel) {
        return colorNeg;
      }
      const pos2 = (1 - i / minLevel) * 100;
      return `color-mix(in oklab, ${colorZero} ${parseFloat(pos2.toFixed(2))}%, ${colorNeg})`;
    }
    if (i === 0) {
      return colorZero;
    }
    if (i === maxLevel) {
      return colorPos;
    }
    const pos = i / maxLevel * 100;
    return `color-mix(in oklab, ${colorPos} ${parseFloat(pos.toFixed(2))}%, ${colorZero})`;
  });
}
function isPair(val) {
  return val.length === 2;
}
function isTriple(val) {
  return val.length === 3;
}
var import_react5, import_jsx_runtime3, NAMESPACE, LABEL_MARGIN, DEFAULT_MONTH_LABELS, DEFAULT_LABELS, query$1, loadingAnimationName, query, dayNameToIndex, styles, Tooltip2, ActivityCalendar;
var init_index_CLOTiFb2 = __esm({
  "node_modules/react-activity-calendar/build/chunks/index-CLOTiFb2.js"() {
    "use client";
    import_react5 = require("react");
    init_date_fns();
    import_jsx_runtime3 = require("react/jsx-runtime");
    NAMESPACE = "react-activity-calendar";
    LABEL_MARGIN = 8;
    DEFAULT_MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    DEFAULT_LABELS = {
      months: DEFAULT_MONTH_LABELS,
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      totalCount: "{{count}} activities in {{year}}",
      legend: {
        less: "Less",
        more: "More"
      }
    };
    query$1 = "(prefers-color-scheme: dark)";
    loadingAnimationName = `${NAMESPACE}--loading-animation`;
    query = "(prefers-reduced-motion: reduce)";
    dayNameToIndex = {
      sun: 0,
      mon: 1,
      tue: 2,
      wed: 3,
      thu: 4,
      fri: 5,
      sat: 6
    };
    styles = {
      container: (fontSize) => ({
        width: "max-content",
        // Calendar should not grow
        maxWidth: "100%",
        // Do not remove - parent might be a flexbox
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        fontSize: `${fontSize}px`
      }),
      scrollContainer: (fontSize) => ({
        maxWidth: "100%",
        overflowX: "auto",
        overflowY: "hidden",
        paddingTop: Math.ceil(0.1 * fontSize)
        // SVG <text> overflows in Firefox at y=0
      }),
      calendar: {
        display: "block",
        // SVGs are inline-block by default
        overflow: "visible"
        // Weekday labels are rendered left of the container
      },
      rect: (colorScheme) => ({
        stroke: colorScheme === "light" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.04)"
      }),
      footer: {
        container: {
          display: "flex",
          flexWrap: "wrap",
          gap: "4px 16px",
          whiteSpace: "nowrap"
        },
        legend: {
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: "3px"
        }
      }
    };
    Tooltip2 = /* @__PURE__ */ (0, import_react5.lazy)(() => Promise.resolve().then(() => (init_Tooltip_B8gZJWmn(), Tooltip_B8gZJWmn_exports)).then((module2) => ({
      default: module2.Tooltip
    })));
    ActivityCalendar = /* @__PURE__ */ (0, import_react5.forwardRef)(({
      data: activities,
      blockMargin = 4,
      blockRadius = 2,
      blockSize = 12,
      className,
      colorScheme: colorSchemeProp,
      fontSize = 14,
      labels: labelsProp,
      loading = false,
      minLevel = 0,
      maxLevel = 4,
      renderBlock,
      renderColorLegend,
      showColorLegend = true,
      showMonthLabels = true,
      showTotalCount = true,
      showWeekdayLabels = false,
      style: styleProp = {},
      theme: themeProp,
      tooltips = {},
      weekStart = 0
      // Sunday
    }, ref) => {
      const [isClient3, setIsClient] = (0, import_react5.useState)(false);
      (0, import_react5.useEffect)(() => {
        setIsClient(true);
      }, []);
      if (minLevel >= maxLevel) {
        throw new RangeError(`Minimum activity level must be less than maximum level. Got ${minLevel} and ${maxLevel}.`);
      }
      const levels = {
        minLevel,
        maxLevel
      };
      const theme = createTheme(themeProp, levels);
      const systemColorScheme = useColorScheme();
      const colorScheme = colorSchemeProp ?? systemColorScheme;
      const colorScale = theme[colorScheme];
      const animationLoaded = useLoadingAnimation(colorScale[0], colorScheme);
      const useAnimation = !usePrefersReducedMotion();
      if (loading) {
        if (useAnimation && !animationLoaded) {
          return null;
        }
        activities = generateEmptyData();
      }
      validateActivities(activities, levels);
      const firstActivity = activities[0];
      const year = getYear(parseISO(firstActivity.date));
      const weeks = groupByWeeks(activities, weekStart);
      const labels = Object.assign({}, DEFAULT_LABELS, labelsProp);
      const labelHeight = showMonthLabels ? fontSize + LABEL_MARGIN : 0;
      const weekdayLabels = initWeekdayLabels(showWeekdayLabels, weekStart);
      const weekdayLabelOffset = isClient3 && weekdayLabels.shouldShow ? maxWeekdayLabelWidth(labels.weekdays, weekdayLabels, fontSize) + LABEL_MARGIN : void 0;
      function getDimensions2() {
        return {
          width: weeks.length * (blockSize + blockMargin) - blockMargin,
          height: labelHeight + (blockSize + blockMargin) * 7 - blockMargin
        };
      }
      function renderCalendar() {
        return weeks.map((week, weekIndex) => week.map((activity, dayIndex) => {
          if (!activity) {
            return null;
          }
          const loadingAnimation = loading && useAnimation ? {
            animation: `${loadingAnimationName} 1.75s ease-in-out infinite`,
            animationDelay: `${weekIndex * 20 + dayIndex * 20}ms`
          } : void 0;
          const block = /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", {
            x: 0,
            y: labelHeight + (blockSize + blockMargin) * dayIndex,
            width: blockSize,
            height: blockSize,
            rx: blockRadius,
            ry: blockRadius,
            fill: colorForLevel(activity.level),
            "data-date": activity.date,
            "data-level": activity.level,
            style: {
              ...styles.rect(colorScheme),
              ...loadingAnimation
            }
          });
          const renderedBlock = renderBlock ? renderBlock(block, activity) : block;
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.Fragment, {
            children: tooltips.activity ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.Suspense, {
              fallback: renderedBlock,
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Tooltip2, {
                text: tooltips.activity.text(activity),
                colorScheme,
                placement: tooltips.activity.placement ?? "top",
                hoverRestMs: tooltips.activity.hoverRestMs,
                offset: tooltips.activity.offset,
                transitionStyles: tooltips.activity.transitionStyles,
                withArrow: tooltips.activity.withArrow,
                children: renderedBlock
              })
            }) : renderedBlock
          }, activity.date);
        })).map((week, x) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("g", {
          transform: `translate(${(blockSize + blockMargin) * x}, 0)`,
          children: week
        }, x));
      }
      function renderFooter() {
        if (!showTotalCount && !showColorLegend) {
          return null;
        }
        const totalCount = activities.reduce((sum, activity) => sum + activity.count, 0);
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("footer", {
          className: getClassName("footer"),
          style: {
            ...styles.footer.container,
            marginLeft: weekdayLabelOffset
          },
          children: [loading && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
            children: "\xA0"
          }), !loading && showTotalCount && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
            className: getClassName("count"),
            children: labels.totalCount ? labels.totalCount.replace("{{count}}", String(totalCount)).replace("{{year}}", String(year)) : `${totalCount} activities in ${year}`
          }), !loading && showColorLegend && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
            className: getClassName("legend-colors"),
            style: styles.footer.legend,
            children: [labels.legend.less && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
              style: {
                marginRight: "0.4em"
              },
              children: labels.legend.less
            }), range(minLevel, maxLevel + 1).map((level) => {
              const colorLegend = /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", {
                width: blockSize,
                height: blockSize,
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", {
                  width: blockSize,
                  height: blockSize,
                  fill: colorForLevel(level),
                  rx: blockRadius,
                  ry: blockRadius,
                  style: styles.rect(colorScheme)
                })
              }, level);
              const renderedColorLegend = renderColorLegend ? renderColorLegend(colorLegend, level) : colorLegend;
              return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.Fragment, {
                children: tooltips.colorLegend ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.Suspense, {
                  fallback: renderedColorLegend,
                  children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Tooltip2, {
                    text: tooltips.colorLegend.text(level),
                    colorScheme,
                    placement: tooltips.colorLegend.placement ?? "bottom",
                    hoverRestMs: tooltips.colorLegend.hoverRestMs,
                    offset: tooltips.colorLegend.offset,
                    transitionStyles: tooltips.colorLegend.transitionStyles,
                    withArrow: tooltips.colorLegend.withArrow,
                    children: renderedColorLegend
                  })
                }) : renderedColorLegend
              }, level);
            }), labels.legend.more && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
              style: {
                marginLeft: "0.4em"
              },
              children: labels.legend.more
            })]
          })]
        });
      }
      function renderWeekdayLabels() {
        if (!weekdayLabels.shouldShow) {
          return null;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("g", {
          className: getClassName("legend-weekday"),
          children: range(7).map((index3) => {
            const dayIndex = (index3 + weekStart) % 7;
            if (!weekdayLabels.byDayIndex(dayIndex)) {
              return null;
            }
            return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("text", {
              x: -LABEL_MARGIN,
              y: labelHeight + (blockSize + blockMargin) * index3 + blockSize / 2,
              dominantBaseline: "central",
              textAnchor: "end",
              fill: "currentColor",
              children: labels.weekdays[dayIndex]
            }, index3);
          })
        });
      }
      function renderMonthLabels() {
        if (!showMonthLabels) {
          return null;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("g", {
          className: getClassName("legend-month"),
          children: getMonthLabels(weeks, labels.months).map(({
            label,
            weekIndex
          }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("text", {
            x: (blockSize + blockMargin) * weekIndex,
            y: 0,
            dominantBaseline: "hanging",
            fill: "currentColor",
            children: label
          }, weekIndex))
        });
      }
      function colorForLevel(level) {
        return colorScale[level - minLevel];
      }
      const {
        width,
        height
      } = getDimensions2();
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("article", {
        ref,
        className: `${NAMESPACE} ${className ?? ""}`.trim(),
        style: {
          ...styleProp,
          ...styles.container(fontSize)
        },
        children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
          className: getClassName("scroll-container"),
          style: styles.scrollContainer(fontSize),
          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", {
            width,
            height,
            viewBox: `0 0 ${width} ${height}`,
            className: getClassName("calendar"),
            style: {
              ...styles.calendar,
              marginLeft: weekdayLabelOffset
            },
            children: [!loading && renderWeekdayLabels(), !loading && renderMonthLabels(), renderCalendar()]
          })
        }), renderFooter()]
      });
    });
    ActivityCalendar.displayName = "ActivityCalendar";
  }
});

// test_cal.js
var import_react8 = __toESM(require("react"));
var import_server = require("react-dom/server");

// node_modules/react-github-calendar/build/index.js
var import_react7 = require("react");

// node_modules/react-activity-calendar/build/index.js
init_index_CLOTiFb2();
var import_react6 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");

// node_modules/react-github-calendar/build/index.js
var import_jsx_runtime5 = require("react/jsx-runtime");
var gitHubTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"]
};
var transformData = (data, transformFn) => {
  if (typeof transformFn !== "function") {
    return data;
  }
  const transformedData = transformFn(data);
  if (!Array.isArray(transformedData)) {
    throw Error(`transformData() function must return a list of Activity objects.`);
  }
  for (const d of transformedData) {
    if (!isRecord(d)) {
      throw Error(`transformData() must return a list of valid Activity objects.`);
    }
    if (typeof d.count !== "number" || d.count < 0) {
      throw Error(`Required property "count: number" missing or invalid. Got: ${d.count}`);
    }
    if (typeof d.date !== "string" || !/\d{4}-\d{2}-\d{2}/.test(d.date)) {
      throw Error(`Required property "date: YYYY-MM-DD" missing or invalid. Got: ${d.date}`);
    }
    if (typeof d.level !== "number" || d.level < 0 || d.level > 4) {
      throw Error(`Required property "level: 0 | 1 | 2 | 3 | 4" missing or invalid: Got: ${d.level}.`);
    }
  }
  return transformedData;
};
var isRecord = (o) => Object.prototype.toString.call(o) === "[object Object]";
async function fetchCalendarData(username, year) {
  const apiUrl = "https://github-contributions-api.jogruber.de/v4/";
  const response = await fetch(`${apiUrl}${username}?y=${String(year)}`);
  const data = await response.json();
  if (!response.ok) {
    throw Error(`Fetching GitHub contribution data for "${username}" failed: ${data.error}`);
  }
  return data;
}
var GitHubCalendar = /* @__PURE__ */ (0, import_react7.forwardRef)(({
  username,
  year = "last",
  labels,
  transformData: transformFn,
  throwOnError = false,
  errorMessage = `Error \u2013 Fetching GitHub contribution data for "${username}" failed.`,
  ...props
}, ref) => {
  const [data, setData] = (0, import_react7.useState)(null);
  const [loading, setLoading] = (0, import_react7.useState)(false);
  const [error2, setError] = (0, import_react7.useState)(null);
  const fetchData = (0, import_react7.useCallback)(() => {
    setLoading(true);
    setError(null);
    fetchCalendarData(username, year).then(setData).catch((err) => {
      if (err instanceof Error) {
        setError(err);
      }
    }).finally(() => {
      setLoading(false);
    });
  }, [username, year]);
  (0, import_react7.useEffect)(fetchData, [fetchData]);
  if (error2) {
    if (throwOnError) {
      throw error2;
    } else {
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
        children: errorMessage
      });
    }
  }
  if (loading || !data) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ActivityCalendar, {
      ...props,
      data: [],
      loading: true
    });
  }
  const theme = props.theme ?? gitHubTheme;
  const defaultLabels = {
    totalCount: `{{count}} contributions in ${year === "last" ? "the last year" : "{{year}}"}`
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ActivityCalendar, {
    data: transformData(data.contributions, transformFn),
    labels: Object.assign({}, defaultLabels, labels),
    ref,
    ...props,
    theme,
    loading: Boolean(props.loading) || loading,
    maxLevel: 4
  });
});
GitHubCalendar.displayName = "GitHubCalendar";

// test_cal.js
console.log((0, import_server.renderToString)(import_react8.default.createElement(GitHubCalendar, { username: "encodedfeat" })));
/*! Bundled license information:

tabbable/dist/index.js:
  (*!
  * tabbable 6.5.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
