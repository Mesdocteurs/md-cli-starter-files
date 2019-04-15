
import {of as observableOf, Observable} from 'rxjs';
import {MockCouponDiscount} from './mockCoupon';
import {Coupon, LoopBackFilter} from '@md-app/md-core';

export class MockCouponApi {

  public count(where: any = {}, customHeaders?: Function): Observable<{ count: number }> {
    return observableOf({count: 0});
  }

  public find(filter: LoopBackFilter = {}, customHeaders?: Function): Observable<Coupon[]> {
    return observableOf([MockCouponDiscount])
  }

  public listCustomerCoupon(req: any = {}, customHeaders?: Function): Observable<any> {
    return observableOf([MockCouponDiscount]);
  }
}

