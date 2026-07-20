import { Router } from 'express';
import { getApiBaseUrl } from '../utils/apiUrl.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Workouts route',
    baseUrl: getApiBaseUrl(req),
    endpoint: '/api/workouts/'
  });
});

export default router;
