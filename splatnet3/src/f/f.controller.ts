import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { IminkRequest, IminkResponse } from '../dto/imink';
import { FService } from './f.service';

@Controller('f')
export class FController {
  constructor(private readonly service: FService) {}

  @Post()
  @ApiTags()
  @ApiOperation({ operationId: 'ハッシュ' })
  @ApiOkResponse()
  @ApiBadRequestResponse()
  session_token(
    @Body(new ValidationPipe({ transform: true })) request: IminkRequest,
  ): Promise<IminkResponse> {
    console.log(request);
    return this.service.get_imink(request);
  }
}
