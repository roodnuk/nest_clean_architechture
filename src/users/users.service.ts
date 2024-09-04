import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/user.schema";
import { Model } from "mongoose";

// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}
  // private readonly users = [
  //   {
  //     userId: 1,
  //     username: "john",
  //     password: "changeme",
  //   },
  //   {
  //     userId: 2,
  //     username: "maria",
  //     password: "guess",
  //   },
  // ];

  async register(registerUserDto: CreateUserDto): Promise<User> {
    const createdCat = await this.userModel.create(registerUserDto);
    return createdCat;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username });
  }

  async findAll(): Promise<User[] | undefined> {
    return this.userModel.find();
  }
}
