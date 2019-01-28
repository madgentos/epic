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
