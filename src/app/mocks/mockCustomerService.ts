
import {of as observableOf, Observable} from 'rxjs';
import {
  MockCustomerBayer,
  MockCustomerMutualia,
  MockCustomerSanteclair,
  MockCustomerTeleconseil,
  MockCustomerCouponTeleconseil,
  MockCustomerSanteclair2
} from './mockCustomer';
import {Customer} from '@md-app/md-core';

const CUSTOMERS: Customer[] = [
  MockCustomerTeleconseil,
  MockCustomerBayer,
  MockCustomerMutualia,
  MockCustomerSanteclair,
  MockCustomerSanteclair2,
  MockCustomerCouponTeleconseil
];

export class MockCustomerService {

  findById(id: number): Observable<Customer> {
    return observableOf(CUSTOMERS.find(x => x.id === id));
  }
}
