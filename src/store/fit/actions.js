/*
export function someAction (context) {
}
*/
import firebase from 'firebase/app'
import 'firebase/firestore'

export function GET_FITS ({commit, rootGetters}, payload) {
  const db = firebase.firestore()
  const uid = rootGetters['user/Uid']
  this.unsubscribe = db.collection('user').doc(uid).collection('fit')
    .where('match', '==', payload.Month.toString())
    .where('year', '==', payload.Year.toString())
    .onSnapshot(function (querySnapshot) {
      var fitsarr = []
      querySnapshot.forEach(function (doc) {
        let pris = {
          id: doc.id,
          day: doc.data().day,
          date: doc.data().date,
          year: doc.data().year,
          match: doc.data().match,
          hour: doc.data().hour,
          fitStrength: doc.data().fitStrength
        }
        fitsarr.push(pris)
      })
      console.log(fitsarr)
      commit('SET_FITS', fitsarr)
    })
}

export function ADD_FIT ({commit, rootGetters}, payload) {
  const uid = rootGetters['user/Uid']
  const db = firebase.firestore()
  console.log(payload)
  db.collection('user').doc(uid).collection('fit').add({
    date: payload.date,
    year: payload.year,
    match: payload.month,
    day: payload.day,
    hour: payload.hour,
    fitStrength: payload.fitStrength
  }).catch(function (error) {
    console.error('Error adding document: ', error)
  })
}

export function STOP_FITS ({commit, rootGetters}) {
  console.log('soped fit fetch')
  this.unsubscribe()
}
