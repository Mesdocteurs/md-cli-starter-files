
import {Observable, of as observableOf} from 'rxjs';

export class MockIbmApi {

  public buildReporting(dateFrom: any = {}, dateTo: any = {}, customHeaders?: Function): Observable<any> {
    return observableOf({
      nbTeleconsult: 0,
      nbTeleconsultByCustomer: 0,
      nbSpecialities: 0,
      averageDuration: null,
      averageWait: null,
      averageRate: 0,
      nbPrescription: 0,
      teleconsultByType: [],
      totalDuration: null,
      userCreated: '1',
      specialities: [],
      questions: []
    });
  }
}
