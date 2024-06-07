
import {
	PrimaryGeneratedColumn,
	UpdateDateColumn,
	CreateDateColumn,
	DeleteDateColumn,
	Column
} from 'typeorm';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsOptional } from 'class-validator';
import { IBaseEntityModel } from '@uni/contracts/base-entity.model';

/**
 * Abstract base class for dynamically assigning properties.
 */
export abstract class Model {
	constructor(input?: any) {
		if (input) {
			// Iterate over the key-value pairs in the input object
			for (const [key, value] of Object.entries(input)) {
				// Assign the value to the corresponding property in this instance
				(this as any)[key] = value;
			}
		}
	}
}

/**
 * Base entity class with soft-delete functionality.
 * All entities that extend this class will have soft-delete capability.
 */
export abstract class SoftDeletableBaseEntity extends Model {
	@IsOptional()
	@IsDateString()
	// Soft delete column that records the date/time when the entity was soft-deleted
	@DeleteDateColumn() // Indicates that this column is used for soft-delete
	deletedAt?: Date;
}



/**
 * Abstract base entity with common fields for UUID, creation, update timestamps, soft-delete, and more.
 */
export abstract class IBaseEntity extends SoftDeletableBaseEntity implements IBaseEntityModel {
	// Primary key of UUID type
	@PrimaryGeneratedColumn('uuid')
	id?: string;

	@CreateDateColumn() // TypeORM decorator for creation date
	createdAt?: Date;


	@UpdateDateColumn() // TypeORM decorator for update date
	updateAt?: Date;


	@IsOptional() // Field can be optional
	@IsBoolean() // Should be a boolean type
	@Column({ nullable: true, default: true }) // TypeORM
	isActive?: boolean;

	// Indicate if record is archived
	@ApiPropertyOptional({
		type: Boolean,
		default: false
	})
	@IsOptional() // Field can be optional
	@IsBoolean() // Should be a boolean type
	@Column({ nullable: true, default: false }) // TypeORM
	isArchived?: boolean;
}
