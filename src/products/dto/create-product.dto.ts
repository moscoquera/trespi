import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength } from "class-validator";

export class CreateProductDto {

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    name:string;

    @IsString()
    @MaxLength(30)
    @IsOptional()
    description?:string;

    @IsNumber()
    @IsPositive()
    price:number;

}
