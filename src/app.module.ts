import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenController } from './api/token/token.controller';
import { SplatoonTokenController } from './api/splatoon_token/splatoon_token.controller';
import { SplatoonAccessTokenController } from './api/splatoon_access_token/splatoon_access_token.controller';
import { BulletTokensController } from './api/bullet_tokens/bullet_tokens.controller';
import { SessionTokenController } from './api/session_token/session_token.controller';
import { SessionTokenService } from './api/session_token/session_token.service';
import { TokenService } from './api/token/token.service';
import { SplatoonTokenService } from './api/splatoon_token/splatoon_token.service';
import { SplatoonAccessTokenService } from './api/splatoon_access_token/splatoon_access_token.service';
import { FController } from './api/f/f.controller';
import { FService } from './api/f/f.service';
import { BulletTokensService } from './api/bullet_tokens/bullet_tokens.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    TokenController,
    SplatoonTokenController,
    SplatoonAccessTokenController,
    BulletTokensController,
    SessionTokenController,
    FController,
  ],
  providers: [
    AppService,
    SessionTokenService,
    TokenService,
    SplatoonTokenService,
    SplatoonAccessTokenService,
    FService,
    BulletTokensService,
  ],
})
export class AppModule {}
