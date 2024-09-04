import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { MongooseModule } from "@nestjs/mongoose";
import env from "./config";

@Module({
  imports: [MongooseModule.forRoot(env.databaseURL), AuthModule, UsersModule],
})
export class AppModule {}
