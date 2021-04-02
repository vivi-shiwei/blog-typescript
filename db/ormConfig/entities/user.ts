import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Users {

  @Property({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
  id!: string;

  @PrimaryKey({ default: false })
  seq_id!: number;

  @Property({ nullable: true })
  username?: string;

  @Property({ nullable: true })
  birthday?: string;

  @Property({ nullable: true })
  gender?: string;

  @Property({ nullable: true })
  email?: string;

  @Property({ nullable: true })
  github_provider_id?: string;

  @Property({ nullable: true })
  google_provider_id?: String;

  @Property({ nullable: true })
  phone_number?: string;

  @Property()
  password?: string;

  @Property({ nullable: true })
  profile_photo?: string;

  @Property({ default: false })
  is_admin?: boolean;

  @Property({ default: false })
  is_verify:boolean;

  @Property({ onUpdate: () => new Date(), default: 'current_timestamp' })
  created_at?: Date = new Date();

  @Property({ nullable: true, onUpdate: () => new Date() })
  modified_at?: Date = new Date();

  @Property({ nullable: true, onUpdate: () => new Date() })
  deleted_at?: Date = new Date();
}
