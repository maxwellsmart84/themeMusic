import { authSpotify, searchSpotify } from '../services/spotify.service';
import * as firebase from '../services/firebase.service';

export async function authorize(req, res) {
  const spotifyResponse = await authSpotify();
  if (!spotifyResponse) {
    res.status(500).send(spotifyResponse);
    throw new Error(spotifyResponse);
  }
  const { access_token: token } = spotifyResponse;
  await firebase.postToken(token);
  return res.status(200).send();
}

export async function search(req, res) {
  const { artist, track } = req.query;
  const cleanArtist = artist.replace(/\s/g, '+');
  const cleanTrack = track.replace(/\s/g, '+');
  const encodedParams = `${cleanArtist}+${cleanTrack}`;
  console.log(encodedParams);
  const music = await searchSpotify(encodedParams);
  return res.status(200).send(music);
}

