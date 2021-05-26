import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get()
  @ApiOperation({ summary: "Get all users" })
  getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a user by ID" })
  getUser(@Param("id", ParseIntPipe) id: number): Promise<User> {
    return this.usersService.getUser(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: "Create new user" })
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Put(":id")
  @ApiOperation({ summary: "Update a user" })
  updateUser(@Param("id", ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a user" })
  deleteUser(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.usersService.deleteUser(id);
  }
}
