import { DB, Party } from '../interface';

import { AppDataSource } from './data-source';
import { PartyEntity } from './entities/party.entity';

export class DBService implements DB {
  private readonly partyRepository = AppDataSource.getRepository(PartyEntity);

  public async getParty(itn: string): Promise<Party | null> {
    return this.partyRepository.findOneBy({ itn }).then((ent) => ent as Party);
  }

  public async insertParty(party: Party): Promise<void> {
    await this.partyRepository.insert(party);
  }
}
