import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserService } from "src/services/user.service";
import { User } from "src/schemas/users.schema";
import { Controller as Ctr } from "@nestjs/common/interfaces"
@Controller("user")
@ApiTags("Users")

export class UserController implements Ctr {
  constructor(
    private readonly userService: UserService
  ) { }

  @Post()
  @ApiOperation({
    summary: "Criação de um novo usuario"
  })
  @ApiResponse({ status: 201, type: "success" })
  async createUser(@Body() newUser: User): Promise<User> {
    return await this.userService.createUser(newUser);
  }

}