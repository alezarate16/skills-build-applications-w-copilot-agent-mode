import { Router } from 'express';
import { getApiBaseUrl } from '../utils/apiUrl.js';
const router = Router();
router.get('/', (req, res) => {
    res.json({
        message: 'Users route',
        baseUrl: getApiBaseUrl(req),
        endpoint: '/api/users/'
    });
});
export default router;
