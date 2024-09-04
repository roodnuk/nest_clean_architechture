import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { Public } from "src/auth/decorators/public.decorator";
import { CreateUserDto } from "./dto/user.dto";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Public()
  @Post("/register")
  registerUsers(@Body() registerUserDto: CreateUserDto) {
    return this.userService.register(registerUserDto);
  }

  @Public()
  @Get("/")
  getUsers(@Request() req) {
    return this.userService.findAll();
  }
}
