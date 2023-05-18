import { CustomRepository } from "src/typeorm/typeorm.decorator";
import { Repository } from "typeorm";
import { Position } from "./position.entity";

@CustomRepository(Position)
export class PositionRepository extends Repository<Position>{

}