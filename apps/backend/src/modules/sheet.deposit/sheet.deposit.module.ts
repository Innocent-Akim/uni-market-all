import { Module } from '@nestjs/common';
import { SheetDepositService } from './service/sheet.deposit.service';
import { SheetDepositController } from './controller/sheet.deposit.controller';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SheetDepositEntity } from './entities/sheet.deposit.entity';
import { AppHelpers } from '@uni/helpers/app.helpers';

@Module({
  imports: [RouterModule.register([{ path: '/sheet-deposit', module: SheetDepositModule }]),
  TypeOrmModule.forFeature([SheetDepositEntity])
  ],

  providers: [SheetDepositService, AppHelpers],
  controllers: [SheetDepositController]
})
export class SheetDepositModule { }
