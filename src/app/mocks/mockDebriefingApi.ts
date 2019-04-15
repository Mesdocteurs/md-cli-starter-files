
import {of as observableOf, Observable} from 'rxjs';
import {Debriefing} from '@md-app/md-core';

export class MockDebriefingApi {

  public create(data: Debriefing, customHeaders?: Function): Observable<Debriefing> {
    return observableOf(data);
  }
}
