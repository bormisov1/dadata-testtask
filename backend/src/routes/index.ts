import { Router } from 'express';

import { partyRouter } from './party.router';

const router = Router();

router.use('/party', partyRouter);

export { router as routes };
