import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsPositive, IsString, IsUUID, ValidateNested } from "class-validator";


export class CreateSaleProductDto {

    @IsString()
    @IsNotEmpty()
    @IsUUID()
    productId: string;

    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    qty: number;
}

export class CreateSaleDto {

    @IsArray()
    @ValidateNested({each:true})
    @ArrayNotEmpty()
    @Type(()=>CreateSaleProductDto)
    products: CreateSaleProductDto[];

}
