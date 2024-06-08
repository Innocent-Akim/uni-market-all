import { ColumnType as TypeORMColumnType, ColumnOptions as TypeORMColumnOptions } from 'typeorm';
//
type CommonColumnOptions<T> =  Omit<TypeORMColumnOptions, 'type'> & {
    type?: ColumnDataType;
    relationId?: boolean; // Need to prevent Mikro-orm property decorator when relationId column
};
// Represents the type of data that can be used for a column in either TypeORM or MikroORM.
export type ColumnDataType = TypeORMColumnType ;
// Represents common column options that can be used in both TypeORM and MikroORM.
export type ColumnOptions<T> = CommonColumnOptions<T>;
