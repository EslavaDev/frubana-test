import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/messaging';

import env from './env';

const FrubanaFirebase = firebase.initializeApp(env.firebase);

export const firebaseInitial = FrubanaFirebase;
export const firebaseDB = FrubanaFirebase.database();
