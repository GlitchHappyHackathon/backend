import { Body, Controller, Get, Logger, Patch, Post, UseGuards } from '@nestjs/common';
import { InfoService } from './info.service';
import { Info } from './info.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/auth.entity';
import { InfoDto } from './dto/info.dto';


@Controller('info')
@UseGuards(AuthGuard('jwt'))
export class InfoController {
    constructor(private infoService:InfoService){}
    private logger = new Logger('InfoController')


    @Post('/create')
    createInfo(@Body() infoDto:InfoDto,@GetUser() user:User):Promise<Info>{
        return this.infoService.createInfo(infoDto,user)
    }

    @Get('/get')
    getInfo(@GetUser() user:User):Promise<Info> {
        return this.infoService.getInfo(user)
    }

    @Patch('/update')
    updateInfo(@GetUser() user:User, @Body('step') step:number):Promise<Info>{
        return this.infoService.updateInfo(user,step)
    }



}
