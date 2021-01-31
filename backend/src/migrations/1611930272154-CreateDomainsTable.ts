import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDomainsTable1611930272154 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'domains',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        generationStrategy: 'increment',
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'ip_address',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'whois',
                        type: 'longtext',
                        isNullable: true,
                    },
                    {
                        name: 'web_hosting',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'time_to_live',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false,
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false,
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('domains');
    }

}
