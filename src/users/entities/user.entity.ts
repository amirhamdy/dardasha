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
}
