import { CustomRepository } from "src/typeorm/typeorm.decorator";
import { Info } from "./info.entity";
import { Repository } from "typeorm";
import { InfoDto } from "./dto/info.dto";
import { User } from "src/auth/auth.entity";

@CustomRepository(Info)
export class InfoRepository extends Repository<Info>{
    async createInfo(infoDto:InfoDto,user:User):Promise<Info>{
        const {step,todayPoint,totalPoint} = infoDto
        const info = await this.create({
            step,
            todayPoint,
            totalPoint,
            user:user
        })

        await this.save(info)
        return info;
    }

}