import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductSchema } from './schemas/product.schema';
import { ProductService } from './product.service';
import { FirebaseStorageProvider } from '../../providers/firebase-storage.provider';
import { HistoryModule } from '../history/history.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'PRODUCTS', schema: ProductSchema }]),
    HistoryModule,
  ],
  controllers: [ProductController],
  providers: [ProductService, FirebaseStorageProvider],
  exports: [ProductService],
})
export class ProductModule {}
