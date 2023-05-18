import { Injectable } from '@nestjs/common';
import { PositionRepository } from './position.repository';
import { Position } from './position.entity';


@Injectable()
export class PositionService {
    constructor(
        private positionRepository:PositionRepository
    ){}

    async getPosition():Promise<Position[]>{
        const found = await this.positionRepository.find()
        return found;
    }

}

// 위도 : 37.54978786644171 , 경도 :  126.6194953986106 

// 위도는 37.54598186452547 경도는 126.61831526588372
//  위도는 37.550936245446586 경도는 126.61245064300297
