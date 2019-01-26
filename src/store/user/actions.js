/*
export function someAction (context) {
}
*/
import firebase from 'firebase'

export function countActionUP ({commit}) {
  commit('countUP')
}

export function Registration ({commit}, payload) {
  console.log(payload)
  firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(function (resp) {
    console.log(resp)
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code
    var errorMessage = error.message
    // ...
    console.log(errorCode)
    console.log(errorMessage)
  })
}

export function isAutched ({commit}, bool) {
  // console.log('isAutched ' + bool)
  commit('SetAuthorised', bool)
}
export function SetUidAc ({commit}, uid) {
  // console.log('isAutched ' + uid)
  commit('SetUid', uid)
}

export function logOut () {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
    console.log(error)
  })
}

export function SingIn ({commit}, payload) {
  console.log(payload)
  firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code
    var errorMessage = error.message
    // ...
    console.log(errorCode)
    console.log(errorMessage)
  })
}
