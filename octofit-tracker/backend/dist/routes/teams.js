import { Router } from 'express';
import { getApiBaseUrl } from '../utils/apiUrl.js';
const router = Router();
router.get('/', (req, res) => {
    res.json({
        message: 'Teams route',
        baseUrl: getApiBaseUrl(req),
        endpoint: '/api/teams/'
    });
});
export default router;
