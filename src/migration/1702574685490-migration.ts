import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class Migration1702574685490 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'migrations',
      new TableColumn({
        name: 'test',
        type: 'character',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('migrations', 'test');
  }
}
