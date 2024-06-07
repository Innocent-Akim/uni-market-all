import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './databases';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { DatabaseModule } from './databases/database.module';
import { CompanyModule } from './modules/company/company.module';
import { CarModule } from './modules/car/car.module';

@Module({
  imports: [
    DatabaseModule,
    CompanyModule,
    CarModule,
    TypeOrmModule.forRootAsync({
      imports:[
        ConfigModule.forRoot({
          isGlobal: true,
          load: [config],
        }),
      ],
      inject: [DatabaseService],
      useFactory:async(databaseService:DatabaseService)=>{
        const{dbConnectionOptions}=databaseService
        return dbConnectionOptions;
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports:[TypeOrmModule]
})
export class AppModule {}
