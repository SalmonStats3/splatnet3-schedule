import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenController } from './token/token.controller';
import { SplatoonTokenController } from './splatoon_token/splatoon_token.controller';
import { SplatoonAccessTokenController } from './splatoon_access_token/splatoon_access_token.controller';
import { BulletTokensController } from './bullet_tokens/bullet_tokens.controller';
import { SessionTokenController } from './session_token/session_token.controller';
import { SessionTokenService } from './session_token/session_token.service';
import { TokenService } from './token/token.service';
import { SplatoonTokenService } from './splatoon_token/splatoon_token.service';
import { SplatoonAccessTokenService } from './splatoon_access_token/splatoon_access_token.service';
import { FController } from './f/f.controller';
import { FService } from './f/f.service';
import { BulletTokensService } from './bullet_tokens/bullet_tokens.service';
import { SchedulesController } from './schedules/schedules.controller';
import { SchedulesService } from './schedules/schedules.service';

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
    SchedulesController,
  ],
  providers: [
    AppService,
    SessionTokenService,
    TokenService,
    SplatoonTokenService,
    SplatoonAccessTokenService,
    FService,
    BulletTokensService,
    SchedulesService,
  ],
})
export class AppModule {}
