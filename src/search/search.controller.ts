import { Body, Controller, Get, Logger, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/auth.entity';
import { SearchService } from './search.service';
import { Search } from './search.entity';
import { SearchDto } from './dto/search.dto';




@Controller('search')
@UseGuards(AuthGuard('jwt'))
export class SearchController {
    constructor(private searchService:SearchService){}
    private logger = new Logger('SearchController')


    @Post('/create')
    createInfo(@Body() searchDto:SearchDto,@GetUser() user:User):Promise<Search>{
        return this.searchService.createSearch(searchDto,user)
    }

    @Get('/get')
    getInfo(@GetUser() user:User):Promise<{searchList:string[]}> {
        return this.searchService.getSearchList(user)
    }

    @Patch('/update')
    updateInfo(@Body() searchDto:SearchDto, @GetUser() user:User):Promise<Search>{
        return this.searchService.updateSearchList(searchDto,user)
    }



}
