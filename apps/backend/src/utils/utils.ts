import { BadRequestException } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { FindManyOptions, FindOperator, FindOptionsOrder } from 'typeorm';
import { sample } from 'underscore';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';
import { DatabaseTypeEnum, IDBConnectionOptions } from '@uni/databases';
import { getConfig } from '@uni/config';


namespace Utils {
	export function generatedLogoColor() {
		return sample(['#269aff', '#ffaf26', '#8b72ff', '#0ecc9D']).replace('#', '');
	}
}




export function reflect(promise) {
	return promise.then(
		(item) => ({ item, status: 'fulfilled' }),
		(error) => ({ error, status: 'rejected' })
	);
}

/**
 * To calculate the last day of a month, we need to set date=0 and month as the next month.
 * So, if we want the last day of February (February is month = 1) we'll need to perform 'new Date(year, 2, 0).getDate()'
 */
export function getLastDayOfMonth(year, month) {
	return new Date(year, month + 1, 0).getDate();
}

export function arrayToObject(array, key, value) {
	return array.reduce((prev, current) => {
		return {
			...prev,
			[current[key]]: current[value]
		};
	}, {});
}




/*
 * Get date range according for different unitOfTimes
 */
// export function getDateRange(
// 	startDate?: string | Date,
// 	endDate?: string | Date,
// 	type: 'day' | 'week' = 'day',
// 	isFormat: boolean = false
// ) {
// 	if (endDate === 'day' || endDate === 'week') {
// 		type = endDate;
// 	}

// 	let start: any = moment.utc().startOf(type);
// 	let end: any = moment.utc().endOf(type);

// 	if (startDate && endDate !== 'day' && endDate !== 'week') {
// 		start = moment.utc(startDate).startOf(type);
// 		end = moment.utc(endDate).endOf(type);
// 	} else {
// 		if ((startDate && endDate === 'day') || endDate === 'week' || (startDate && !endDate)) {
// 			start = moment.utc(startDate).startOf(type);
// 			end = moment.utc(startDate).endOf(type);
// 		}
// 	}

// 	if (!start.isValid() || !end.isValid()) {
// 		return;
// 	}

// 	if (end.isBefore(start)) {
// 		throw 'End date must be greater than start date.';
// 	}

// 	switch (getConfig().dbConnectionOptions.type) {
// 		case DatabaseTypeEnum.sqlite:
// 		case DatabaseTypeEnum.betterSqlite3:
// 			start = start.format('YYYY-MM-DD HH:mm:ss');
// 			end = end.format('YYYY-MM-DD HH:mm:ss');
// 			break;
// 		case DatabaseTypeEnum.postgres:
// 		case DatabaseTypeEnum.mysql:
// 			if (!isFormat) {
// 				start = start.toDate();
// 				end = end.toDate();
// 			} else {
// 				start = start.format();
// 				end = end.format();
// 			}
// 			break;
// 		default:
// 			throw Error(
// 				`cannot get date range due to unsupported database type: ${getConfig().dbConnectionOptions.type}`
// 			);
// 	}

// 	return {
// 		start,
// 		end
// 	};
// }


/**
 * Merge Overlapping Date & Time
 *
 * @param ranges
 * @returns
 */
// export function mergeOverlappingDateRanges(ranges: IDateRange[]): IDateRange[] {
// 	const sorted = ranges.sort(
// 		// By start, ascending
// 		(a, b) => a.start.getTime() - b.start.getTime()
// 	);

// 	const dates = sorted.reduce((acc, curr) => {
// 		// Skip the first range
// 		if (acc.length === 0) {
// 			return [curr];
// 		}

// 		const prev = acc.pop();

// 		if (curr.end <= prev.end) {
// 			// Current range is completely inside previous
// 			return [...acc, prev];
// 		}

// 		// Merges overlapping (<) and contiguous (==) ranges
// 		if (curr.start <= prev.end) {
// 			// Current range overlaps previous
// 			return [...acc, { start: prev.start, end: curr.end }];
// 		}

// 		// Ranges do not overlap
// 		return [...acc, prev, curr];
// 	}, [] as IDateRange[]);

// 	return dates;
// }

/**
 * GET Date Range Format
 *
 * @param startDate
 * @param endDate
 * @returns
 */
