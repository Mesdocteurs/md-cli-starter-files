
import {of as observableOf, Observable} from 'rxjs';

export class MockQuestionVisioApi {

  public patchAttributes(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    return observableOf({ count: 1 });
  }
}
