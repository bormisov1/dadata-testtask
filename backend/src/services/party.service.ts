import { DBService } from '../db';
import { Party } from '../interface';

export class PartyService {
  private readonly db = new DBService();

  async getParty(itn: string): Promise<Party> {
    let party = await this.db.getParty(itn);
    if (party) return party;

    const url =
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party';
    const token = process.env.API_KEY;
    const options: RequestInit = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Token ' + token,
      },
      body: JSON.stringify({ query: itn }),
    };
    const response = await (await fetch(url, options)).json();
    if (response.reason === 'Forbidden') throw Error('token_rejected');
    const parties = response['suggestions'];
    if (!parties || !parties.length) throw Error('no_such_party');
    const partyName = parties[0]['value'];
    party = { itn, name: partyName };
    await this.db.insertParty(party);
    return party;
  }
}
