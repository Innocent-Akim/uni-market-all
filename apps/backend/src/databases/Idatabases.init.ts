import { DynamicModule, Type } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { IAbstractLogger } from './IabstractLogger';


export type IDBConnectionOptions = TypeOrmModuleOptions;

/**
 * Configuration options for handling assets in the application.
 */
export interface AssetConfigurationOptions {
	/**
	 * The path where assets are stored.
	 * @description Specifies the directory path where assets are stored.
	 */
	assetPath: string;

	/**
	 * The public path for accessing assets.
	 * @description Defines the public URL path for accessing assets.
	 */
	assetPublicPath: string;
}


/**
 * Configuration options for authentication in the application.
 */
export interface AuthConfigurationOptions {
	/**
	 * Secret used for Express session.
	 * @description Specifies the secret used for Express session.
	 */
	expressSessionSecret: string;

	/**
	 * Number of rounds for bcrypt hashing of user passwords.
	 * @description Defines the number of rounds for bcrypt hashing of user passwords.
	 */
	userPasswordBcryptSaltRounds: number;

	/**
	 * Secret used for JWT (JSON Web Token) generation.
	 * @description Specifies the secret used for JWT generation.
	 */
	jwtSecret: string;
}

/**
 * Configuration options for plugins in the application.
 */
export interface ApplicationPluginConfig {
	/**
	 * Database connection options for TypeORM.
	 * @description Specifies options for connecting to the database using TypeORM.
	 */
	dbConnectionOptions: TypeOrmModuleOptions;

	/**
	 * Array of plugins to be dynamically added to the application.
	 * @description Defines a list of dynamic modules or classes representing plugins.
	 */
	plugins?: Array<DynamicModule | Type<any>>;

	/**
	 * Logger configuration.
	 * @description Defines options for configuring the application logger.
	 */
	logger?: IAbstractLogger;

	/**
	 * Authentication options.
	 * @description Defines options for configuring authentication in the application.
	 */
	authOptions?: AuthConfigurationOptions;

	/**
	 * Asset options.
	 * @description Defines options for handling assets in the application.
	 */
	assetOptions?: AssetConfigurationOptions;
}