import { Router } from 'express';
import { getApiBaseUrl } from '../utils/apiUrl.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Activities route',
    baseUrl: getApiBaseUrl(req),
    endpoint: '/api/activities/'
  });
});

export default router;
