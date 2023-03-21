export interface Party {
  itn: string;
  name: string;
}

export interface DB {
  getParty(itn: string): Promise<Party | null>;
  insertParty(party: Party): Promise<void>;
}
