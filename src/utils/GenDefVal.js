'use strict'
const moment = require('moment')
require('moment/locale/es')
require('moment/locale/ru')

export function DefMonth () {
  let month = new Date()
  let m = moment(month).format('M')
  return m
}
export function DefYear () {
  let year = new Date()
  let y = moment(year).format('Y')
  return y
}
export function GenPoolYear () {
  let y = new Date()
  let year = []
  for (let i = 0; i <= 10; i++) {
    let b = moment(y).format('YYYY') - i
    let a = {
      label: b.toString(),
      value: b
    }
    year.push(a)
  }
  return year
}

export function tablefits (fits, dayInMouth) {
  let arr = []
  let a = {}
  a.te = '4324'
  arr.push(a)
  fits.concat(arr)
  return createTable(dayInMouth, fits)
}
function createTable (day, fits) {
  let arr = []
  for (let i = 1; i <= day; i++) {
    let obj = {}
    obj.date = i
    obj.hours = []
    for (let i = 0; i < 24; i++) {
      let time = {}
      time.hour = i
      time.fits = []
      obj.hours.push(time)
    }
    arr.push(obj)
  }

  if (fits) {
    console.log(fits)
    for (let dayItem of arr) {
      for (let fit of fits) {
        if (dayItem.date === Number(fit.day)) {
          for (let itemHour of dayItem.hours) {
            if (itemHour.hour === Number(fit.hour)) {
              console.log(itemHour.hour)
              itemHour.fits.push(fit)
            }
          }
        }
      }
    }
  }
  return arr
}
