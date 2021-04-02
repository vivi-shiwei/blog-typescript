import { Migration } from '@mikro-orm/migrations';

export class Migration20210317115043 extends Migration {

  async up(): Promise<void> {
    this.addSql('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    this.addSql('create table "users" ("id" uuid not null default uuid_generate_v4(), "seq_id" serial primary key, "username" varchar(255) null, "birthday" varchar(255) null, "gender" varchar(255) null, "email" varchar(255) null, "github_provider_id" varchar(255) null, "google_provider_id" varchar(255) null, "phone_number" varchar(255) null, "password" varchar(255) not null, "profile_photo" varchar(255) null, "is_admin" bool not null default false, "is_verify" bool not null default false, "created_at" timestamptz(0) not null default current_timestamp, "modified_at" timestamptz(0) null, "deleted_at" timestamptz(0) null);');
  }

}
