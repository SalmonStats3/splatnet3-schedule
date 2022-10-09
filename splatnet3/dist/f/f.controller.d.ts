import { IminkRequest, IminkResponse } from '../dto/imink';
import { FService } from './f.service';
export declare class FController {
    private readonly service;
    constructor(service: FService);
    session_token(request: IminkRequest): Promise<IminkResponse>;
}
