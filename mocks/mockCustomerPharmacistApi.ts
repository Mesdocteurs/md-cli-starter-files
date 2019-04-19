
import {of as observableOf, Observable} from 'rxjs';
import {MockCustomerPharmacist1, MockCustomerPharmacist2, MockCustomerPharmacist3} from './mockCustomerPharmacist';
import {CustomerPharmacist, LoopBackFilter} from '@md-app/md-core';

const pharmacists = [
  MockCustomerPharmacist1,
  MockCustomerPharmacist2,
  MockCustomerPharmacist3
];

export class MockCustomerPharmacistApi {

  public create(data): Observable<CustomerPharmacist> {
    return observableOf(data);
  }

  public patchAttributes(id: number, data: any): Observable<CustomerPharmacist> {
    return observableOf(data);
  }

  public findById(id: number): Observable<CustomerPharmacist> {
    return observableOf(MockCustomerPharmacist1);
  }

  public count(oFilter: any): Observable<any> {
    return observableOf({ count: pharmacists.length });
  }

  public find(oFilter: LoopBackFilter): Observable<CustomerPharmacist[]> {
    if (oFilter.where && oFilter.where.zipCode) {
      return observableOf(pharmacists.filter(x => x.zipCode === oFilter.where.zipCode));
    } else {
      return observableOf(pharmacists);
    }
  }

  public findCities(req: any = {}, customHeaders?: Function): Observable<CustomerPharmacist[]> {
    return observableOf(pharmacists);
  }
}
