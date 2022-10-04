import { IsBoolean, IsDateString, IsOptional } from "class-validator";

export class ReportQueryDto {
    @IsOptional()
    @IsDateString()
    public from?: string;

    @IsOptional()
    @IsDateString()
    public to?: string;

    @IsOptional()
    @IsDateString()
    public day?: string;
}