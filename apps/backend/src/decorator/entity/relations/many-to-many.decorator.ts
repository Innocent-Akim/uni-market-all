import { RelationOptions as TypeOrmRelationOptions } from 'typeorm';
import { omit } from "underscore";
import { TypeOrmManyToMany } from "./type-orm";
import { TypeORMInverseSide, TypeORMRelationOptions, TypeORMTarget } from "./shared-types";
import { ObjectUtils } from '@uni/utils/object-utils';

/**
 * Interface for options used in mapping Many-to-Many relationships in MikroORM.
 *
 */
export interface MapManyToManyArgsForMikroORMOptions<T, O> {
    // Type or target function for the related entity.
    typeFunctionOrTarget: TargetEntity<T>;
    // Inverse side of the relationship.
    inverseSide?: InverseSide<T>;
    // Additional options for the Many-to-Many relationship.
    options?: RelationOptions<T>;
}


type TargetEntity<T> = TypeORMTarget<T>;
type InverseSide<T> = TypeORMInverseSide<T>;
type RelationOptions<T> = TypeORMRelationOptions & {
    cascade?: (boolean | ("update" | "insert" | "remove" | "soft-remove" | "recover")[]);
};

/**
 * Decorator for defining Many-to-Many relationships in both TypeORM and MikroORM.
 *
 * @param typeFunctionOrTarget - Type or target function for the related entity.
 * @param inverseSide - Inverse side of the relationship or additional options.
 * @param options - Additional options for the Many-to-Many relationship.
 * @returns PropertyDecorator
 */
export function MultiORMManyToMany<T>(
    typeFunctionOrTarget: TargetEntity<T>,
    inverseSide?: InverseSide<T> | RelationOptions<T>,
    options?: RelationOptions<T>
): PropertyDecorator {
    // Normalize parameters.
    let inverseSideProperty: InverseSide<T>;

    if (ObjectUtils.isObject(inverseSide)) {
        options = <RelationOptions<T>>inverseSide;
    } else {
        inverseSideProperty = inverseSide as any;
    }

    return (target: any, propertyKey: string) => {
        // If options are not provided, initialize an empty object
        if (!options) options = {} as RelationOptions<T>;

        // Use TypeORM decorator for Many-to-Many
        TypeOrmManyToMany(typeFunctionOrTarget as TypeORMTarget<T>, inverseSideProperty as TypeORMInverseSide<T>, options as TypeORMRelationOptions)(target, propertyKey);
    }
}
