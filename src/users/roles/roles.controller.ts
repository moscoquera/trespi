import { Controller, Get } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {

    constructor(private readonly service: RolesService){};

    @Get()
    async all(){
        return await this.service.findAll();
    }
}
