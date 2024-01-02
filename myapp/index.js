const addDays = require('date-fns/addDays')

function result(days) {
  let givendate = addDays(new Date(2020, 7, 22), days)
  console.log(
    `${givendate.getDate()}-${
      givendate.getMonth() + 1
    }-${givendate.getFullYear()}`,
  )
}

result(2)
