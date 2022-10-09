import { SplatoonTokenRequest, SplatoonTokenResponse } from '../dto/splatoon_token';
export declare class SplatoonTokenService {
    get_splatoon_token(request: SplatoonTokenRequest): Promise<SplatoonTokenResponse>;
}
