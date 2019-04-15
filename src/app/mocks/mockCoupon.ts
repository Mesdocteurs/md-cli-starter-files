import * as moment from 'moment';
import {Coupon} from '@md-app/md-core';

export const MockCouponDiscount: Coupon = new Coupon({
  id: 1,
  name: 'Coupon -30%',
  operationName: 'Opération coup de poing',
  dateStart: moment().subtract(1, 'day').toDate(),
  dateEnd: moment().add(1, 'day').toDate(),
  maxUsers: 1,
  maxPerUser: 1,
  limitFirstOrder: 0,
  discountType: 'discount',
  discountPercentage: 30
});
