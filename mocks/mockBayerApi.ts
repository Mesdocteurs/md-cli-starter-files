
import {of as observableOf, Observable} from 'rxjs';

export class MockBayerApi {

  public getNps(from: any = {}, to: any = {}, customHeaders?: Function): Observable<any> {
    return observableOf([]);
  }

  public checkLimit(customHeaders?: Function): Observable<any> {
    return observableOf(5000);
  }
}
