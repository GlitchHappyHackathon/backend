import { Controller, Get, Post, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { PositionService } from './position.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('position')
@UseGuards(AuthGuard('jwt'))
export class PositionController {
    constructor(private positionService:PositionService){}
    @Post('/upload')
    @UseInterceptors(FilesInterceptor('images'))
    uploadFile(@UploadedFiles() file: Express.Multer.File) {
        return file
    }

    @Get('/')
    getPosition(){
        return this.positionService.getPosition()
    }

}
