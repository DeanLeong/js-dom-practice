
// Get the element with an ID of 'first' using querySelector
let first = document.querySelector('#first')
// console.log(first)
// Get the elements with a class of 'second' with querySelector
// let secondClass = document.querySelector('.second')
// console.log(secondClass)
// Try the above prompt with querySelectorAll. What's the difference between what these two methods return?
let secondClass = document.querySelectorAll('.second')
// console.log(secondClass)
// Get the span element using querySelector
// let span = document.querySelector('span')
// console.log(span)
// Get multiple span elements using querySelectorAll
// let span = document.querySelectorAll('span')
// console.log(span)
// Select only "a" tags *directly inside* of a div (no grandchildren).
let aTag = document.querySelectorAll('div > a')
// console.log("aTag",aTag)
let aTags = document.querySelectorAll('div a')
// console.log("aTags", aTags)
// Select all elements that contain a "data-target" attribute
let dataAtt = document.querySelectorAll('[data-target]')
console.log(dataAtt)
// Select all elements where the data-target attribute equals "#false"
let falseDataAtt = document.querySelectorAll('[data-target="#false"]')
console.log(falseDataAtt)
