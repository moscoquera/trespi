import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { ReportQueryDto } from './reportQuery.dto';
import { ReportsService } from './reports.service';
import moment from 'moment'
import { Roles } from 'src/common/decorator/roles.decorator';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {
  }

  @Get()
  @Roles('ADMIN','EMPLOYEE')
  async reports(@Query( new ValidationPipe({
    transform: true,
    transformOptions: {enableImplicitConversion: true},
    forbidNonWhitelisted: true
  })) query: ReportQueryDto) {
    let from = query.from;
    let to = query.to;

    if(!from || !to){
      from = query.day;
      to = undefined;
    }

    if (!from){
       from = moment().format('YYYY-MM-DD');
    }

    from = moment(from).format('YYYY-MM-DD');
    if(!to){
      to = from;
    }
    to = moment(to).add(1,'day').format('YYYY-MM-DD');
    return await this.reportsService.salesInRange(from,to);
  }
}
