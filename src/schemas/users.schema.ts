import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { ObjectId, Document } from "mongoose";

export type UsersDocument = User & Document

@Schema()
export class User {
  id?: ObjectId;

  @Prop({ required: true, type: 'string' })
  @ApiProperty({ type: String, description: "Nome do usuario", example: "João" })
  name: string;

  @Prop({ required: true, type: 'string' })
  @ApiProperty({ type: String, description: "Sobrenome do usuario", example: "Silva" })
  lastName: string;

  @Prop({ required: true, type: 'string', unique: true })
  @ApiProperty({ type: String, description: "Email do usuario", format: "email", example: "joaosilva@gmail.com" })
  email: string;

  @Prop({ required: true, type: 'string' })
  @ApiProperty({ type: String, description: "Senha do usuario", minLength: 6, example: "senha123" })
  password: string;

  @Prop({ required: true, type: 'string' })
  @ApiProperty({ type: String, description: "Número do documento de identidade", minLength: 11, example: "123.456.789-01" })
  document: string;

  @Prop({ required: true, type: 'string' })
  @ApiProperty({ type: String, description: "Telefone do usuario", example: "(11) 9999-9999" })
  phone: string;

  @Prop({ required: false, type: 'string' })
  @ApiProperty({ type: String, description: "Endereço do usuario", example: "Rua dos X, 123" })
  address: string;

  @Prop({ required: false, type: 'string' })
  @ApiProperty({ type: String, description: "Data de nascimento do usuario", example: "1990-01-01" })
  birthDate: string;

  @Prop({ required: true, type: 'string' })
  @ApiProperty({ type: String, description: "Tipo de usuario (Admin, User)", example: "User" })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
