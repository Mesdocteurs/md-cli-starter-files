
import {of as observableOf, Observable} from 'rxjs';
import {MockDoctorInvoice1} from './mockInvoiceDoctor';
import {InvoiceDoctor, LoopBackFilter} from '@md-app/md-core';

export class MockInvoiceDoctorApi {

  public create<Chat>(data: Chat, customHeaders?: Function): Observable<Chat> {
    return observableOf(data);
  }

  public find(filter: LoopBackFilter = {}, customHeaders?: Function): Observable<InvoiceDoctor[]> {
    return observableOf([MockDoctorInvoice1]);
  }
}
