import { Module } from "@nestjs/common";
import { AppModule } from "@uni/app.module";

@Module({
    imports:[ AppModule  ]
})

export class BootstrapModule{}