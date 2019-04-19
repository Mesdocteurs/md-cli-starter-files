
import {throwError as observableThrowError, of as observableOf, Observable} from 'rxjs';

export class MockBalooApi {

  public checkUser(balooUserId: any = {}, customHeaders?: Function): Observable<any> {
    if (balooUserId === 'valid') {
      return observableOf(1);
    } else {
      return observableThrowError({ status: 404 });
    }
  }
}
