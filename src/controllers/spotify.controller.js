import { authSpotify } from '../services/spotify.service';
import * as firebase from '../services/firebase.service';

export async function authorize(req, res) {
  const spotifyResponse = await authSpotify();
  console.log('spotify response', spotifyResponse);
  if (!spotifyResponse) {
    res.status(500).send(spotifyResponse);
    throw new error(spotifyResponse);
  }
  const { access_token: token } = spotifyResponse;
  await firebase.postToken(token);
  return res.status(200);
}
