import { omit } from "underscore";
import { TypeOrmManyToOne } from "./type-orm";
import {  TypeORMInverseSide, TypeORMRelationOptions, TypeORMTarget, TypeOrmCascadeOption } from "./shared-types";
import { ObjectUtils } from "@uni/utils/object-utils";

/**
 * Options for mapping ManyToOne relationship arguments for MikroORM.
 *
 * @template T - The type of the target entity.
 * @template O - The type of additional options.
 */
export interface MapManyToOneArgsForMikroORMOptions<T, O> {
    // The target entity class or function returning the target entity class.
    typeFunctionOrTarget: TargetEntity<T>;
    // The inverse side of the relationship or additional options if provided.
    inverseSideOrOptions?: InverseSide<T>;
    // The options for the ManyToOne relationship.
    options?: RelationOptions<T, O>;
    // The property key of the target entity.
    propertyKey?: string;
    // The target string (optional).
    target?: string;
}


type TargetEntity<T> = TypeORMTarget<T>;
type InverseSide<T> = TypeORMInverseSide<T>;
type RelationOptions<T, O> =  TypeORMRelationOptions & {
    cascade?:TypeOrmCascadeOption;
};

/**
 * Decorator for defining Many-to-One relationships in both TypeORM and MikroORM.
 *
 * @param typeFunctionOrTarget - Type or target function for the related entity.
 * @param inverseSideOrOptions - Inverse side of the relationship or additional options.
 * @param options - Additional options for the Many-to-One relationship.
 * @returns PropertyDecorator
 */
export function MultiORMManyToOne<T, O>(
    typeFunctionOrTarget: TargetEntity<T>,
    inverseSideOrOptions?: InverseSide<T> | RelationOptions<T, O>,
    options?: RelationOptions<T, O>
): PropertyDecorator {
    // Normalize parameters.
    let inverseSideProperty: InverseSide<T>;

    if (ObjectUtils.isObject(inverseSideOrOptions)) {
        options = <RelationOptions<T, O>>inverseSideOrOptions;
    } else {
        inverseSideProperty = inverseSideOrOptions as any;
    }

    return (target: any, propertyKey: string) => {
        // If options are not provided, initialize an empty object
        if (!options) options = {} as RelationOptions<T, O>;

        // Use TypeORM decorator for Many-to-One
        TypeOrmManyToOne(typeFunctionOrTarget as TypeORMTarget<T>, inverseSideOrOptions as TypeORMInverseSide<T>, options as TypeORMRelationOptions)(target, propertyKey);
    };
}

