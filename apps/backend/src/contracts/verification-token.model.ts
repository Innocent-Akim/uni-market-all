import { IBaseEntityModel } from ".";

export interface IVerificationToken extends IBaseEntityModel {
    identifier: string;
    token: string;
    expires: Date | string
}