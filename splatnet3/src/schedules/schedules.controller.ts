import { Controller, Get, Headers } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';
import { ScheduleResponse } from 'src/dto/schedule';
import { TokenController } from 'src/token/token.controller';
import { SchedulesService } from './schedules.service';

@Controller('schedules')
export class SchedulesController {
  constructor(private readonly service: SchedulesService) {}

  @Get()
  @ApiTags('スケジュール')
  @ApiOperation({ operationId: '取得' })
  @ApiOkResponse({ type: [ScheduleResponse] })
  get_schedules(
    @Headers('X-WebGameToken') token,
    @Headers('X-Web-View-Ver') version,
  ): Promise<ScheduleResponse[]> {
    return this.service.get_schedules(token, version);
  }
}
