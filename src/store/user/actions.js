/*
export function someAction (context) {
}
*/
import firebase from 'firebase/app'
import 'firebase/auth'
import CreateUaer from '../../utils/CreateUserInCollection'

export function countActionUP ({commit}) {
  commit('countUP')
}

export function Registration ({commit}, payload) {
  console.log(payload)
  firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(function (resp) {
    // console.log(resp.user.uid)
    CreateUaer(resp.user.uid)
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
  let v = this
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
    v.$router.push({path: '/'})
  }).catch(function (error) {
    // An error happened.
    console.log(error)
  })
}

export function SingIn ({commit}, payload) {
  console.log(payload)
  let v = this
  firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(function () {
    if (payload.redirect) {
      v.$router.push(payload.redirect)
    } else {
      v.$router.push('/')
    }
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code
    var errorMessage = error.message
    // ...
    console.log(errorCode)
    console.log(errorMessage)
  })
}
