import * as path from 'path';
import * as dotenv from 'dotenv';

const env = process.env.NODE_ENV || 'dev';

const dotenv_path = path.resolve(process.cwd(), `.${env}.env`);
const result = dotenv.config({ path: dotenv_path });

if (result.error) {
  console.error('Error:while accessing the env', result.error);
}

export const DatabaseConfig = {
  type: 'postgres' as any,
  database: process.env.POSTGRES_DATABASE,
  port: parseInt(process.env.POSTGRES_PORT) || 5342,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  synchronize: false,
  migrationsRun: false,
  keepConnectionAlive: true,
  autoLoadEntities: process.env.TYPE_ORM_AUTOLOAD_ENTITIES == 'true',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/**/*{.ts,.js}'],
  cli: { migrationsDir: 'src/migrations' },
};

export default DatabaseConfig;
