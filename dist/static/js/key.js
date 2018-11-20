var config = {
	apiKey: "AIzaSyBy6svccUAEjz_wNoEkw4gGMNX2s4yGFVM",
	authDomain: "fir-auth-16452.firebaseapp.com",
	databaseURL: "https://fir-auth-16452.firebaseio.com",
	projectId: "fir-auth-16452",
	storageBucket: "fir-auth-16452.appspot.com",
	messagingSenderId: "515532663982"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })
var db = firebase.firestore();
var storageRef = firebase.storage().ref();