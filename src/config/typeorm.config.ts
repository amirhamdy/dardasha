import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "fdb16.runhosting.com",
  port: 3306,
  username: "2459372_db",
  password: "395iudus4yJ0gi7N",
  database: "2459372_db",
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
