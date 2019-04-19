
import {of as observableOf, Observable} from 'rxjs';
import {QuestionOrder} from '@md-app/md-core';

export class MockQuestionOrderApi {

  public create<T>(data: QuestionOrder, customHeaders?: Function): Observable<QuestionOrder> {
    data.id = 1;
    return observableOf(data);
  }
}

