import { Router } from 'express';
import { getApiBaseUrl } from '../utils/apiUrl.js';
const router = Router();
router.get('/', (req, res) => {
    res.json({
        message: 'Leaderboard route',
        baseUrl: getApiBaseUrl(req),
        endpoint: '/api/leaderboard/'
    });
});
export default router;
