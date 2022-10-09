import { HttpException, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import axios from 'axios';
import { Schedule, ScheduleResponse } from 'src/dto/schedule';

@Injectable()
export class SchedulesService {
  async get_schedules(
    token: string,
    version: string,
  ): Promise<ScheduleResponse[]> {
    const url = 'https://api.lp1.av5ja.srv.nintendo.net/api/graphql';
    const parameters = {
      variables: {},
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash: '7d4bb0565342b7385ceb97d109e14897',
        },
      },
    };

    axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
      'X-Web-View-Ver': version,
    };

    try {
      const response = await axios.post(url, parameters);
      const results = plainToClass(
        Schedule,
        response.data,
      ).data.coopGroupingSchedule.regularSchedules.nodes.map(
        (node) => new ScheduleResponse(node),
      );
      return results;
    } catch (error) {
      throw new HttpException(error.resonse.data, error.response.status);
    }
  }
}
