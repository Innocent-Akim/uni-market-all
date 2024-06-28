import { HttpException, HttpStatus } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { v4 as uuidv4 } from 'uuid';
import { JsonWebTokenError, verify } from 'jsonwebtoken';

export class RequestContext{

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
	 * Checks if the current request context has the specified permissions.
	 *
	 * @param permissions - An array of permissions to check.
	 * @param throwError - Whether to throw an error if permissions are not found.
	 * @returns True if the required permissions are found, otherwise false.
	 */
	// static hasPermissions(permissions: PermissionsEnum[], throwError?: boolean): boolean {
	// 	const requestContext = RequestContext.currentRequestContext();
	// 	if (requestContext) {
	// 		try {
	// 			// tslint:disable-next-line
	// 			const token = this.currentToken();
	// 			if (token) {
	// 				const jwtPayload = verify(token,'token') as {
	// 					id: string;
	// 					permissions: PermissionsEnum[];
	// 				};
	// 				return permissions.every((permission: PermissionsEnum) =>
	// 					(jwtPayload.permissions ?? []).includes(permission)
	// 				);
	// 			}
	// 		} catch (error) {
	// 			// Do nothing here, we throw below anyway if needed
	// 			console.log(error);
	// 		}
	// 	}
	// 	if (throwError) {
	// 		throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
	// 	}
	// 	return false;
	// }

}