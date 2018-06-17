var MILI    = 'milliseconds'
  , SECONDS = 'seconds'
  , MINUTES = 'minutes'
  , HOURS   = 'hours'
  , DAY     = 'day'
  , WEEK    = 'week'
  , MONTH   = 'month'
  , YEAR    = 'year'
  , DECADE  = 'decade'
  , CENTURY = 'century';

var dates = module.exports = {

  add: function(date, num, unit) {
    date = new Date(date)

    switch (unit){
      case MILI:
      case SECONDS:
      case MINUTES:
      case HOURS:
      case YEAR:
        return dates[unit](date, dates[unit](date) + num)
      case DAY:
        return dates.date(date, dates.date(date) + num)
      case WEEK:
        return dates.date(date, dates.date(date) + (7 * num)) 
      case MONTH:
        return monthMath(date, num)
      case DECADE:
        return dates.year(date, dates.year(date) + (num * 10))
      case CENTURY:
        return dates.year(date, dates.year(date) + (num * 100))
    }

    throw new TypeError('Invalid units: "' + unit + '"')
  },

  subtract: function(date, num, unit) {
    return dates.add(date, -num, unit)
  },

  startOf: function(date, unit, firstOfWeek) {
    date = new Date(date)

    switch (unit) {
      case 'century':
      case 'decade':
      case 'year':
          date = dates.month(date, 0);
      case 'month':
          date = dates.date(date, 1);
      case 'week':
      case 'day':
          date = dates.hours(date, 0);
      case 'hours':
          date = dates.minutes(date, 0);
      case 'minutes':
          date = dates.seconds(date, 0);
      case 'seconds':
          date = dates.milliseconds(date, 0);
    }

    if (unit === DECADE) 
      date = dates.subtract(date, dates.year(date) % 10, 'year')
    
    if (unit === CENTURY) 
      date = dates.subtract(date, dates.year(date) % 100, 'year')

    if (unit === WEEK) 
      date = dates.weekday(date, 0, firstOfWeek);

    return date
  },


  endOf: function(date, unit, firstOfWeek){
    date = new Date(date)
    date = dates.startOf(date, unit, firstOfWeek)
    date = dates.add(date, 1, unit)
    date = dates.subtract(date, 1, MILI)
    return date
  },

  eq:  createComparer(function(a, b){ return a === b }),
  neq: createComparer(function(a, b){ return a !== b }),
  gt:  createComparer(function(a, b){ return a > b }),
  gte: createComparer(function(a, b){ return a >= b }),
  lt:  createComparer(function(a, b){ return a < b }),
  lte: createComparer(function(a, b){ return a <= b }),

  min: function(){
    return new Date(Math.min.apply(Math, arguments))
  },

  max: function(){
    return new Date(Math.max.apply(Math, arguments))
  },
  
  inRange: function(day, min, max, unit){
    unit = unit || 'day'

    return (!min || dates.gte(day, min, unit))
        && (!max || dates.lte(day, max, unit))
  },

  milliseconds:   createAccessor('Milliseconds'),
  seconds:        createAccessor('Seconds'),
  minutes:        createAccessor('Minutes'),
  hours:          createAccessor('Hours'),
  day:            createAccessor('Day'),
  date:           createAccessor('Date'),
  month:          createAccessor('Month'),
  year:           createAccessor('FullYear'),

  decade: function (date, val) {
    return val === undefined 
      ? dates.year(dates.startOf(date, DECADE))
      : dates.add(date, val + 10, YEAR);
  },

  century: function (date, val) {
    return val === undefined 
      ? dates.year(dates.startOf(date, CENTURY))
      : dates.add(date, val + 100, YEAR);
  },

  weekday: function (date, val, firstDay) {
      var weekday = (dates.day(date) + 7 - (firstDay || 0) ) % 7;

      return val === undefined 
        ? weekday 
        : dates.add(date, val - weekday, DAY);
  },

  diff: function (date1, date2, unit, asFloat) {
    var dividend, divisor, result;

    switch (unit) {
      case MILI:
      case SECONDS:
      case MINUTES:
      case HOURS:
      case DAY:
      case WEEK:
        dividend = date2.getTime() - date1.getTime(); break;
      case MONTH:
      case YEAR:
      case DECADE:
      case CENTURY:
        dividend = (dates.year(date2) - dates.year(date1)) * 12 + dates.month(date2) - dates.month(date1); break;
      default:
        throw new TypeError('Invalid units: "' + unit + '"');
    }

    switch (unit) {
      case MILI:
          divisor = 1; break;
      case SECONDS:
          divisor = 1000; break;
      case MINUTES:
          divisor = 1000 * 60; break;
      case HOURS:
          divisor = 1000 * 60 * 60; break;
      case DAY:
          divisor = 1000 * 60 * 60 * 24; break;
      case WEEK:
          divisor = 1000 * 60 * 60 * 24 * 7; break;
      case MONTH:
          divisor = 1; break;
      case YEAR:
          divisor = 12; break;
      case DECADE:
          divisor = 120; break;
      case CENTURY:
          divisor = 1200; break;
      default:
        throw new TypeError('Invalid units: "' + unit + '"');
    }

    result = dividend / divisor;

    return asFloat ? result : absoluteFloor(result);
  }
};

function absoluteFloor(number) {
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

function monthMath(date, val){
  var current = dates.month(date)
    , newMonth  = (current + val);

    date = dates.month(date, newMonth)

    while (newMonth < 0 ) newMonth = 12 + newMonth
      
    //month rollover
    if ( dates.month(date) !== ( newMonth % 12))
      date = dates.date(date, 0) //move to last of month

    return date
}

function createAccessor(method){
  return function(date, val){
    if (val === undefined)
      return date['get' + method]()

    date = new Date(date)
    date['set' + method](val)
    return date
  }
}

function createComparer(operator) {
  return function (a, b, unit) {
    return operator(+dates.startOf(a, unit), +dates.startOf(b, unit))
  };
}
