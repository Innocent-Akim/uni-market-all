import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './databases';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { DatabaseModule } from './databases/database.module';
import { CompanyModule } from './modules/company/company.module';

@Module({
  imports: [
    DatabaseModule,
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
    CompanyModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports:[TypeOrmModule]
})
export class AppModule {}
