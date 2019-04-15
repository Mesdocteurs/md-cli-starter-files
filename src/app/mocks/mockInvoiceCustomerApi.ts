
import {of as observableOf, Observable} from 'rxjs';
import {InvoiceCustomer, LoopBackFilter} from '@md-app/md-core';

export class MockInvoiceCustomerApi {

  public create<Chat>(data: Chat, customHeaders?: Function): Observable<Chat> {
    return observableOf(data);
  }

  public find(filter: LoopBackFilter = {}, customHeaders?: Function): Observable<InvoiceCustomer[]> {
    return observableOf([]);
  }
}
