import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import axios from 'axios';
import {
  SplatoonAccessTokenRequest,
  SplatoonAccessTokenResponse,
} from '../dto/splatoon_access_token';

@Injectable()
export class SplatoonAccessTokenService {
  async splatoon_access_token(
    request: SplatoonAccessTokenRequest,
  ): Promise<SplatoonAccessTokenResponse> {
    const url =
      'https://api-lp1.znc.srv.nintendo.net/v2/Game/GetWebServiceToken';
    const headers = {
      'X-ProductVersion': request.version,
      'X-Platform': 'Android',
      Authorization: `Bearer ${request.naIdToken}`,
    };
    const parameters = {
      parameter: {
        f: request.f,
        id: 4834290508791808,
        registrationToken: request.naIdToken,
        requestId: request.request_id,
        timestamp: request.timestamp,
      },
      requestId: request.request_id,
    };

    try {
      const response = await axios.post(url, parameters, { headers: headers });
      const status_code = response.data.status;
      switch (status_code) {
        case 0:
          return plainToClass(SplatoonAccessTokenResponse, response.data);
        default:
          throw new HttpException(response.data, status_code - 9000);
      }
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
