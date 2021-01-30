import { ConnectionOptions } from 'typeorm';
import { database } from './env';

const config: ConnectionOptions = {
    type: 'mysql',
    host: database.host,
    port: database.port,
    username: database.username,
    password: database.password,
    database: database.name,
    entities: [
        __dirname + '/../modules/**/entities/*.ts',
    ],
    migrations: [
        __dirname + '/../migrations/*.ts',
    ],
    cli: {
        migrationsDir: 'src/migrations',
    }
};
export = config;