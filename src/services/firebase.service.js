import admin from 'firebase-admin';
import firebasePrivateKey from '../../firebase-private.json';


admin.initializeApp({
  credential: admin.credential.cert(firebasePrivateKey),
  databaseURL: 'https://thememusic-306dd.firebaseio.com',
});

const db = admin.database();
const spotifyTokenRef = db.ref().child('spotify-token');

export async function postToken(token) {
  try {
    const tokenData = {
      token,
    };
    await spotifyTokenRef.push({
      tokenData,
    });
    return true;
  } catch (err) {
    throw new Error(err);
  }
}
