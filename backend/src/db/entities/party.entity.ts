import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class PartyEntity {
  @PrimaryColumn('varchar', {
    length: 20,
  })
  itn!: string;

  @Column({ nullable: false })
  name!: string;
}
