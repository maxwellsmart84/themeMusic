import express from 'express';
import * as spotifyController from './controllers/spotify.controller';
import asyncWrap from './middleware';
// import * as songHookController from './controllers/songHook.controller';

const router = express.Router();

// add routes for slack bot to poll for votes on play time
// this could also serve as the remote controller.
// support for ghome and echo

// router.get('/song', songHookController.getSetSong);
// router.post('/stop', songHookController.stopSong);
// router.post('/play', songHookController.playSong);

// router.get('/spotify/login', spotifyController.authSpotify);
// router.get('/spotify/song', spotifyController.searchSong);
router.get('/spotify/auth', asyncWrap(spotifyController.authorize));
// router.post('/spotify/song', spotifyController.postSong);
// router.patch('/spotify/patch', spotifyController.patchSong);


export default router;
