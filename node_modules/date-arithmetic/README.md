
Date Arthmetic
=================

A simple object containing some date math utils in the spirit of Moment.js. Unlike Moment this module, returns real date objects, so it isn't chainable.

    var dateMath = require('date-arithmetic')

    var date = dateMath.month(new Date) 

## API

all api methods return a _new_ date. Date objects are never mutated.

### Accessors

get and set date part values. 

- `dateMath.milliseconds(date, [value])`
- `dateMath.seconds(date, [value])`
- `dateMath.minutes(date, [value])`
- `dateMath.hours(date, [value])`
- `dateMath.date(date, [value])`
- `dateMath.day(date, [value])`
- `dateMath.weekday(date, [value], [firstOfWeek = 0])`
- `dateMath.month(date, [value])`
- `dateMath.year(date, [value])`
- `dateMath.decade(date, [value])`
- `dateMath.century(date, [value])`

### `startOf(data, unit, [firstOfWeek = 0])`

return a new date with the relevent date parts zero'd out. You only need to provide a `firstOfWeek` when the unit is `'week'`

    dateMath.startOf(new Date, 'day') // -> no time components

Valid unit values are; `"second", "minutes", "hours", "day", "week", "month", "year", "decade", "century" `


### `endOf(data, unit)`

the opposite of `startOf`

    dateMath.endOf(new Date, 'day') // -> one millisecond before tomorrow

Valid unit values are; `"milliseconds", "second", "minutes", "hours", "day", "weekday", "month", "year", "decade", "century"`.

### Math Functions

Arithmetic functions

- `dateMath.add(date, value, unit)`
- `dateMath.subtract(date, value, unit)`
- `dateMath.eq(dateA, dateB)`
- `dateMath.neq(dateA, dateB)`
- `dateMath.gte(dateA, dateB)`
- `dateMath.gt(dateA, dateB)`
- `dateMath.lte(dateA, dateB)`
- `dateMath.lt(dateA, dateB)`
- `dateMath.inRange(day, min, max, unit)`
- `dateMath.min(dateA, dateB, dateN)`
- `dateMath.max(dateA, dateB, dateN)`
- `dateMath.diff(dateA, dateB, unit, asFloat)`

Valid unit values are; `"second", "minutes", "hours", "day", "week", "month", "year", "decade", "century" `
