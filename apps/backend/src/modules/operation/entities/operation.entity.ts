import { IOperation } from "@uni/contracts";
import { IBaseEntity } from "@uni/entities";
import { Column,  Entity, RelationId} from "typeorm";

@Entity({name:'operations'})
export class OperationEntity extends IBaseEntity implements IOperation {

    @Column()
    amount: number;

    @Column()
    amount_in_full: string;

    @Column({ default: 'USD' })
    devise: string;

    @Column()
    beneficiery: string;

    @Column()
    groupe: string;

    @Column()
    libelle: string;

    @Column()
    wording: string;

    @Column()
    currentDate: Date;

    @Column()
    types: string;

    @Column()
    observation: string;

    
        
    // @RelationId((t:OperationEntity))

}