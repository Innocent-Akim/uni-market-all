
import { Repository } from 'typeorm';
import { IQueryBuilder } from './iquery-builder';
import { TypeOrmQueryBuilder } from './typeorm-query-builder';

type CombinedEntityRepository<Entity> = Repository<Entity>;

/**
 * Creates a query builder for a given repository, supporting both TypeORM and MikroORM.
 *
 * @param repository - A TypeORM `Repository` or a MikroORM `EntityRepository`.
 * @returns A `TypeOrmQueryBuilder` or `MikroOrmQueryBuilder` depending on the repository type.
 * @throws Error if the repository is neither TypeORM nor MikroORM.
 */
export function createQueryBuilder<Entity>(repository: Repository<Entity>, alias?: string): IQueryBuilder<Entity> {
        return new TypeOrmQueryBuilder(repository);
}

/**
 * Generates a query builder specific to the chosen ORM type (TypeORM or MikroORM).
 *
 * @param repository - A repository instance, either TypeORM `Repository` or MikroORM `EntityRepository`.
 * @param ormType - Specifies the ORM type using `MultiORMEnum`, defaulting to TypeORM.
 * @returns A query builder (`TypeOrmQueryBuilder` or `MikroOrmQueryBuilder`) based on the specified ORM.
 * @throws Error if an unsupported `ormType` is provided.
 */
export function multiORMCreateQueryBuilder<Entity>(repository: CombinedEntityRepository<Entity>, alias?: string): IQueryBuilder<Entity> {
            return new TypeOrmQueryBuilder(repository as Repository<Entity>);

}
