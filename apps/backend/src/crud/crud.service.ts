import { BadRequestException, NotFoundException } from '@nestjs/common';
import {
    DeepPartial,
    DeleteResult,
    FindManyOptions,
    FindOneOptions,
    FindOptionsWhere,
    Repository,
    SaveOptions,
    UpdateResult
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import {
    ICountByOptions,
    ICountOptions,
    ICrudService,
    IFindManyOptions,
    IFindOneOptions,
    IFindWhereOptions,
    IPartialEntity,
    IUpdateCriteria
} from './icrud.service';
import { ITryRequest } from './try-request';
import { IQueryBuilder } from '@uni/orm/iquery-builder';
import { multiORMCreateQueryBuilder } from '@uni/orm/query-builder.factory';
import { parseTypeORMFindCountOptions } from '.';
import { IPagination } from '@uni/contracts';
import { IBaseEntity } from '@uni/entities';


export abstract class CrudService<T extends IBaseEntity> implements ICrudService<T> {
    
    constructor(protected typeOrmRepository: Repository<T>) {}

    /**
     * Get the table name from the repository metadata.
     * @returns {string} The table name.
     */
    public get tableName(): string {
        return this.typeOrmRepository.metadata.tableName;
    }
    /**
     * Creates an ORM-specific query builder for the repository, supporting MikroORM and TypeORM.
     *
     * @param alias - Optional alias for the primary table in the query.
     * @returns An `IQueryBuilder<T>` instance suitable for the repository's ORM type.
     * @throws Error if the ORM type is not implemented.
     */
    public createQueryBuilder(alias?: string): IQueryBuilder<any> {
        return multiORMCreateQueryBuilder<any>(this.typeOrmRepository, alias);
    }



    /**
     * Count the number of entities based on the provided options.
     *
     * @param options - Options for counting entities.
     * @returns A Promise that resolves to the count of entities.
     */
    public async count(options?: ICountOptions<T>): Promise<number> {
        const typeormOptions = parseTypeORMFindCountOptions<T>(options as FindManyOptions);
        return await this.typeOrmRepository.count(typeormOptions as FindManyOptions);

    }

    /**
     * Counts entities that match given options.
     * Useful for pagination.
     *
     * @param options
     * @returns
     */
    public async countBy(options?: ICountByOptions<T>): Promise<number> {

        const typeormOptions = parseTypeORMFindCountOptions<T>({ where: options } as FindManyOptions);
        return await this.typeOrmRepository.count(typeormOptions as FindManyOptions);

    }


    /**
 * Finds entities that match given find options.
 * Also counts all entities that match given conditions,
 * but ignores pagination settings (from and take options).
 *
 * @param options
 * @returns
 */
    public async findAll(options?: IFindManyOptions<T>): Promise<IPagination<T>> {
        let total: number;
        let items: T[];
        [items, total] = await this.typeOrmRepository.findAndCount(options as FindManyOptions<T>);
        return { items, total };
    }

    /**
     * Finds entities that match given find options.
     *
     * @param options
     * @returns
     */
    public async find(options?: IFindManyOptions<any>): Promise<any[]> {
        return await this.typeOrmRepository.find(options as FindManyOptions<any>);
    }

    /**
 * Finds entities that match given find options.
 * Also counts all entities that match given conditions,
 * But includes pagination settings
 *
 * @param options
 * @returns
 */
    public async paginate(options?: FindManyOptions<T>): Promise<IPagination<T>> {
        try {
            let total: number;
            let items: T[];


            [items, total] = await this.typeOrmRepository.findAndCount({
                skip: options && options.skip ? options.take * (options.skip - 1) : 0,
                take: options && options.take ? options.take : 10,
                /**
                 * Specifies what relations should be loaded.
                 *
                 * @deprecated
                 */
                ...(options && options.join ? { join: options.join } : {}),
                ...(options && options.select ? { select: options.select } : {}),
                ...(options && options.relations ? { relations: options.relations } : {}),
                ...(options && options.where ? { where: options.where } : {}),
                ...(options && options.order ? { order: options.order } : {})
            });

            return { items, total };
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error);
        }
    }

    /*
    |--------------------------------------------------------------------------
    | @FindOneOrFail
    |--------------------------------------------------------------------------
    */

    /**
     * Finds first entity by a given find options.
     * If entity was not found in the database - rejects with error.
     *
     * @param id
     * @param options
     * @returns
     */
    public async findOneOrFailByIdString(id: string, options?: IFindOneOptions<T>): Promise<ITryRequest<T>> {
        try {
            let record: T;

            options = options as FindOneOptions<T>;
            record = await this.typeOrmRepository.findOneOrFail({
                where: {
                    id,
                    ...(options && options.where ? options.where : {})
                },
                ...(options && options.select ? { select: options.select } : {}),
                ...(options && options.relations ? { relations: options.relations } : []),
                ...(options && options.order ? { order: options.order } : {})
            } as FindOneOptions<T>);


            return {
                success: true,
                record: this.serialize(record)
            };
        } catch (error) {
            return {
                success: false,
                error
            };
        }
    }


    /**
     * Finds first entity by a given find options.
     * If entity was not found in the database - rejects with error.
     *
     * @param options
     * @returns
     */
    public async findOneOrFailByOptions(options: IFindOneOptions<any>): Promise<ITryRequest<T>> {
        try {
            let record: T;

            record = await this.typeOrmRepository.findOneOrFail(options as FindOneOptions<T>);
            return {
                success: true,
                record: this.serialize(record)
            };
        } catch (error) {
            return {
                success: false,
                error
            };
        }
    }
    /**
     * Finds first entity that matches given where condition.
     * If entity was not found in the database - rejects with error.
     *
     * @param options
     * @returns
     */
    public async findOneOrFailByWhereOptions(options: IFindWhereOptions<T>): Promise<ITryRequest<T>> {
        try {
            let record: T;
            record = await this.typeOrmRepository.findOneByOrFail(options as FindOptionsWhere<T>);
            return {
                success: true,
                record: this.serialize(record)
            };
        } catch (error) {
            return {
                success: false,
                error
            };
        }
    }


    /*
    |--------------------------------------------------------------------------
    | @FindOne
    |--------------------------------------------------------------------------
    */
    /**
     * Finds first entity by a given find options.
     * If entity was not found in the database - returns null.
     *
     * @param id {string}
     * @param options
     * @returns
     */
    public async findOneByIdString(id: any['id'], options?: IFindOneOptions<T>): Promise<T> {
        let record: T;

        options = options as FindOneOptions<T>;
        record = await this.typeOrmRepository.findOne({
            where: {
                id,
                ...(options && options.where ? options.where : {})
            },
            ...(options && options.select ? { select: options.select } : {}),
            ...(options && options.relations ? { relations: options.relations } : []),
            ...(options && options.order ? { order: options.order } : {}),
            ...(options && options.withDeleted ? { withDeleted: options.withDeleted } : {}),
        } as FindOneOptions<T>);


        if (!record) {
            throw new NotFoundException(`The requested record was not found`);
        }

        return this.serialize(record);
    }


    /**
 * Finds first entity by a given find options.
 * If entity was not found in the database - returns null.
 *
 * @param options
 * @returns
 */
    public async findOneByOptions(options: IFindOneOptions<T>): Promise<T | null> {
        let record: T;
        record = await this.typeOrmRepository.findOne(options as FindOneOptions<T>);
        if (!record) {
            throw new NotFoundException(`The requested record was not found`);
        }
        return this.serialize(record);
    }

    /**
         * Finds first entity that matches given where condition.
         * If entity was not found in the database - returns null.
         *
         * @param options
         * @returns
         */
    public async findOneByWhereOptions(options: IFindWhereOptions<T>): Promise<T | null> {
        let record: T;
        record = await this.typeOrmRepository.findOneBy(options as FindOptionsWhere<T>);
        if (!record) {
            throw new NotFoundException(`The requested record was not found`);
        }
        return this.serialize(record);
    }

    /**
     * Creates a new entity or updates an existing one based on the provided entity data.
     *
     * @param entity The partial entity data for creation or update.
     * @param createOptions Options for the creation of the entity in MikroORM.
     * @param upsertOptions Options for the upsert operation in MikroORM.
     * @returns The created or updated entity.
     */
    public async create(
        partialEntity: IPartialEntity<T>,
    ): Promise<T> {
        try {
            const newEntity = this.typeOrmRepository.create(partialEntity as DeepPartial<T>);
            return await this.typeOrmRepository.save(newEntity);
        } catch (error) {
            console.error('Error in crud service create method:', error);
            throw new BadRequestException(error);
        }
    }

    /**
     * Saves a given entity in the database.
     * If entity does not exist in the database then inserts, otherwise updates.
     *
     * @param entity
     * @returns
     */
    public async save(entity: IPartialEntity<T>): Promise<T> {
        try {
            return await this.typeOrmRepository.save(entity as DeepPartial<T>);
        } catch (error) {
            console.error('Error in crud service save method:', error);
            throw new BadRequestException(error);
        }
    }


    /**
     * Updates entity partially. Entity can be found by a given conditions.
     * Unlike save method executes a primitive operation without cascades, relations and other operations included.
     * Executes fast and efficient UPDATE query.
     * Does not check if entity exist in the database.
     *
     * @param id
     * @param partialEntity
     * @returns
     */
    public async update(id: IUpdateCriteria<T>, partialEntity: QueryDeepPartialEntity<T>): Promise<UpdateResult | T> {
        try {
            return await this.typeOrmRepository.update(
                id as string | number | FindOptionsWhere<T>,
                partialEntity as QueryDeepPartialEntity<T>
            );

        } catch (error) {
            throw new BadRequestException(error);
        }
    }



    /**
     * Deletes a record based on the given criteria.
     * Criteria can be an ID (string or number) or a complex object with conditions.
     * Supports multiple ORM types, and throws if the ORM type is unsupported.
     *
     * @param criteria - Identifier or condition to delete specific record(s).
     * @returns {Promise<DeleteResult>} - Result indicating the number of affected records.
     */
    public async delete(
        criteria: string | number | FindOptionsWhere<T>
    ): Promise<DeleteResult> {
        try {
            return await this.typeOrmRepository.delete(criteria);
        } catch (error) {
            throw new NotFoundException(`The record was not found`, error);
        }
    }


    /**
 * Softly deletes entities by a given criteria.
 * This method sets a flag or timestamp indicating the entity is considered deleted.
 * It does not actually remove the entity from the database, allowing for recovery or audit purposes.
 *
 * @param criteria - Entity ID or condition to identify which entities to soft-delete.
 * @param options - Additional options for the operation.
 * @returns {Promise<UpdateResult | DeleteResult>} - Result indicating success or failure.
 */
    public async softDelete(
        criteria: string | number | FindOptionsWhere<T>
    ): Promise<UpdateResult | T> {
        try {
            // Perform soft delete using TypeORM
            return await this.typeOrmRepository.softDelete(criteria);
        } catch (error) {
            throw new NotFoundException(`The record was not found or could not be soft-deleted`, error);
        }
    }

    /**
         * Softly removes an entity from the database.
         *
         * This method handles soft removal of a given entity using different ORM strategies, based on the configured ORM type.
         * - For MikroORM, it uses the `removeAndFlush` method to ensure that the soft deletion is properly persisted.
         * - For TypeORM, it utilizes the `softRemove` method to perform a soft deletion.
         * If the ORM type is not supported, an error is thrown.
         *
         * @param id - The unique identifier of the entity to be softly removed.
         * @param options - Optional parameters for finding the entity (commonly used with TypeORM).
         * @param saveOptions - Additional save options for the ORM operation (specific to TypeORM).
         * @returns A promise that resolves to the softly removed entity.
         */
    public async softRemove(id: T['id'], options?: IFindOneOptions<T>, saveOptions?: SaveOptions): Promise<T> {
        try {
            // Ensure the employee exists before attempting soft deletion
            const entity = await this.findOneByIdString(id, options);
            // TypeORM soft removes entities via its repository
            return await this.typeOrmRepository.softRemove<T>(entity, saveOptions);
        } catch (error) {
            // If any error occurs, rethrow it as a NotFoundException with additional context.
            throw new NotFoundException(`An error occurred during soft removal: ${error.message}`, error);
        }
    }

    /**
 * Soft-recover a previously soft-deleted entity.
 *
 * Depending on the ORM, this method restores a soft-deleted entity by resetting its deletion indicator.
 *
 * @param entity - The soft-deleted entity to recover.
 * @param options - Optional settings for database save operations.
 * @returns A promise that resolves with the recovered entity.
 */
    public async softRecover(id: T['id'], options?: IFindOneOptions<T>, saveOptions?: SaveOptions): Promise<T> {
        try {
            // Ensure the entity exists before attempting soft recover
            const entity = await this.findOneByIdString(id, options);
            // Use TypeORM's recover method to restore the entity
            return await this.typeOrmRepository.recover(entity, saveOptions);
        } catch (error) {
            // If any error occurs, rethrow it as a NotFoundException with additional context.
            throw new NotFoundException(`An error occurred during restoring entity: ${error.message}`);
        }
    }


    /**
     * Ensure related entities are recovered based on the input object and populate options.
     *
     * @param entity - The main entity to which the relations belong.
     * @param mikroOptionsPopulate - Array of relation names to populate and recover.
     * @param repository - The repository used for persistence.
     */
    private async ensureRelatedEntitiesRecovered<T extends any>(
        entity: T,
    ): Promise<void> {
        // Loop through the relations to ensure soft-deleted entities are recovered


        // Persist the changes to ensure recovery is saved to the database

    }


    /**
     * Recovers soft-deleted entities within a given MikroORM collection
     * and persists the changes to the database.
     *
     * @param collection - The MikroORM collection to process.
     * @param repository - The repository used to persist changes to the database.
     * @returns The original collection with soft-deleted entities recovered, or undefined if the collection is not initialized.
     */
    private async recoverCollections<T extends any>(

    ): Promise<any> | undefined {

    }

    /**
 * Serializes the provided entity based on the ORM type.
 * @param entity The entity to be serialized.
 * @returns The serialized entity.
 */
    protected serialize(entity: any): any {
        // If using other ORM types, return the entity as is
        return entity;
    }

}
