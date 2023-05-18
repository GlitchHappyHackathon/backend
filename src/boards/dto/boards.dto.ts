import { IsNotEmpty } from "class-validator";

export class CreateBoardDto {
    @IsNotEmpty()
    title:string;
    @IsNotEmpty()
    description:string;
}

export enum BoardStatus {
    PUBLIC = "public",
    PRIVATE = "private"
}
