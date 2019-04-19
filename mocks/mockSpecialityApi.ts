
import {of as observableOf, Observable} from 'rxjs';
import {
  MockSpecialityDermatology, MockSpecialityGynecology, MockSpecialityNutrition,
  MockSpecialityOther, MockSpecialityPediatry
} from './mockSpeciality';
import {LoopBackFilter, Speciality} from '@md-app/md-core';

const SPECIALITIES: Speciality[] = [
  MockSpecialityGynecology,
  MockSpecialityDermatology,
  MockSpecialityNutrition,
  MockSpecialityPediatry,
  MockSpecialityOther
];

export class MockSpecialityApi {

  public find(): Observable<Speciality[]> {
    return observableOf(SPECIALITIES);
  }

  public create(data: Speciality): Observable<Speciality> {
    return observableOf(data);
  }

  public patchAttributes(id: number, data: any): Observable<Speciality> {
    return observableOf(data);
  }

  public count(where: any = {}, customHeaders?: Function): Observable<{ count: number }> {
    return observableOf({ count: 3 });
  }

  public findById(id: any, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<Speciality> {
    return observableOf(SPECIALITIES.find(x => x.id === id));
  }
}
