import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyCsZ7Ad75jNUTkicie-SVSWyXaNNGbufJk",
    authDomain: "m-city-d0b54.firebaseapp.com",
    databaseURL: "https://m-city-d0b54.firebaseio.com",
    projectId: "m-city-d0b54",
    storageBucket: "m-city-d0b54.appspot.com",
    messagingSenderId: "917573800718"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}