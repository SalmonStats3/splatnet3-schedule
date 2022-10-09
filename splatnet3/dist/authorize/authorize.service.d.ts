import { BulletTokensService } from 'src/bullet_tokens/bullet_tokens.service';
import { AccessTokenRequest } from 'src/dto/access_token';
import { BulletTokenResponse } from 'src/dto/bullet_tokens';
import { FService } from 'src/f/f.service';
import { SchedulesService } from 'src/schedules/schedules.service';
import { SplatoonAccessTokenService } from 'src/splatoon_access_token/splatoon_access_token.service';
import { SplatoonTokenService } from 'src/splatoon_token/splatoon_token.service';
import { TokenService } from 'src/token/token.service';
export declare class AuthorizeService {
    private readonly f;
    private readonly token;
    private readonly service;
    private readonly game;
    private readonly bullet;
    private readonly schedule;
    constructor(f: FService, token: TokenService, service: SplatoonTokenService, game: SplatoonAccessTokenService, bullet: BulletTokensService, schedule: SchedulesService);
    update(request: AccessTokenRequest): Promise<void>;
    authorize(request: AccessTokenRequest): Promise<BulletTokenResponse>;
}
