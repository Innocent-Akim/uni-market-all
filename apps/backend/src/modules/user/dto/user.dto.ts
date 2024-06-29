import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserDto{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    email:string;

    @IsNotEmpty()
    @IsString()
    password:string;

    @IsOptional()
    @IsString()
    refreshToken:string;

    @IsOptional()
    @IsString()
    emailVerified:Date;
    
    @IsOptional()
    @IsString()
    image:string;

    @IsOptional()
    @IsDate()
    lastLogin?:Date
}