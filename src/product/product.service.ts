import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly product: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = new this.product(createProductDto);
    console.log(product);

    return await product.save();
  }

  async findAll() {
    return await this.product.find({});
  }

  async findOne(id: ObjectId) {
    console.log(id);
    return await this.product.findById(id);
  }

  async update(id: ObjectId, updateProductDto: UpdateProductDto) {
    return await this.product.findByIdAndUpdate(id, updateProductDto);
  }

  async remove(id: ObjectId) {
    return await this.product.findByIdAndDelete(id);
  }
}
