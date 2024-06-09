import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { OperationEntity } from '../entities/operation.entity';
import { OperationService } from '../service/operation.service';

@Controller()
export class OperationController extends CrudController<OperationEntity> {
    constructor(private operationService:OperationService){super(operationService)}
}
