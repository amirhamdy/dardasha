import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "fdb16.runhosting.com",
  port: 3306,
  username: "root",
  password: "Global@123",
  database: "dardasha",
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true
};

export const typeOrmConfigLocal: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "dardasha",
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true
};
