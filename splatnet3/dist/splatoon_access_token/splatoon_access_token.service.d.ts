import { SplatoonAccessTokenRequest, SplatoonAccessTokenResponse } from '../dto/splatoon_access_token';
export declare class SplatoonAccessTokenService {
    splatoon_access_token(request: SplatoonAccessTokenRequest): Promise<SplatoonAccessTokenResponse>;
}
