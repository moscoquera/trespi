import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class ReportsService {
    constructor(private dataSource: DataSource ){}

    async salesInRange(from: string, to: string){
        const result = await this.dataSource.createQueryRunner().query(`select sum(products_sales.price*products_sales.qty) as total_sales
        from sales inner join products_sales on sales.id = products_sales.sales_id 
        where sales.created_at>$1 and sales.created_at<$2`,[from,to]);
        return {
            totalSales:result[0].total_sales || 0
        }
    }

}
