import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 
import { Rol } from '../entity/rol.entity';

export type UserDocument = User & Document; 

@Schema() 
export class User {
  @Prop({ minlength: 2 }) 
  name: string;

  @Prop({ unique: true, minlength: 2, required: true })
  username: string;

  @Prop({minlength: 8, required: true})
  password: string;

  @Prop({ default: Rol.READ })
  rol: Rol;

}

export const UserSchema = SchemaFactory.createForClass(User); 