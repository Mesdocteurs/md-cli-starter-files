
import {of as observableOf, Observable} from 'rxjs';
import {
  MockSpecialityDermatology, MockSpecialityGynecology, MockSpecialityNutrition, MockSpecialityOther,
  MockSpecialityPediatry
} from './mockSpeciality';
import {Speciality} from '@md-app/md-core';

const SPECIALITIES: Speciality[] = [
  MockSpecialityGynecology,
  MockSpecialityDermatology,
  MockSpecialityNutrition,
  MockSpecialityPediatry,
  MockSpecialityOther
];

export class MockSpecialityService {

  findAvailable(): Observable<Speciality[]> {
    return observableOf(SPECIALITIES);
  }
}
