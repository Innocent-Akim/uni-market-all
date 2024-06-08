import { IBaseEntityModel } from ".";
/**
 *
 *
 * @export
 * @interface ISession
 * @extends {IBaseEntityModel}
 */
export interface ISession extends IBaseEntityModel {
    expires: string;
    sessionToken: string;
}