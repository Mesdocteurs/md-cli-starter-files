import {MockAppUserPatient} from './mockAppUser';
import {MockCouponDiscount} from './mockCoupon';
import * as moment from 'moment';
import {CouponAppUser} from '@md-app/md-core';

export const MockCouponAppUserDiscount: CouponAppUser = new CouponAppUser({
  id: 1,
  dateAdded: moment().subtract(1, 'month').toDate(),
  status: 'enabled',
  userId: MockAppUserPatient.id,
  appUser: MockAppUserPatient,
  couponId: MockCouponDiscount.id,
  coupon: MockCouponDiscount
});
