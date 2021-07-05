import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "AIzaSyA6Bi6V_9mZdtN3it1524blJxtsOqYDXDM",
        authDomain: "fir-pj-7fcd1.firebaseapp.com",
        projectId: "fir-pj-7fcd1",
        storageBucket: "fir-pj-7fcd1.appspot.com",
        messagingSenderId: "439393228482",
        appId: "1:439393228482:web:143fd703f84519d6e3cd5b",
        measurementId: "G-YB7VPHNYT3"
      }
  )
}
  
export default firebase