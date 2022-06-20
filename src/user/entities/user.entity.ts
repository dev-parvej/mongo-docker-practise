import { Prop, Schema } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop([String])
  name: string;

  @Prop([String])
  email: string;

  @Prop([String])
  password: string;
}
