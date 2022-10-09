import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import {
  SplatoonAccessTokenRequest,
  SplatoonAccessTokenResponse,
} from '../dto/splatoon_access_token';
import { SplatoonAccessTokenService } from './splatoon_access_token.service';

@Controller('splatoon_access_token')
export class SplatoonAccessTokenController {
  constructor(private readonly service: SplatoonAccessTokenService) {}

  @Post()
  @ApiTags()
  @ApiOperation({ operationId: 'スプラトゥーンアクセストークン' })
  @ApiOkResponse()
  @ApiBadRequestResponse()
  async get_splatoon_access_token(
    @Body(new ValidationPipe({ transform: true }))
    request: SplatoonAccessTokenRequest,
  ): Promise<SplatoonAccessTokenResponse> {
    return this.service.splatoon_access_token(request);
  }
}
