import { type NextFunction, type Request, type Response } from 'express';

import { PartyService } from '../services/party.service';

export class PartyController {
  private readonly partyService = new PartyService();

  async getParty(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const party = await this.partyService.getParty(req.params.itn);
      res.status(200).json(party);
    } catch (err) {
      next(err);
    }
  }
}
