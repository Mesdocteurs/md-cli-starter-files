
import {of as observableOf, Observable} from 'rxjs';
import {MockCustomerCouponTeleconseil} from './mockCustomer';
import * as moment from 'moment';
import {Coupon, CouponAppUser, LoopBackFilter} from '@md-app/md-core';

export class MockCouponAppUserApi {

  findOne(filter: LoopBackFilter): Observable<CouponAppUser> {
    if (filter && filter.where && filter.where.userId === MockCustomerCouponTeleconseil.appUserId) {
      return observableOf(new CouponAppUser({
        id: 1,
        // "dateAdded"?: Date;
        // "dateUsed"?: Date;
        status: 'enabled',
        userId: MockCustomerCouponTeleconseil.appUserId,
        // appUser: AppUser;
        couponId: 1,
        coupon: new Coupon({
          name: 'Coupon -30%',
          operationName: 'Opération coup de poing',
          dateStart: moment().subtract(1, 'day').toDate(),
          dateEnd: moment().add(1, 'day').toDate(),
          maxUsers: 1,
          maxPerUser: 1,
          limitFirstOrder: 0,
          discountType: 'discount',
          discountPercentage: 30
        })
      }))
    } else {
      return observableOf(null);
    }
  }
}
