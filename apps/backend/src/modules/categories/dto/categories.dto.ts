import { Type } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CategoriesDto {
    @IsNotEmpty()
    @IsString()
    designation: string;

    @IsOptional()
    @IsBoolean()
    @Type(()=>Boolean)
    isActive?: boolean; // Optional boolean with default value

    @IsOptional()
    @IsBoolean()
    @Type(()=>Boolean)
    isArchived?: boolean; // Optional boolean with default value
}
