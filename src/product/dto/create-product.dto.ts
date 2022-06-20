import { IsDefined, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsDefined()
  name: string;

  @IsString()
  @IsDefined()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  image_url: string;
}
