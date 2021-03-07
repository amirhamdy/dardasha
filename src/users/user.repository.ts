import { User } from "./entities/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async getAllUsers(): Promise<User[]> {
    return await this.find();
  }

  async getUser(id: number): Promise<User> {
    return this.findOneOrFail(id);
  };

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.save(createUserDto);
  };

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    return this.save({ ...updateUserDto, id: Number(id) });
  };

  async deleteUser(id: number) {
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}
