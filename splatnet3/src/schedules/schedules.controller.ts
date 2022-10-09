import { Controller, Get, Headers, ValidationPipe } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';
import { ScheduleRequest, ScheduleResponse } from 'src/dto/schedule';
import { TokenController } from 'src/token/token.controller';
import { SchedulesService } from './schedules.service';
import * as schedules from './schedules.json';
import { plainToClass } from 'class-transformer';

@Controller('schedules')
export class SchedulesController {
  constructor(private readonly service: SchedulesService) {}

  @Get()
  @ApiTags('スケジュール')
  @ApiOperation({ operationId: '取得' })
  @ApiOkResponse({ type: [ScheduleResponse] })
  get_schedules(
    @Headers('X-Web-Token') token,
    @Headers('X-Web-View-Ver') version = '1.0.0-42f70e51',
  ): Promise<ScheduleResponse[]> {
    return this.service.get_schedules(token, version);
  }

  @Get('all')
  @ApiTags('スケジュール')
  @ApiOperation({ operationId: '全件取得' })
  @ApiOkResponse({ type: [ScheduleResponse] })
  get_all_schedules(): Promise<ScheduleResponse[]> {
    return this.service.get_all_schedules();
  }

  // @Get('update')
  // @ApiTags('スケジュール')
  // @ApiOperation({ operationId: '追加' })
  // @ApiOkResponse({ type: [ScheduleResponse] })
  // add_schedules(): Promise<void> {
  //   return this.service.add_schedules(schedules as [ScheduleResponse]);
  // }
}
