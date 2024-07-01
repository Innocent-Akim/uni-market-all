import { ICompany, IDeposit, IStore, ISuccursal } from "@uni/contracts";
import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class UserDto{
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsOptional()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsPhoneNumber()
    phone?: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    @IsString()
    emailVerified: Date;

    @IsOptional()
    @IsString()
    image: string;

    @IsOptional()
    @IsString()
    refreshToken: string;

    @IsOptional()
    @IsString()
    refreshTokenExpiration?: Date;

    @IsOptional()
    @IsString()
    Lastaccess?: string;

    @IsOptional()
    @IsString()
    lastLogin?: Date;

    @IsOptional()
    @IsString()
    company?: ICompany;

    @IsOptional()
    @IsString()
    succursale?: ISuccursal;

    @IsOptional()
    @IsString()
    deposit?: IDeposit;
    
    @IsOptional()
    @IsString()
    store?: IStore;
}