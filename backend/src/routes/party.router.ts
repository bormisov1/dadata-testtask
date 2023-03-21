import { Router } from 'express';

import { PartyController } from '../controllers/party.controller';

const partyController = new PartyController();

const partyRouter = Router();

partyRouter.get('/:itn', partyController.getParty.bind(partyController));

export { partyRouter };
