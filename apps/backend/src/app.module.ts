import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './databases';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { DatabaseModule } from './databases/database.module';
import { CompanyModule } from './modules/company/company.module';
import { CarModule } from './modules/car/car.module';
import { CustomModule } from './modules/custom/custom.module';
import { SuccursaleModule } from './modules/succursale/succursale.module';
import { DepositModule } from './modules/deposit/deposit.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';
import { OperationModule } from './modules/operation/operation.module';
import { SupplierModule } from './modules/supplier/supplier.module';
import { StoreModule } from './modules/store/store.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [config],
        }),
      ],
      inject: [DatabaseService],
      useFactory: async (databaseService: DatabaseService) => {
        const { dbConnectionOptions } = databaseService
        return dbConnectionOptions;
      }
    }),
    DatabaseModule,
    CompanyModule,
    CarModule,
    SupplierModule,
    SuccursaleModule,
    DepositModule,
    CategoriesModule,
    ProductsModule,
    OperationModule,
    CustomModule,
    StoreModule,
  ],
  // controllers: [],
  // providers: [],
  exports: [TypeOrmModule]
})
export class AppModule { }
