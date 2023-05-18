import { Module } from '@nestjs/common';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';
import { TypeOrmCustomModule } from 'src/typeorm/typeorm.module';
import { InfoRepository } from './info.repository';

@Module({
  imports:[
    TypeOrmCustomModule.forCustomRepository([InfoRepository]),
    InfoModule
  ],
  controllers: [InfoController],
  providers: [InfoService]
})
export class InfoModule {}
