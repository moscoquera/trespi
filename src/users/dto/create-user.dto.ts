import { IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";

export class CreateUserDto {

    
    @IsString()
    @MaxLength(20)
    @IsNotEmpty()
    document: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    name: string;

    @IsString()
    @MaxLength(30)
    @IsOptional()
    last_name?: string;

    @IsString()
    @IsNotEmpty()
    @IsUUID()
    roleId: string;

}
