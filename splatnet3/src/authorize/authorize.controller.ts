import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBasicAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AccessTokenRequest } from 'src/dto/access_token';
import { BulletTokenResponse } from 'src/dto/bullet_tokens';
import { FService } from 'src/f/f.service';
import { TokenService } from 'src/token/token.service';
import { AuthorizeService } from './authorize.service';

@Controller('authorize')
export class AuthorizeController {
  constructor(private readonly service: AuthorizeService) {}

  @Post()
  @ApiTags('認証')
  @ApiOperation({ operationId: 'ログイン' })
  @ApiOkResponse()
  @ApiBadRequestResponse()
  authorize(@Body() request: AccessTokenRequest): Promise<BulletTokenResponse> {
    return this.service.authorize(request);
  }

  @Post('update')
  @ApiTags('認証')
  @ApiOperation({ operationId: 'スケジュール自動追加' })
  @ApiOkResponse()
  @ApiBadRequestResponse()
  update(@Body() request: AccessTokenRequest): Promise<void> {
    return this.service.update(request);
  }
}
