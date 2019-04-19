
import {of as observableOf, Observable} from 'rxjs';


export class MockContactApi {

  public sendEmail(type, data): Observable<any> {
    return observableOf({});
  }

  public contactFront(name: any, email: any, subject: any, message: any, customHeaders?: Function): Observable<any> {
    return observableOf({});
  }
}
