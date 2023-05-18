import { CustomRepository } from "src/typeorm/typeorm.decorator";
import { Repository } from "typeorm";
import { User } from "src/auth/auth.entity";
import { Search } from "./search.entity";
import { SearchDto } from "./dto/search.dto";

@CustomRepository(Search)
export class SearchRepository extends Repository<Search>{
    async createSearch(searchDto:SearchDto,user:User):Promise<Search>{
        const {search} = searchDto
        const found = await this.create({
            searchList:search,
            user:user
        })

        await this.save(found)
        return found;
    }

}