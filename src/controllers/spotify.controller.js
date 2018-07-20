import { authSpotify, searchSong, searchAlbum, searchArtist, searchAll } from '../services/spotify.service';
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

export async function getSongs(req, res) {
  res.status(200).send();

export async function getAlbums(req, res) {
  res.status(200).send();
}

export async function getArtists(req, res) {
  res.status(200).send();
}

export async function getAll(req, res) {
  res.status(200).send();

}


