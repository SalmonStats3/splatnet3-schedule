import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import {
  SessionTokenRequest,
  SessionTokenResponse,
} from '../dto/session_token';
import { SessionTokenService } from './session_token.service';

@Controller('session_token')
export class SessionTokenController {
  constructor(private readonly service: SessionTokenService) {}

  @Post()
  @ApiTags()
  @ApiOperation({ operationId: 'セッショントークン' })
  @ApiOkResponse()
  @ApiBadRequestResponse()
  session_token(
    @Body(new ValidationPipe({ transform: true })) request: SessionTokenRequest,
  ): Promise<SessionTokenResponse> {
    return this.service.get_session_token(request);
  }
}
