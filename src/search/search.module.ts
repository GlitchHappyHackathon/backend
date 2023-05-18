import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { TypeOrmCustomModule } from 'src/typeorm/typeorm.module';
import { SearchRepository } from './search.repository';

@Module({
  imports:[
    TypeOrmCustomModule.forCustomRepository([SearchRepository]),
    SearchModule
  ],
  controllers: [SearchController],
  providers: [SearchService]
})
export class SearchModule {}
