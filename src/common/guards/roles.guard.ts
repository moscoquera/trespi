import { Injectable, CanActivate, ExecutionContext, Inject, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, @Inject(UsersService) private readonly userService:UsersService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    let user = request.headers['auth'];
    if(!user){
        throw new UnauthorizedException();
    }
    user = await this.userService.findOne(user);
    
    if(!user){
        throw new UnauthorizedException();
    }
    return roles.includes(user.role.name);
  }
}