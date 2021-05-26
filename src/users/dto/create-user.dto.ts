import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: "Amir Hamdy", description: "The full-name of the user" })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: "amirhamdy4@gmail.com", description: "The email of the user" })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: "123456789", description: "The password of the user" })
  password: string;

  @IsString()
  @ApiProperty({ description: "The device token of the user" })
  token: string;
}
