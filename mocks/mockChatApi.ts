
import {of as observableOf, Observable} from 'rxjs';

export class MockChatApi {

  public create<Chat>(data: Chat, customHeaders?: Function): Observable<Chat> {
    return observableOf(data);
  }
}
