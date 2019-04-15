
import {of, Observable} from 'rxjs';
import {
  MockCustomerMutualia,
  MockCustomerSanteclair,
  MockCustomerTeleconseil,
  MockCustomerIrcem,
  MockCustomerSanteclair2
} from './mockCustomer';
import {Customer, LoopBackFilter} from '@md-app/md-core';

const CUSTOMER: Customer = MockCustomerTeleconseil;

const CUSTOMERS = [CUSTOMER, MockCustomerSanteclair, MockCustomerSanteclair2, MockCustomerMutualia, MockCustomerIrcem];

export class MockCustomerApi {

  public findOne(): Observable<Customer> {
    return of(CUSTOMER);
  }

  public find(filter: LoopBackFilter = {}, customHeaders?: Function): Observable<Customer[]> {
    return of(CUSTOMERS);
  }

  public findById(id: number): Observable<Customer> {
    return of(CUSTOMER);
  }

  public checkTeleconsultAvailable(id: any = {}, customHeaders?: Function): Observable<any> {
    const exists = CUSTOMERS.find(x => x.id === id);

    return of(exists.partner.isTeleconsult === 1 ? 1 : null);
  }

 public patchAttributes(id: number, data: Customer): Observable<any> {
    return of({});
  }

  public getTotalAdditionalAmountError1N(id: any, customHeaders?: Function): Observable<any> {
    return of(0);
  }

  public getCount(oParam: any = {}, customHeaders?: Function): Observable<any> {
    return of({count: 0});
  }

  public getList(oParam: any = {}, customHeaders?: Function): Observable<Customer[]> {
    return of(CUSTOMERS);
  }
  public count(where: any = {}, customHeaders?: Function): Observable<{ count: number }> {
    return of({ count: 3 });
  }
}


