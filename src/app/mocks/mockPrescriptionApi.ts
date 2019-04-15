
import {of as observableOf, Observable} from 'rxjs';
import {MockPrescription1, MockPrescription2} from './mockPrescription';
import {LoopBackFilter, Prescription} from '@md-app/md-core';

export class MockPrescriptionApi {

  public create(data: Prescription, customHeaders?: Function): Observable<Prescription> {
    return observableOf(data);
  }

  public count(where: any = {}, customHeaders?: Function): Observable<{ count: number }> {
    return observableOf({ count: 2});
  }

  public find(filter: LoopBackFilter = {}, customHeaders?: Function): Observable<Prescription[]> {
    return observableOf([MockPrescription1, MockPrescription2]);
  }

  public patchAttributes(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    return observableOf({});
  }
}
