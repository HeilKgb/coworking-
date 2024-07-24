import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UsersDocument } from "src/schemas/users.schema";

@Injectable()
export class UserService {

  constructor(
    @InjectModel("user")
    private userModel: Model<UsersDocument>
  ) { }


  async createUser(newUser: User) {
    const user = new this.userModel(newUser)
    return await user.save()
  }
}