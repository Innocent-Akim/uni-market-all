import { IBaseEntityModel } from ".";
/**
 *
 *
 * @export
 * @interface IAccount
 * @extends {IBaseEntityModel}
 */
export interface IAccount extends IBaseEntityModel {
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token: string;
    access_token: string;
    expires_at: number;
    token_type: string;
    scope: string;
    id_token: string;
    session_state: string;
}