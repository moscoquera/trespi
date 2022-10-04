import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Roles } from './entities/roles.entity';
import { RolesController } from './roles/roles.controller';
import { RolesService } from './roles/roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Roles])],
  controllers: [UsersController, RolesController],
  providers: [UsersService, RolesService],
  exports:[UsersService]
})
export class UsersModule {}
