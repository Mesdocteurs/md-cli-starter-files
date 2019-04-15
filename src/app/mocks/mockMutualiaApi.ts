
import {of as observableOf, Observable} from 'rxjs';
import {MockCustomerMutualia} from './mockCustomer';

export class MockMutualiaApi {

  public creditInProgress(customHeaders?: Function): Observable<any> {
    return observableOf(MockCustomerMutualia.partnerCredit);
  }
}
