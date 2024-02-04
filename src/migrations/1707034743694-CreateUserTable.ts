import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1707034743694 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar(250)',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar(50)',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar(50)',
            isNullable: false,
          },
          {
            name: 'phoneCountryCode',
            type: 'varchar(10)',
            isNullable: false,
          },
          {
            name: 'phoneNumber',
            type: 'varchar(25)',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamptz',
            default: 'now()',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
