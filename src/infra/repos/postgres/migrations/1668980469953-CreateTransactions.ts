import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTransactions1668980469953 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'transactions',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
              },
              {
                name: 'debited_account_id',
                type: 'int'
      
              },
              {
                name: 'credited_account_id',
                type: 'int'
              },
              {
                name: 'value',
                type: 'float'
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()'
              }
      
      
            ],
            foreignKeys: [
              {
                name: 'fk_deb_account',
                columnNames: ['debited_account_id'],
                referencedTableName: 'accounts',
                referencedColumnNames: ['id']
              },
              {
                name: 'fk_cred_account',
                columnNames: ['credited_account_id'],
                referencedTableName: 'accounts',
                referencedColumnNames: ['id']
              }
      
            ]
          }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('transactions')
    }

}
