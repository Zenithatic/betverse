import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get('check')
  healthCheck(): string {
    return this.healthService.healthCheck();
  }
}
