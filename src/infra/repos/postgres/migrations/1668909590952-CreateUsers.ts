import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createUsers1661805348016 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'username',
          type: 'varchar'

        },
        {
          name: 'password',
          type: 'varchar'
        },
        {
          name: 'account_id',
          type: 'int'
        }

      ],
      foreignKeys: [
        {
          name: 'fk_users_accounts',
          columnNames: ['account_id'],
          referencedTableName: 'accounts',
          referencedColumnNames: ['id']
        }

      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
