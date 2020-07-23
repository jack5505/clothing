import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore  = firebase.firestore();

firestore.collection('users').doc('ef8vKx0NpqozUsCQfIcH').collection('cartItems').doc('P3X3e2p7hUbqLUUvjo30')

firestore.doc('/users/ef8vKx0NpqozUsCQfIcH/cartItems/P3X3e2p7hUbqLUUvjo30');

firestore.collection('/users/ef8vKx0NpqozUsCQfIcH/cartItems');