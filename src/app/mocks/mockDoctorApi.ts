
import {of as observableOf, Observable, throwError} from 'rxjs';
import {MockDoctorDermato, MockDoctorGyneco} from './mockDoctor';
import {AppUser, Doctor, LoopBackFilter} from '@md-app/md-core';

const DOCTOR: Doctor = new Doctor({
  id: 2,
  firstname: 'Anna',
  lastname: 'Tomie',
  orderNumber: '1234556',
  rppsNumber: '3234',
  phone: '06 06 06 06 06',
  appUser: new AppUser({
    id: 30,
    email: 'julien.dadhemar+anna@gmail.com',
    status: 'enabled'
  })
});

const DOCTOR2: Doctor = new Doctor({
  id: 3,
  firstname: 'foo',
  lastname: 'Bar',
  orderNumber: '1234556',
  rppsNumber: '3234',
  phone: '06 06 06 06 06',
  appUser: new AppUser({
    id: 42,
    email: 'foo@bar.com',
    password: 'tototoO0',
    status: 'enabled'
  })
});
const DOCTOR3: Doctor = new Doctor({
  id: 4,
  firstname: 'foo4',
  lastname: 'Bar',
  orderNumber: '12345567',
  rppsNumber: '3234',
  phone: '06 06 06 06 07',
  appUser: new AppUser({
    id: 42,
    email: 'foo4@bar.com',
    password: 'toto',
    status: 'enabled'
  })
});

const DOCTORS: Doctor[] = [
  // DOCTOR,
  // DOCTOR2,
  // DOCTOR3,
  MockDoctorDermato,
  MockDoctorGyneco
];

export class MockDoctorApi {

  public create(data): Observable<Doctor> {
    data.id = 100;
    return observableOf(data);
  };

  public find(oFilter: LoopBackFilter): Observable<Doctor[]> {
    return observableOf(DOCTORS);
  }

  public deleteSpecialitiesToDoctors(id: any, customHeaders?: Function): Observable<any> {
    return observableOf({});
  }

  public createManyQuestions(id: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    return observableOf({});
  }

  public createManySpecialitiesToDoctors(id: any, data: any[] = [], customHeaders?: Function): Observable<any> {
    return observableOf({});
  }

  public getCount(oParam: any = {}, customHeaders?: Function): Observable<any> {
    return observableOf({ count: 1});
  }

  public getList(oParam: any = {}, customHeaders?: Function): Observable<any> {
    return observableOf(DOCTORS);
  }

  public findById(id: any, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<Doctor> {
    return observableOf(DOCTORS.find(x => x.id === id));
  }

  public getListFront(req: any = {}, customHeaders?: Function): Observable<Doctor[]> {
    return observableOf(DOCTORS);
  }

  public authByToken(token: any, customHeaders?: Function): Observable<any> {
    if (token === 'error') {
      return throwError(new Error('Invalid token'));
    } else {
      return observableOf(MockDoctorDermato.appUser);
    }
  };

  public findOne(filter: LoopBackFilter = {}, customHeaders?: Function): Observable<Doctor> {
    return observableOf(MockDoctorDermato);
  }

  public patchAttributes(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    return observableOf({ count: 1 });
  }

  public count(where: any = {}, customHeaders?: Function): Observable<{ count: number }> {
    return observableOf({ count: 3 });
  }
}
