import { Injectable, NotFoundException } from '@nestjs/common';
import { SearchRepository } from './search.repository';
import { User } from 'src/auth/auth.entity';
import {  SearchDto } from './dto/search.dto';
import { Search } from './search.entity';

@Injectable()
export class SearchService {

    constructor(
        private searchRepository:SearchRepository
    ){}


     async createSearch(searchDto:SearchDto,user:User):Promise<Search>{
        return this.searchRepository.createSearch(searchDto,user)
    
    }

    async getSearchList(user:User):Promise<{searchList:string[]}>{
        const found = await this.searchRepository.createQueryBuilder('search')
        .where('search.userEmail = :userEmail', {userEmail:user.email})
        .getOne()
        
        const searchList =  found.searchList.split(',')
        
        return {searchList};
    }

    async updateSearchList(searchDto:SearchDto,user:User):Promise<Search>{

        const {search} = searchDto
        const found = await this.searchRepository.createQueryBuilder('search')
        .where('search.userEmail = :userEmail', {userEmail:user.email})
        .getOne()
        found.searchList = found.searchList + ',' + search

        await this.searchRepository.save(found)

        return found

    }
}
