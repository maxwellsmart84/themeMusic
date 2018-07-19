import rp from 'request-promise';


export async function authSpotify() {
  const uri = 'https://accounts.spotify.com/api/token';
  const authString = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64');
  console.log(authString);
  try {
    const reply = await rp.post({
      uri,
      form: {
        grant_type: 'client_credentials',
      },
      headers: {
        Authorization: `Basic ${authString}`,
      },
    });
    return reply;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
