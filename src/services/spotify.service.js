import rp from 'request-promise';


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

export async function searchSong(searcData) {
  console.log(searchData);
  return searchData;
}

export async function searchArtist(searchData) {
  console.log(searchData);
  return searchData;
}

export function searchAlbum(searchData) {
  console.log(searchData);
  return searchData;
}

export function searchAll(searchData) {
  console.log(searchData);
  return searchData;
}
