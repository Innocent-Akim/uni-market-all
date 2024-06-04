import { ApplicationPluginConfig } from "./Idatabases.init";
import { dbTypeOrmConnectionConfig } from "./databases";

export const devConfig:ApplicationPluginConfig={
    dbConnectionOptions: {
		retryAttempts: 100,
		retryDelay: 3000,
		migrationsTransactionMode: 'each', // Run migrations automatically in each transaction. i.e."all" | "none" | "each"
		migrationsRun: process.env.DB_SYNCHRONIZE === 'true' ? false : true, // Run migrations automatically if we don't do DB_SYNCHRONIZE
		...dbTypeOrmConnectionConfig
	},
}