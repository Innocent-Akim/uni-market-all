import { Injectable } from '@nestjs/common';
import { ConfigService, registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
    env: process.env.NODE_ENV,
    DB_HOST: process.env.DB_HOST,
    DB_TYPE: process.env.DB_TYPE,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,
}));

@Injectable()
export class ConfigurationService {
  constructor(private configService: ConfigService) {}

  public getDbHost(): string | undefined {
    return this.configService.get<string>('config.DB_NAME');
  }

  public getDbType(): string | undefined {
    return this.configService.get<string>('config.DB_NAME');
  }

  public getDbName(): string | undefined {
    return this.configService.get<string>('config.DB_NAME');
  }
}
