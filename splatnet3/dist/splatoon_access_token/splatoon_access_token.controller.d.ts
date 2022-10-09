import { SplatoonAccessTokenRequest, SplatoonAccessTokenResponse } from '../dto/splatoon_access_token';
import { SplatoonAccessTokenService } from './splatoon_access_token.service';
export declare class SplatoonAccessTokenController {
    private readonly service;
    constructor(service: SplatoonAccessTokenService);
    get_splatoon_access_token(request: SplatoonAccessTokenRequest): Promise<SplatoonAccessTokenResponse>;
}
