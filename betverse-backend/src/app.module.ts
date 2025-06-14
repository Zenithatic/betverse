import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { HealthController } from './health/health.controller';
import { HealthService } from './health/health.service';

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [HealthService],
=======
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
>>>>>>> main
})
export class AppModule {}
