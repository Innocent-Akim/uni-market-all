import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseTypeEnum, getLoggingOptions, getTlsOptions } from './database.helpers';

let typeOrmConnectionConfig: TypeOrmModuleOptions;
const dbType = process.env.DB_TYPE || DatabaseTypeEnum.postgres;
const dbPoolSize = process.env.DB_POOL_SIZE ? parseInt(process.env.DB_POOL_SIZE) : 40;
const dbConnectionTimeout = process.env.DB_CONNECTION_TIMEOUT ? parseInt(process.env.DB_CONNECTION_TIMEOUT) : 5000; // 5 seconds default
const idleTimeoutMillis = process.env.DB_IDLE_TIMEOUT ? parseInt(process.env.DB_IDLE_TIMEOUT) : 10000; // 10 seconds
const dbSlowQueryLoggingTimeout = process.env.DB_SLOW_QUERY_LOGGING_TIMEOUT ? parseInt(process.env.DB_SLOW_QUERY_LOGGING_TIMEOUT) : 10000; // 10 seconds default
const dbSslMode = process.env.DB_SSL_MODE === 'true';

console.log('DB ORM Pool Size: ' + dbPoolSize);
console.log('DB Connection Timeout: ' + dbConnectionTimeout);
console.log('DB Idle Timeout: ' + idleTimeoutMillis);
console.log('DB Slow Query Logging Timeout: ' + dbSlowQueryLoggingTimeout);
console.log('DB SSL Mode: ' + process.env.DB_SSL_MODE);
console.log('DB SSL MODE ENABLE: ' + dbSslMode);
console.log('DATABASE NAME: ' + process.env.DB_NAME);

switch (dbType) {
    case DatabaseTypeEnum.mysql:
        const typeOrmMySqlOptions: MysqlConnectionOptions = {
            type: "mysql",
            ssl: getTlsOptions(dbSslMode),
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
            database: process.env.DB_NAME || 'mysql',
            username: process.env.DB_USER || 'root',
            password: process.env.DB_PASS || 'root',
            connectorPackage: 'mysql2',
            logging: getLoggingOptions(process.env.DB_LOGGING), // by default set to error only
            logger: 'advanced-console',
            maxQueryExecutionTime: dbSlowQueryLoggingTimeout,
            synchronize: process.env.DB_SYNCHRONIZE === 'true', // We are using migrations, synchronize should be set to false.
            poolSize: dbPoolSize,
            entities: ['dist/**/*.entity{.ts,.js}'],
            migrations: ['dist/migrations/*{.ts,.js}'],
            extra: {
                connectionLimit: dbPoolSize,
                maxIdle: dbPoolSize
            },

        };
        typeOrmConnectionConfig = typeOrmMySqlOptions;
        break;
    case DatabaseTypeEnum.postgres:
        const typeOrmPostgresOptions: PostgresConnectionOptions = {
            type: 'postgres',
            ssl: getTlsOptions(dbSslMode),
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
            database: process.env.DB_NAME || 'postgres',
            username: process.env.DB_USER || 'postgres',
            password: process.env.DB_PASS || 'root',
            logging: getLoggingOptions(process.env.DB_LOGGING), // by default set to error only
            logger: 'advanced-console',
            maxQueryExecutionTime: dbSlowQueryLoggingTimeout,
            synchronize: process.env.DB_SYNCHRONIZE == 'true', // We are using migrations, synchronize should be set to false.
            uuidExtension: 'pgcrypto',
            entities: ['dist/**/*.entity{.ts,.js}'],
            migrations: ['dist/databases/migrations/*{.ts,.js}'],
            poolSize: dbPoolSize,
            extra: {
                max: dbPoolSize,
                minConnection: 0,
                maxConnection: dbPoolSize,
                poolSize: dbPoolSize,
                connectionTimeoutMillis: dbConnectionTimeout,
                idleTimeoutMillis: idleTimeoutMillis
            }
        };
        typeOrmConnectionConfig = typeOrmPostgresOptions;


}
/**
 * TypeORM DB connection configuration.
 */
export const dbTypeOrmConnectionConfig = typeOrmConnectionConfig;
