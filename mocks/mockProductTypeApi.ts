import {of as observableOf, Observable} from 'rxjs';
import {
  MockProductTypeAudio, MockProductTypeCall, MockProductTypeChat, MockProductTypeQuestion,
  MockProductTypeVisio
} from './mockProductType';

export class MockProductTypeApi {

  public find(): Observable<any[]> {
    return observableOf([
      MockProductTypeChat,
      MockProductTypeCall,
      MockProductTypeAudio,
      MockProductTypeVisio,
      MockProductTypeQuestion
    ]);
  }
}
