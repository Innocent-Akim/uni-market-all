import { Module, OnModuleInit } from '@nestjs/common';

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
import { SheetDepositModule } from './modules/sheet.deposit/sheet.deposit.module';
import { SheetStoreModule } from './modules/sheet.store/sheet.store.module';
import { StoreStockModule } from './modules/store.stock/store.stock.module';
import { DepositStockModule } from './modules/deposit.stock/deposit.stock.module';
import { SubcategorieModule } from './modules/subcategorie/subcategorie.module';
import { ImagesModule } from './modules/images/images.module';
import { PaymentModule } from './modules/payment/payment.module';
import { InvoiceDetailsModule } from './modules/invoice.details/invoice.details.module';
import { InvoiceHeaderModule } from './modules/invoice.header/invoice.header.module';
import { SupplyModule } from './modules/supply/supply.module';
import { UserModule } from './modules/user/user.module';
import { SupplyDetailsModule } from './modules/supply.details/supply.details.module';
import {JwtModule, JwtService} from  '@nestjs/jwt'
import { ClsModule, ClsService } from 'nestjs-cls';
import { RequestContext } from './context';
/**
 *class module main for this application
 *
 * @export
 * @class AppModule
 */
@Module({
  imports: [
    ClsModule.forRoot({
			global: true,
			middleware: { mount: false }
		}),
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
    JwtModule.registerAsync({
      imports:[ConfigModule],
      useFactory:async(...args)=> ({
          secret:process.env.JWT_SECRET
      }),
      inject:[],
      global:true

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
    SheetDepositModule,
    SheetStoreModule,
    StoreStockModule,
    DepositStockModule,
    SubcategorieModule,
    ImagesModule,
    PaymentModule,
    InvoiceDetailsModule,
    InvoiceHeaderModule,
    SupplyModule,
    UserModule,
    SupplyDetailsModule
  ],
  // controllers: [],
  providers: [JwtService],
  exports: [TypeOrmModule]
})
export class AppModule implements OnModuleInit {
  constructor(private readonly clsService: ClsService) {}
  onModuleInit() {
	// Set the ClsService in RequestContext one time on app start before any request
  RequestContext.setClsService(this.clsService);
  console.log('AppModule initialized, ClsService set in RequestContext.');  }
}
