import admin from 'firebase-admin';
import firebasePrivateKey from '../../firebase-private.json';


admin.initializeApp({
  credential: admin.credential.cert(firebasePrivateKey),
  databaseURL: 'https://thememusic-306dd.firebaseio.com',
});

const db = admin.database();
const spotifyTokenRef = db.ref().child('spotify-token');
const usersRef = db.ref().child('users');

export async function postToken(token) {
  try {
    const tokenData = { token };
    await spotifyTokenRef.push({ tokenData });
    return true;
  } catch (err) {
    throw new Error(err);
  }
}

export function getUser(id) {
  console.log('Figure out Get by id');
  return id;
}

export function patchUser(id, data) {
  console.log('---ARGS PATCH USER---', id, data);
  return id;
}


export async function postUser(userData) {
  try {
    const user = await usersRef.push({ userData });
    return user;
  } catch (err) {
    console.log(err);
    return err;
  }
}

