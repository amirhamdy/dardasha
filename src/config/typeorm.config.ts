import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "us-cdbr-east-03.cleardb.com",
  port: 3306,
  username: "b4aa9ded61dac6",
  password: "fa692e49",
  database: "heroku_4b3bac0cdeb4318",
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
