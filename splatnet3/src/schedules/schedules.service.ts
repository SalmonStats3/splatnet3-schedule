import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import axios from 'axios';
import { Schedule, ScheduleResponse } from 'src/dto/schedule';
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  DocumentData,
} from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import * as snakecaseKeys from 'snakecase-keys';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBl8OR-wdFLZ3HnnTUzEq4t4eXce5Xu8gE',
  authDomain: 'tkgstratorwork.firebaseapp.com',
  projectId: 'tkgstratorwork',
  storageBucket: 'tkgstratorwork.appspot.com',
  messagingSenderId: '245057171773',
  appId: '1:245057171773:web:2397fbf88981d07569d554',
  measurementId: 'G-3XC9LXLCNL',
};

@Injectable()
export class SchedulesService {
  readonly app = initializeApp(firebaseConfig);
  readonly db = getFirestore(this.app);

  async add_schedules(results: ScheduleResponse[]): Promise<void> {
    results.forEach(async (result) => {
      await setDoc(doc(this.db, 'schedules', result.start_time), {
        stageId: result.stage_id,
        startTime: result.start_time,
        endTime: result.end_time,
        weaponList: result.weapon_list,
        rareWeapon: result.rare_weapon,
      });
    });
  }

  async get_all_schedules(): Promise<ScheduleResponse[]> {
    const schedules = (
      await getDocs(collection(this.db, 'schedules'))
    ).docs.map((doc) => doc.data());

    const results = schedules.map((schedule) =>
      snakecaseKeys(schedule as ScheduleResponse),
    );

    return results;
  }

  async get_schedules(
    token: string,
    version: string,
  ): Promise<ScheduleResponse[]> {
    if (token === undefined) {
      throw new BadRequestException('X-Web-Token is required');
    }
    const url = 'https://api.lp1.av5ja.srv.nintendo.net/api/graphql';
    const parameters = {
      variables: {},
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash: '730cd98e84f1030d3e9ac86b6f1aae13',
        },
      },
    };

    axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
      'X-Web-View-Ver': version,
    };

    try {
      const response = await axios.post(url, parameters);
      const results: ScheduleResponse[] = plainToClass(
        Schedule,
        response.data,
      ).data.coopGroupingSchedule.regularSchedules.nodes.map(
        (node) => new ScheduleResponse(node),
      );

      results.forEach(async (result) => {
        console.log(result);
        // await setDoc(doc(this.db, 'schedules', result.start_time), {
        //   stageId: result.stage_id,
        //   startTime: result.start_time,
        //   endTime: result.end_time,
        //   weaponList: result.weapon_list,
        //   rareWeapon: result.rare_weapon,
        // });
      });

      return results;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('X-Web-Token is expired');
    }
  }
}
