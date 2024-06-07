
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { FindOptionsOrder, FindOptionsRelations, FindOptionsSelect, FindOptionsWhere } from 'typeorm';
import { Transform, TransformFnParams, Type, plainToClass } from 'class-transformer';
import { IsNotEmpty, IsOptional, Max, Min, ValidateNested } from 'class-validator';
import { parseToBoolean } from '@uni/utils';
import { parseObject } from './pagination.helper';

/**
 * Specifies what columns should be retrieved.
 */
export class OptionsSelect<T = any> {

	@ApiPropertyOptional({ type: 'object' })
	@IsOptional()
	@Transform(({ value }: TransformFnParams) => parseObject(value, parseToBoolean))
	readonly select?: FindOptionsSelect<T>;
}

/**
 * Indicates what relations of entity should be loaded (simplified left join form).
*/
export class OptionsRelations<T = any> extends OptionsSelect<T> {

	@ApiPropertyOptional({ type: 'object' })
	@IsOptional()
	readonly relations?: FindOptionsRelations<T>;
}

export class OptionParams<T> extends OptionsRelations<T> {
	/**
	 * Order, in which entities should be ordered.
	 */
	@ApiPropertyOptional({ type: 'object' })
	@IsOptional()
	readonly order: FindOptionsOrder<T>;

	
	/**
	* Indicates if soft-deleted rows should be included in entity result.
	*/
	@ApiPropertyOptional({ type: 'boolean' })
	@IsOptional()
	@Transform(({ value }: TransformFnParams) => value ? parseToBoolean(value) : false)
	readonly withDeleted: boolean;
}

/**
 * Describes generic pagination params
 */
export class PaginationParams<T = any> extends OptionParams<T> {
	/**
	 * Limit (paginated) - max number of entities should be taken.
	 */
	@ApiPropertyOptional({ type: () => 'number', minimum: 0, maximum: 100 })
	@IsOptional()
	@Min(0)
	@Max(100)
	@Transform((params: TransformFnParams) => parseInt(params.value, 10))
	readonly take: number;

	/**
	 * Offset (paginated) where from entities should be taken.
	 */
	@ApiPropertyOptional({ type: () => 'number', minimum: 0 })
	@IsOptional()
	@Min(0)
	@Transform((params: TransformFnParams) => parseInt(params.value, 10))
	readonly skip: number;
}


