import { IPagination } from '@uni/contracts';
import {
	DeepPartial,
	DeleteResult,
	FindManyOptions,
	FindOneOptions,
	FindOptionsWhere,
	UpdateResult
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { ITryRequest } from './try-request';


export interface ICrudService<T> {
	count(filter?: IFindManyOptions<T>): Promise<number>;
	countBy(filter?: ICountByOptions<T>): Promise<number>;
	findAll(filter?: IFindManyOptions<T>): Promise<IPagination<T>>;
	paginate(filter?: IFindManyOptions<T>): Promise<IPagination<T>>;
	findOneByIdString(id: string, options?: IFindOneOptions<T>): Promise<T>;
	findOneOrFailByIdString(id: string, options?: IFindOneOptions<T>): Promise<ITryRequest<T>>;
	findOneByOptions(options: IFindOneOptions<T>): Promise<T>;
	findOneByWhereOptions(options: IFindWhereOptions<T>): Promise<T>;
	findOneOrFailByOptions(options: IFindOneOptions<T>): Promise<ITryRequest<T>>;
	findOneOrFailByWhereOptions(options: IFindWhereOptions<T>): Promise<ITryRequest<T>>;
	create(entity: IPartialEntity<T>, ...options: any[]): Promise<T>;
	save(entity: IPartialEntity<T>): Promise<T>;
	update(id: IUpdateCriteria<T>, entity: QueryDeepPartialEntity<T>, ...options: any[]): Promise<UpdateResult | T>;
	delete(id: IDeleteCriteria<T>, ...options: any[]): Promise<DeleteResult>;
	softDelete(id: IDeleteCriteria<T>, ...options: any[]): Promise<UpdateResult | T>;
	softRemove(id: string, ...options: any[]): Promise<T>;
	softRecover(id: string, ...options: any[]): Promise<T>;
}




export type ICountOptions<T> = FindManyOptions<T> 

export type ICountByOptions<T> = FindOptionsWhere<T> 

export type IFindManyOptions<T> = FindManyOptions<T> 

export type IFindOneOptions<T> = FindOneOptions<T> 

export type IFindOrFailOptions<T> = FindOneOptions<T> 

export type IFindWhereOptions<T> = FindOptionsWhere<T> 

export type IPartialEntity<T> = DeepPartial<T> 

export type IUpdateCriteria<T> = string | number | FindOptionsWhere<T>

export type IDeleteCriteria<T> = string | number | FindOptionsWhere<T>