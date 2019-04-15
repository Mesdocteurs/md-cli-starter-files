
import {of as observableOf, Observable} from 'rxjs';

export class MockSanteclairApi {

  public buildReporting(dateFrom: any = {}, dateTo: any = {}, customHeaders?: Function): Observable<any> {
    return observableOf({
      aDistributor: [],
      averageDuration: null,
      averageRate: 0,
      averageWait: null,
      nbPrescription: 0,
      nbSpecialities: 0,
      nbTeleconsult: 0,
      nbTeleconsultByCustomer: 0,
      teleconsultByType: [],
      totalDuration: null
    });
  }
}
