
import {of as observableOf, Observable} from 'rxjs';
import {
  MockConsentmentCustomerTeleconseil, MockConsentmentCustomerTeleconseil2,
  MockConsentmentCustomerTeleconseil3, MockConsentmentCustomerTeleconseil4, MockConsentmentCustomerTeleconsult,
  MockConsentmentDoctor, MockConsentmentDoctor2
} from './mockConsentment';
import {Consentment, LoopBackFilter} from '@md-app/md-core';

const CONSENTMENTS: Consentment[] = [
  MockConsentmentCustomerTeleconseil,
  MockConsentmentCustomerTeleconseil2,
  MockConsentmentCustomerTeleconseil3,
  MockConsentmentCustomerTeleconseil4,
  MockConsentmentCustomerTeleconsult,
  MockConsentmentDoctor,
  MockConsentmentDoctor2
];
export class MockConsentmentApi {

  public create(data): Observable<Consentment> {
    return observableOf(data);
  }

  public patchAttributes(id, data): Observable<Consentment> {
    return observableOf(data);
  }

  public find(oFilter: LoopBackFilter): Observable<Consentment[]> {
    if (oFilter && oFilter.where && oFilter.where.role) {
      if ('customer' === oFilter.where.role) {
        return observableOf([
          MockConsentmentCustomerTeleconseil,
          MockConsentmentCustomerTeleconseil2,
          MockConsentmentCustomerTeleconseil3,
          MockConsentmentCustomerTeleconseil4,
          MockConsentmentCustomerTeleconsult
        ]);
      } else {
        return observableOf([
          MockConsentmentDoctor,
          MockConsentmentDoctor2
        ]);
      }
    } else {
      return observableOf([
        MockConsentmentCustomerTeleconseil,
        MockConsentmentCustomerTeleconseil2,
        MockConsentmentCustomerTeleconseil3,
        MockConsentmentCustomerTeleconseil4,
        MockConsentmentCustomerTeleconsult,
        MockConsentmentDoctor,
        MockConsentmentDoctor2
      ]);
    }
  }

  public findById(id: any, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<Consentment> {
    return observableOf(CONSENTMENTS.find((x: Consentment) => x.id === id));
  }
}
