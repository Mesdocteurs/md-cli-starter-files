
import {of as observableOf, Observable} from 'rxjs';
import {LoopBackFilter, PartnerContact} from '@md-app/md-core';


const PARTNERCONTACT1 = new PartnerContact({
  id: 1,
  company: 'Company1',
  job: 'job1',
  firstname: 'foo1',
  lastname: 'bar1',
  email: 'foo1@bar.fr',
  phone: '01',
  isNewsletter: true
});

const PARTNERCONTACT2 = new PartnerContact({
  id: 2,
  company: 'Company2',
  job: 'job2',
  firstname: 'foo2',
  lastname: 'bar2',
  email: 'foo2@bar.fr',
  phone: '02',
  isNewsletter: true
});

const PARTNERCONTACT3 = new PartnerContact({
  id: 3,
  company: 'Company3',
  job: 'job3',
  firstname: 'foo3',
  lastname: 'bar3',
  email: 'foo3@bar.fr',
  phone: '03',
  isNewsletter: true
});

const PARTNERCONTACT4 = new PartnerContact({
  id: 4,
  company: 'Company4',
  job: 'job4',
  firstname: 'foo4',
  lastname: 'bar4',
  email: 'foo4@bar.fr',
  phone: '04',
  isNewsletter: true
});

export class MockPartnerContactApi {

  create(data): Observable<PartnerContact> {
    data.id = 100;
    return observableOf(data);
  };

  find(oFilter: LoopBackFilter): Observable<PartnerContact[]> {
    return observableOf([PARTNERCONTACT1, PARTNERCONTACT2, PARTNERCONTACT3, PARTNERCONTACT4]);
  }
}
