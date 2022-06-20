import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop(String)
  name: string;

  @Prop(String)
  description: string;

  @Prop(Number)
  price: number;

  @Prop(String)
  image_url: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
