import { Module } from '@nestjs/common';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { WorkshopModule } from './workshop/workshop.module';
import { ThemeController } from './theme/theme.controller';
import { ThemeModule } from './theme/theme.module';

@Module({
  imports: [HelloWorldModule, WorkshopModule, ThemeModule],
  controllers: [ThemeController],
})
export class ModulesModule {}
