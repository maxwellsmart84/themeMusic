import { Router } from 'express';
import spotifyController from './controllers/spotify.controller';
import songHookController from './controllers/songHook.controler';

const router = Router();


router.get('/song', songHookController.getSetSong);
router.post('/stop', songHookController.stopSong);
router.post('/play', songHookController.playSong);

router.get('/spotify/song', spotifyController.searchSong);
router.post('/spotify/song', spotifyController.postSong);
router.patch('/spotify/patch', spotifyController.patchSong);


export default router;
