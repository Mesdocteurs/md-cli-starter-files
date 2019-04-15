
import {of as observableOf, Observable} from 'rxjs';

export class MockCnpApi {

  public buildReporting(dateFrom: any = {}, dateTo: any = {}, customHeaders?: Function): Observable<any> {
    return observableOf({
      aDistributor: [
        {
          name: 'CNP',
          questions: {
            total: 1,
            specialities: []
          },
          chats: {
            averageDuration: '04:34:32',
            specialities: []
          },
          visios: {
            averageDuration: '04:34:32',
            specialities: []
          },
          audios: {
            averageDuration: '04:34:32',
            specialities: []
          }
        }
      ]
    });
  }
}
