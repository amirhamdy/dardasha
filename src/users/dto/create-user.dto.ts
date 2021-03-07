import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: "Amir Hamdy", description: "The full-name of the user" })
  name: string;
}
