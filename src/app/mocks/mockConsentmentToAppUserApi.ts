
import {of as observableOf, Observable} from 'rxjs';
import {ConsentmentToAppuser, LoopBackFilter} from '@md-app/md-core';

const CONSENTMENTTOAPPUSER1 = new ConsentmentToAppuser({
  id: 1,
  acceptedAt: new Date(),
  consentmentId: 1,
  appUserId: 55
});


const CONSENTMENTTOAPPUSER2 = new ConsentmentToAppuser({
  id: 2,
  acceptedAt: new Date(),
  consentmentId: 1,
  appUserId: 55
});


const CONSENTMENTTOAPPUSER3 = new ConsentmentToAppuser({
  id: 3,
  acceptedAt: new Date(),
  consentmentId: 2,
  appUserId: 42
});

const CONSENTMENTS = [CONSENTMENTTOAPPUSER1, CONSENTMENTTOAPPUSER2, CONSENTMENTTOAPPUSER3];


export class MockConsentmentToAppUserApi {

  create(data): Observable<any> {
    return observableOf(data);
  }

  createManyConsentmentsToAppuser(id, data): Observable<any> {
    return observableOf(data);
  }

  patchAttributes(id, data): Observable<any> {
    return observableOf(data);
  }

  find<ConsentmentToAppUser>(oFilter: LoopBackFilter = {}, customHeaders?: Function): Observable<ConsentmentToAppuser[]> {
    return observableOf(CONSENTMENTS);
  }
  //   if (oFilter && oFilter.where && oFilter.where.appUserId) {
  //     if (55 === oFilter.where.appUserId) {
  //       return Observable.of([CONSENTMENTTOAPPUSER1, CONSENTMENTTOAPPUSER2]);
  //     } else {
  //       return Observable.of([CONSENTMENTTOAPPUSER3]);
  //     }
  //   } else {
  //     return Observable.of([CONSENTMENTTOAPPUSER1, CONSENTMENTTOAPPUSER2, CONSENTMENTTOAPPUSER3]);
  //   }
  // }
}
