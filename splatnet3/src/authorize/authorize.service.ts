import { Injectable, UnauthorizedException } from '@nestjs/common';
import { BulletTokensService } from 'src/bullet_tokens/bullet_tokens.service';
import { AccessTokenRequest } from 'src/dto/access_token';
import { BulletTokenRequest, BulletTokenResponse } from 'src/dto/bullet_tokens';
import { IminkRequest, IminkType } from 'src/dto/imink';
import { SplatoonAccessTokenRequest } from 'src/dto/splatoon_access_token';
import { SplatoonTokenRequest } from 'src/dto/splatoon_token';
import { FService } from 'src/f/f.service';
import { SchedulesService } from 'src/schedules/schedules.service';
import { SplatoonAccessTokenService } from 'src/splatoon_access_token/splatoon_access_token.service';
import { SplatoonTokenService } from 'src/splatoon_token/splatoon_token.service';
import { TokenService } from 'src/token/token.service';

@Injectable()
export class AuthorizeService {
  constructor(
    private readonly f: FService,
    private readonly token: TokenService,
    private readonly service: SplatoonTokenService,
    private readonly game: SplatoonAccessTokenService,
    private readonly bullet: BulletTokensService,
    private readonly schedule: SchedulesService,
  ) {}

  async update(request: AccessTokenRequest): Promise<void> {
    const web_version: string = '2.0.0-18810d39';
    try {
      const bullet_token = await (await this.authorize(request)).bulletToken;
      await this.schedule.get_schedules(bullet_token, web_version);
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  async authorize(request: AccessTokenRequest): Promise<BulletTokenResponse> {
    const version: string = '2.4.0';
    const web_version: string = '2.0.0-18810d39';
    const access_token = await (
      await this.token.get_access_token(request)
    ).access_token;
    const imink_nso = await this.f.get_imink(
      new IminkRequest(IminkType.NSO, access_token),
    );
    const splatoon_token = (
      await this.service.get_splatoon_token(
        new SplatoonTokenRequest(imink_nso, version, access_token),
      )
    ).result.webApiServerCredential.accessToken;
    const imink_app = await this.f.get_imink(
      new IminkRequest(IminkType.APP, splatoon_token),
    );
    const splatoon_access_token = (
      await this.game.splatoon_access_token(
        new SplatoonAccessTokenRequest(imink_app, version, splatoon_token),
      )
    ).result.accessToken;
    return await this.bullet.get_bullet_tokens(
      new BulletTokenRequest(splatoon_access_token, web_version),
    );
  }
}
