import { ICompany } from "@uni/contracts";
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CategoriesDto {
    @IsNotEmpty()
    @IsString()
    designation: string;

    @IsNotEmpty()
    @IsUUID()
    companyId: string; // Updated to `string` and used @IsUUID

    @IsOptional()
    @IsBoolean()
    isActive?: boolean = false; // Optional boolean with default value

    @IsOptional()
    @IsBoolean()
    isArchived?: boolean = false; // Optional boolean with default value
}
