import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { BulletTokenRequest, BulletTokenResponse } from '../dto/bullet_tokens';
import { BulletTokensService } from './bullet_tokens.service';

@Controller('bullet_tokens')
export class BulletTokensController {
  constructor(private readonly service: BulletTokensService) {}

  @Post()
  @ApiTags()
  @ApiOperation({ operationId: 'バレットトークン' })
  @ApiOkResponse()
  @ApiBadRequestResponse()
  session_token(
    @Body(new ValidationPipe({ transform: true }))
    request: BulletTokenRequest,
  ): Promise<BulletTokenResponse> {
    return this.service.get_bullet_tokens(request);
  }
}
