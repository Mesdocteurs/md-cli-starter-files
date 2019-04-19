import {of, Observable, throwError} from 'rxjs';
import {
  MockAppUserDoctor,
  MockAppUserIrcem,
  MockAppUserMutualia,
  MockAppUserParlogyn,
  MockAppUserPatient,
  MockAppUserSanteclair
} from './mockAppUser';
import {environment} from '../../environments/environment';
import {MockCustomerSanteclair} from './mockCustomer';
import {MockDoctorDermato} from './mockDoctor';
import {AppUser, Customer, Doctor, LoopBackFilter} from '@md-app/md-core';

const appUserPatient: AppUser[] = [
  MockAppUserSanteclair,
  MockAppUserPatient,
  MockAppUserMutualia,
  MockAppUserParlogyn,
  MockAppUserIrcem
];

export class MockAppUserApi {

  public setPassword(newPassword: any): Observable<any> {
    return of(newPassword);
  }

  public login(credentials: any, include: any = 'user', rememberMe: boolean = true, customHeaders?: Function): Observable<any> {
    if (MockAppUserPatient.email === credentials.email && 'tototoO0' === credentials.password) {
      return of({
        userId: MockAppUserPatient.id,
        user: MockAppUserPatient
      });
    } else if (MockAppUserDoctor.email === credentials.email && 'tototoO0' === credentials.password) {
      return of({
        userId: MockAppUserDoctor.id,
        user: MockAppUserDoctor
      });
    } else {
      return throwError(new Error('Invalid credentials'));
    }
  }

  public getCustomer(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    return of(MockCustomerSanteclair);
  }
  public getDoctor(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    return of(MockDoctorDermato);
  }

  public getRolesById(id: number): Observable<any[]> {
    let role;
    if (id === MockAppUserDoctor.id) {
      role = 'doctor';
    } else {
      role = 'customer';
    }
    return of([role]);
  }

  public createManyConsentmentsToAppuser(id: number, oParam): Observable<any> {
    return of({});
  }

  public create(data: AppUser): Observable<AppUser> {
    data.id = 51;
    return of(data);
  }

  public createCustomer(id: number, data: Customer): Observable<Customer> {
    data.appUserId = id;
    return of(data);
  }

  public createDoctor(id: number, data: Doctor): Observable<Doctor> {
    data.appUserId = id;
    return of(data);
  }

  public updateCustomer(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    return of({ count: 1 });
  }

  public patchAttributes(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    return of({});
  }

  public findById(id: any, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<AppUser> {
    return of(MockAppUserPatient);
  }

  public resetPassword(options: any, customHeaders?: Function): Observable<any> {
    return of({});
  }

  public isPartner(email: any = {}, customHeaders?: Function): Observable<any> {
    return of({
      id: 6,
      namespace: 'santeclair'
    });
  }
}

