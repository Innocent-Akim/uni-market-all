import { Type } from '@nestjs/common';
import { EntityOptions as TypeEntityOptions } from 'typeorm';


/**
 * Options for TypeORM entities.
 */
export type TypeOrmEntityOptions = TypeEntityOptions & {
    /**
     * Optional function returning the repository constructor.
     */
    typeOrmRepository?: () => Type;
};
