import admin from 'firebase-admin';
import firebasePrivateKey from '../../firebase-private.json';


admin.initializeApp({
  credential: admin.credential.cert(firebasePrivateKey),
  databaseURL: 'https://thememusic-306dd.firebaseio.com',
});

const db = admin.database();
const spotifyTokenRef = db.ref().child('spotifyTokens/tokens');

export async function postToken(token) {
  const reply = await spotifyTokenRef.set(token);
  console.log('Firebase reply', reply);
  return reply;
}
