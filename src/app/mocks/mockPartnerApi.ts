
import {of as observableOf, Observable, throwError} from 'rxjs';
import {MockCustomerSanteclair} from './mockCustomer';
import {MockPartnerBaloo, MockPartnerBayer, MockPartnerMesDocteurs, MockPartnerMutualia, MockPartnerSanteclair} from './mockPartner';
import {LoopBackFilter, Partner, Product} from '@md-app/md-core';

const partners = [
  MockPartnerSanteclair,
  MockPartnerMesDocteurs,
  MockPartnerBayer,
  MockPartnerMutualia,
  MockPartnerBaloo
];

export class MockPartnerApi {

  find(): Observable<Partner[]> {
    return observableOf(partners);
  }

  getProducts(id: number, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<Product[]> {
    const partner: Partner = partners.find(p => p.id === id);
    return observableOf(partner.products);
  }

  public authByToken(token: any, partnerId: any, customHeaders?: Function): Observable<any> {
    if (token === 'error') {
      return throwError(new Error('Invalid token'));
    } else {
      return observableOf(MockCustomerSanteclair.appUser);
    }
  }

  public findById(id: any, filter: LoopBackFilter = {}, customHeaders?: Function): Observable<Partner> {
    return observableOf(partners.find(p => p.id === id));
  }

  public count(where: any = {}, customHeaders?: Function): Observable<{ count: number }> {
    return observableOf({ count: 2});
  }

  public reporting(partnerId: any, dateFrom: any = {}, dateTo: any = {}, customHeaders?: Function): Observable<any> {
    return observableOf({
      averageDuration: null,
      averageRate: 0,
      averageWait: null,
      nbPrescription: 0,
      nbSpecialities: 0,
      nbTeleconsult: 0,
      nbTeleconsultByCustomer: 0,
      questions: [],
      specialities: [],
      teleconsultByType: [],
      totalDuration: null
    });
  }

}
