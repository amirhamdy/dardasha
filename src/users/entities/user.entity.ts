import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: "The id of the user" })
  id: number;

  @Column()
  @ApiProperty({ example: "Amir Hamdy", description: "The full-name of the user" })
  name: string;

  @Column()
  @ApiProperty({ example: "amirhamdy4@gmail.com", description: "The email of the user" })
  email: string;

  @Column()
  @ApiProperty({ example: "123456789", description: "The password of the user" })
  password: string;

  @Column()
  token: string;
}