// export function getDateRangeFormat(
// 	startDate: moment.Moment,
// 	endDate: moment.Moment
// ): DateRange {
// 	let start = moment(startDate);
// 	let end = moment(endDate);

// 	if (!start.isValid() || !end.isValid()) {
// 		return;
// 	}
// 	if (end.isBefore(start)) {
// 		throw 'End date must be greater than start date.';
// 	}

// 	switch (getConfig().dbConnectionOptions.type) {
// 		case DatabaseTypeEnum.sqlite:
// 		case DatabaseTypeEnum.betterSqlite3:
// 			return {
// 				start: start.format('YYYY-MM-DD HH:mm:ss'),
// 				end: end.format('YYYY-MM-DD HH:mm:ss')
// 			};
// 		case DatabaseTypeEnum.postgres:
// 		case DatabaseTypeEnum.mysql:
// 			return {
// 				start: start.toDate(),
// 				end: end.toDate()
// 			};
// 		default:
// 			throw Error(`cannot get date range due to unsupported database type: ${getConfig().dbConnectionOptions.type}`);
// 	}
// }

/**
 * Get all dates between two dates using Moment.js.
 *
 * @param startDate - The start date.
 * @param endDate - The end date.
 * @returns An array of string representations of dates.
 */
// export function getDaysBetweenDates(
// 	startDate: string | Date,
// 	endDate: string | Date,
// 	timezone: string = moment.tz.guess()
// ): string[] {
// 	const start = moment.utc(startDate).tz(timezone).toDate();
// 	const end = moment.utc(endDate).tz(timezone).toDate();
// 	const range = Array.from(moment.range(start, end).by('days'));

// 	return range.map((date: moment.Moment) => date.format('YYYY-MM-DD'));
// }

/**
 * Generating a random integer number with flexible length
 *
 * @param length
 */
export function generateRandomInteger(length = 6) {
	return Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1));
}

/**
 * Generate a random alphanumeric code.
 * @param length The length of the code. Default is 6.
 * @returns The generated code.
 */
export function generateRandomAlphaNumericCode(length: number = 6): string {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	let code = '';

	for (let i = 0; i < length; i++) {
		const index = Math.floor(Math.random() * characters.length);
		code += characters[index];
	}

	return code;
}

/**
 * Get a fresh timestamp for the entity.
 *
 * @returns {Date}
 */
// export function freshTimestamp(): Date {
// 	return new Date(moment.now());
// }

/**
 * Function that performs the date range validation
 *
 * @param startedAt
 * @param stoppedAt
 * @returns
 */
// export function validateDateRange(startedAt: Date, stoppedAt: Date): void {
// 	try {
// 		const start = moment(startedAt);
// 		const end = moment(stoppedAt);

// 		console.log('------ Stopped Timer ------', start.toDate(), end.toDate());

// 		if (!start.isValid() || !end.isValid()) {
// 			throw 'Started and Stopped date must be valid date.';
// 			// If either start or end date is invalid, return without throwing an exception
// 		}

// 		if (end.isBefore(start)) {
// 			throw 'Stopped date must be greater than started date.';
// 		}
// 	} catch (error) {
// 		// If any error occurs during date validation, throw a BadRequestException
// 		throw new BadRequestException(error);
// 	}
// }

/**
 * Function that returns intersection of 2 array
 * @param arr1
 * @param arr2
 * @returns
 */
export function findIntersection(arr1: any[], arr2: any[]) {
	const set1 = new Set(arr1);
	const intersection = arr2.filter((element) => set1.has(element));
	return intersection;
}

/**
 * Check if the given database connection type is SQLite.
 *
 * @param {string} dbConnection - The database connection type.
 * @returns {boolean} - Returns true if the database connection type is SQLite.
 */
// export function isSqliteDB(dbConnection?: IDBConnectionOptions): boolean {
// 	return isDatabaseType([DatabaseTypeEnum.sqlite, DatabaseTypeEnum.betterSqlite3], dbConnection);
// }

/**
 * Enum representing different ORM types.
 */
export enum MultiORMEnum {
	TypeORM = 'typeorm',
}

/**
 * Type representing the ORM types.
 */
export type MultiORM = 'typeorm' | 'mikro-orm';

/**
 * Get the Object-Relational Mapping (ORM) type from the environment variable `DB_ORM`.
 * @param {MultiORM} defaultValue - The default ORM type to use if `DB_ORM` is not set or an invalid value is provided.
 * @returns {MultiORM} - The determined ORM type.
 */
