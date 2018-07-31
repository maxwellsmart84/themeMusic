import rp from 'request-promise';
import * as db from './firebase.service';


export async function authSpotify() {
  const uri = 'https://accounts.spotify.com/api/token';
  const authString = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64');
  try {
    const reply = await rp.post({
      uri,
      form: { grant_type: 'client_credentials' },
      headers: { Authorization: `Basic ${authString}` },
      json: true,
    });
    return reply;
  } catch (err) {
    throw new Error(err);
  }
}

export async function searchSpotify(params) {
  const uri = `https://api.spotify.com/v1/search?q=${params}`;
  const { access_token: token } = await authSpotify();
  console.log(params);
  try {
    const reply = await rp.get({
      uri,
      headers: { Authorization: `Bearer ${token}` },
      qsParseOptions: { encode: false },
      qs: {
        // q: params,
        limit: 6,
        type: 'album,artist,track',
      },
      json: true,
    });
    return reply;
  } catch (err) {
    throw new Error(err);
  }
}

