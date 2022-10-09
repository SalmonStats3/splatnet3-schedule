import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { plainToClass } from 'class-transformer';
import {
  SplatoonTokenRequest,
  SplatoonTokenResponse,
} from '../dto/splatoon_token';

@Injectable()
export class SplatoonTokenService {
  async get_splatoon_token(
    request: SplatoonTokenRequest,
  ): Promise<SplatoonTokenResponse> {
    // const { version } = (await this.get_version()).results;
    const version = '2.3.1';
    const url = 'https://api-lp1.znc.srv.nintendo.net/v3/Account/Login';
    const headers = {
      'X-ProductVersion': version,
      'X-Platform': 'Android',
    };

    const parameters = {
      parameter: {
        f: request.f,
        language: 'en-GB',
        naBirthday: '1990-01-01',
        naCountry: 'US',
        naIdToken: request.naIdToken,
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
          return plainToClass(SplatoonTokenResponse, response.data);
        default:
          throw new HttpException(response.data, status_code - 9000);
      }
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
