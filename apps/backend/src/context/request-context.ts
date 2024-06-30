import { HttpException, HttpStatus } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { v4 as uuidv4 } from 'uuid';
import { JsonWebTokenError, verify } from 'jsonwebtoken';
import { IUser } from '@uni/contracts';
import { Request, Response, NextFunction } from 'express';


export class RequestContext {

	private static logging: boolean = true;
	protected readonly _id: string;
	protected readonly _res: Response;
	private readonly _req: Request;
	protected static clsService: ClsService;
	/**
	 * Creates an instance of RequestContext.
	 * @param options - An object containing optional parameters for initializing the instance.
	 * @param options.id - Optional Request ID. If not provided, a random ID (UUID) is generated.
	 * @param options.req - Optional Request object.
	 * @param options.res - Optional Response object.
	 * @param options.languageCode - Optional language code (enum) for the instance.
	 * @param options.isAuthorized - Optional flag indicating whether the user is authorized.
	 */
	constructor(options: {
		id?: string;
		req?: Request;
		res?: Response;
		isAuthorized?: boolean;
	}) {
		// Destructure options to extract individual properties.
		const { req, res, id } = options;
		// Assign values to instance properties.
		this._id = id || uuidv4().toString(); // If 'id' is not provided, generate a random ID.
		this._req = req;
		this._res = res;
		if (RequestContext.logging) console.log('RequestContext: setting context with Id:', this._id);
	}

	/**
	 * Gets the id.
	 *
	 * @returns The id.
	 */
	get id(): string {
		return this._id;
	}


	/**
	 * Gets the current request context.
	 *
	 * @returns The current RequestContext instance.
	 */
	static currentRequestContext(): RequestContext {
		if (RequestContext?.logging) console.log('RequestContext: getting context ...');
		const context = RequestContext?.clsService?.get(RequestContext.name);
		if (RequestContext?.logging) console.log('RequestContext: got context with Id:', context?._id);
		return context;
	}


	/**
	 * Sets the ClsService instance to be used by RequestContext.
	 *
	 * @param service - The ClsService instance to set.
	 */
	static setClsService(service: ClsService) {
		RequestContext.clsService = service;
	}

	/**
	 * Gets the current request.
	 *
	 * @returns The current Request object or null if no context is available.
	 */
	static currentRequest(): any {
		return RequestContext.currentRequestContext()?._req || null;
	}



	/**
	 * Retrieves the current user from the request context.
	 * @param {boolean} throwError - Flag indicating whether to throw an error if user is not found.
	 * @returns {IUser | null} - The current user if found, otherwise null.
	 */
	static currentUser(throwError?: boolean): IUser | null {
		const requestContext = RequestContext.currentRequestContext();
		if (requestContext) {
			const user: IUser = requestContext._req['users'];
			if (user) {
				return user;
			}
		}
		if (throwError) {
			throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
		}
		return null;
	}

	/**
 * Retrieves the current user ID associated with the user in the RequestContext.
 * Returns the user ID if available, otherwise returns null.
 *
 * @returns {string | null} - The current user ID or null if not available.
 */
	static currentUserId(): string | null {
		try {
			const user: IUser | null = RequestContext.currentUser();
			return user ? user.id : null;
		} catch (error) {
			return null;
		}
	}
}