import firebase from 'firebase/app'
import {config} from '../config/firebase'
// leave the export, even if you don't use it
export default ({ app, router, Vue, store }) => {
  // something to do
  firebase.initializeApp(config)

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log(user)
      store.dispatch('user/isAutched', !!user)
      store.dispatch('user/SetUidAc', user.uid)
    } else {
      // No user is signed in.
      store.dispatch('user/isAutched', !!user)
      store.dispatch('user/SetUidAc', '')

      // console.log()
    }
  })
}
