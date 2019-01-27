import firebase from 'firebase/app'
import 'firebase/firestore'

export default function (uid) {
  const db = firebase.firestore()
  console.log('Create user' + uid)
  db.collection('user').add({
    uid: uid
  })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch(function (error) {
      console.error('Error adding document: ', error)
    })
}
