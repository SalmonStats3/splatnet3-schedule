import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import {
  SplatoonTokenRequest,
  SplatoonTokenResponse,
} from '../dto/splatoon_token';
import { SplatoonTokenService } from './splatoon_token.service';

@Controller('splatoon_token')
export class SplatoonTokenController {
  constructor(private readonly service: SplatoonTokenService) {}

  @Post()
  @ApiTags()
  @ApiOperation({ operationId: 'スプラトゥーントークン' })
  @ApiOkResponse()
  @ApiBadRequestResponse()
  session_token(
    @Body(new ValidationPipe({ transform: true }))
    request: SplatoonTokenRequest,
  ): Promise<SplatoonTokenResponse> {
    return this.service.get_splatoon_token(request);
  }
}
