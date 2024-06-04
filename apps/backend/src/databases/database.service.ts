import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ApplicationPluginConfig } from ".";
import { getConfig } from "@uni/config";

@Injectable()
export class DatabaseService{
    public readonly config: Partial<ApplicationPluginConfig>;
    constructor(){
      this.config=getConfig();
    }

    get dbConnectionOptions(): Readonly<TypeOrmModuleOptions> {
		return this.config.dbConnectionOptions;
	}

}