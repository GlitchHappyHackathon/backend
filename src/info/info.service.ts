import { Injectable, NotFoundException } from '@nestjs/common';
import { InfoRepository } from './info.repository';
import { User } from 'src/auth/auth.entity';
import { Info } from './info.entity';
import { InfoDto } from './dto/info.dto';

@Injectable()
export class InfoService {
    constructor(
        private infoRepository:InfoRepository
    ){}


     async createInfo(infoDto:InfoDto,user:User):Promise<Info>{
        return this.infoRepository.createInfo(infoDto,user)
    
    }

    async getInfo(user:User):Promise<Info>{
        const found = await this.infoRepository.createQueryBuilder('info')
        .where('info.userEmail = :userEmail', {userEmail:user.email})
        .getOne()

        if(!found){
            throw new NotFoundException('can not find info')
        }

        return found;
    }

    async updateInfo(user:User, step:number):Promise<Info>{
        const info = await this.getInfo(user)
        const preStep = step - info.step

        info.totalPoint = info.totalPoint+preStep;
        info.step = step;
        info.todayPoint = step;
        
        await this.infoRepository.save(info)

        return info

    }
}
