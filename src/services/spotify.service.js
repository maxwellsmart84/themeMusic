import rp from 'request-promise';


export async function authSpotify() {
  const uri = 'https://accounts.spotify.com/api/token';
  try {
    const reply = await rp.post({
      uri,
      form: {
        grant_type: 'client_credentials'
      },
      headers: {
        Authorization: Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`, 'base64');
      }
    })
    return reply;
  } catch(err) {
    console.log(err)
    return err;
  }
  return null;
}