export function getORMType(defaultValue: MultiORM = MultiORMEnum.TypeORM): MultiORM {
	if (!process.env.DB_ORM) return defaultValue;
	
}

/**
 * Gets the database type based on the provided database connection options or default options.
 *
 * @param {IDBConnectionOptions} [dbConnection] - The optional database connection options.
 * @returns {DatabaseTypeEnum} - The detected database type.
 */
export function getDBType(dbConnection?: IDBConnectionOptions): any {
	if (!dbConnection) {
		dbConnection = getConfig().dbConnectionOptions;
	}
	return (dbConnection as TypeOrmModuleOptions).type;


}

/**
 * Checks whether the provided database type(s) match the database type of the given connection options.
 * If no connection options are provided, it uses the default options from the configuration.
 *
 * @param {DatabaseTypeEnum | DatabaseTypeEnum[]} types - The expected database type(s) to check against.
 * @param {IDBConnectionOptions} [dbConnection] - The optional database connection options.
 * @returns {boolean} - Returns true if the database type matches any of the provided types.
 */
export function isDatabaseType(types: DatabaseTypeEnum | DatabaseTypeEnum[], dbConnection?: IDBConnectionOptions): boolean {
	// If no connection options are provided, use the default options from the configuration
	if (!dbConnection) {
		dbConnection = getConfig().dbConnectionOptions;
	}

	// Get the database type from the connection options
	let dbType = getDBType(dbConnection);

	// Check if the provided types match the database type
	if (types instanceof Array) {
		return types.includes(dbType);
	} else {
		return types == dbType;
	}
}

/**
 * Recursively flattens nested objects into an array of dot-notated keys.
 * If the input is already an array, returns it as is.
 *
 * @param {any} input - The input object or array to be flattened.
 * @returns {string[]} - An array of dot-notated keys.
 */
export const flatten = (input: any): any => {
	if (Array.isArray(input)) {
		// If input is already an array, return it as is
		return input;
	}

	if (typeof input === 'object' && input !== null) {
		return Object.keys(input).reduce((acc, key) => {
			const value = input[key];
			if (value) {
				const nestedKeys = flatten(value);
				const newKey = Array.isArray(value) ? key : nestedKeys.length > 0 ? `${key}.${nestedKeys.join('.')}` : key;
				return acc.concat(newKey);
			}
		}, []) || [];
	}

	// If input is neither an array nor an object, return an empty array
	return [];
};






/**
 * Parses TypeORM 'order' option to MikroORM 'orderBy' option.
 * @param order TypeORM 'order' option
 * @returns Parsed MikroORM 'orderBy' option
 */
export function parseOrderOptions(order: FindOptionsOrder<any>) {
	return Object.entries(order).reduce((acc, [key, value]) => {
		acc[key] = `${value}`.toLowerCase();
		return acc;
	}, {});
}

/**
 * Transforms a FindOperator object into a query condition suitable for database operations.
 * It handles simple conditions such as 'equal', 'in' and 'between',
 * as well as complex conditions like recursive 'not' operators and range queries with 'between'.
 *
 * @param operator A FindOperator object containing the type of condition and its corresponding value.
 * @returns A query condition in the format of a Record<string, any> that represents the translated condition.
 *
 */
export function processFindOperator<T>(operator: FindOperator<T>) {
	switch (operator.type) {
		case 'isNull': {
			return null;
		}
		case 'not': {
			// If the nested value is also a FindOperator, process it recursively
			if (operator.child && operator.child instanceof FindOperator) {
				return { $ne: processFindOperator(operator.child) };
			} else {
				const nested = operator.value || null;
				return { $ne: nested };
			}
		}
		case 'in': {
			return { $in: operator.value };
		}
		case 'equal': {
			return { $eq: operator.value };
		}
		case 'between': {
			// Assuming the value for 'between' is an array with two elements
			return {
				$gte: operator.value[0],
				$lte: operator.value[1]
			};
		}
		case 'moreThanOrEqual': {
			return { $gte: operator.value }
		}
		// Add additional cases for other operator types if needed
		default: {
			// Handle unknown or unimplemented operator types
			console.warn(`Unsupported FindOperator type: ${operator.type}`);
			return {};
		}
	}
}
