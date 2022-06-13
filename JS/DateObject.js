const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const days = [
     'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]


// console.log(days[date.getDay()])
// console.log(months[date.getMonth()])
// console.log(date.getMonth())
// console.log(date.getDay())
// console.log(date.getDate())
// console.log(date.getFullYear()) // gives year

const date = new Date()
//console.log(date)
const month = months[date.getMonth()]

const day = days[date.getDay()]

// something meaningful

const sentence = `${day}, ${date.getDate()} ${month} ${date.getFullYear()}`
console.log(sentence)

document.body.innerHTML = sentence