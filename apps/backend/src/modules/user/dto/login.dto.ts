import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class LoginDto{
    @IsNotEmpty()
    @IsString()
    email:string;

    @IsNotEmpty()
    @IsString()
    password:string;
}