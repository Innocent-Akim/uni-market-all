import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsInt, IsDate } from 'class-validator';

export class CompanyDTO {

    @IsNotEmpty({message:''})
    @IsString()
    name: string;

    @IsOptional()
    @IsBoolean()
    @Type(()=>Boolean)
    isDefault: boolean;

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    valueDate?: Date;

    @IsOptional()
    @IsString()
    status?: string;

    @IsNotEmpty()
    @IsString()
    overview: string;

    @IsNotEmpty()
    @IsInt()
    @Type(() => Number)
    totalEmployees: number;

    @IsOptional()
    @IsString()
    timeZone?: string;

    @IsOptional()
    @IsString()
    imageUrl?: string;
}
