

import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { urlencoded } from 'express';
import { ApplicationPluginConfig } from '@uni/databases';

export async function bootstrap(
    pluginConfig?: Partial<ApplicationPluginConfig>,
  ): Promise<INestApplication> {

    const { BootstrapModule } = await import('./bootstrap.module');
    const app = await NestFactory.create<NestExpressApplication>(
      BootstrapModule,
      {
        logger: ['log', 'error', 'warn', 'debug', 'verbose'], // Set logging levels
        bufferLogs: true, // Buffer logs to avoid loss during startup
      },
    );
    app.use(urlencoded({ extended: true, limit: '50mb' }));
    app.set('trust proxy', true);
    app.enableShutdownHooks();
    app.enableCors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
      allowedHeaders:
        'Authorization, Language, Tenant-Id, Organization-Id, X-Requested-With, X-Auth-Token, X-HTTP-Method-Override, Content-Type, Content-Language, Accept, Accept-Language, Observe',
    });
    app.setGlobalPrefix('api');
    await app.listen(4000, () => {});
    return app;
}