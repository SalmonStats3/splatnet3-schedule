import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AccessTokenRequest, AccessTokenResponse } from '../dto/access_token';
import { TokenService } from './token.service';

@Controller('token')
export class TokenController {
  constructor(private readonly service: TokenService) {}

  @Post()
  @ApiTags()
  @ApiOperation({ operationId: 'アクセストークン' })
  @ApiOkResponse()
  @ApiBadRequestResponse()
  access_token(
    @Body() request: AccessTokenRequest,
  ): Promise<AccessTokenResponse> {
    return this.service.get_access_token(request);
  }
}
