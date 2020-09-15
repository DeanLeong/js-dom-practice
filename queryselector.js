
const first = document.querySelector('#first')
// console.log(first)
// Get the elements with a class of 'second' with querySelector
const second = document.querySelector('.second')
// console.log(second)
// Try the above prompt with querySelectorAll. What's the difference between what these two methods return?
const secondAll = document.querySelectorAll('.second')
// console.log(secondAll)
// Get the span element using querySelector
const span = document.querySelector('span')
// console.log(span)
// Get multiple span elements using querySelectorAll
const spanAll = document.querySelectorAll('span')
// console.log(spanAll)
// Select only "a" tags *directly inside* of a div (no grandchildren).
const aTag = document.querySelector('div > a')
// console.log(aTag)
// Select all elements that contain a "data-target" attribute
const dataTarget = document.querySelectorAll('[data-target]')
// console.log(dataTarget)
// Select all elements where the data-target attribute equals "#false"
const falseDataTargets = document.querySelectorAll('[data-target="#false"]')
// console.log(falseDataTargets)

