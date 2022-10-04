import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { ReportsModule } from './reports/reports.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './common/guards/roles.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host:process.env.DB_HOST,
      port: process.env.DB_PORT? parseInt(process.env.DB_PORT): 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true

    }),
    SalesModule, UsersModule, ProductsModule, ReportsModule],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: RolesGuard,
  },],
})
export class AppModule {}
