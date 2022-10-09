import { BulletTokenRequest, BulletTokenResponse } from '../dto/bullet_tokens';
export declare class BulletTokensService {
    get_bullet_tokens(request: BulletTokenRequest): Promise<BulletTokenResponse>;
}
