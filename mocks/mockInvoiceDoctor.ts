import * as moment from 'moment';
import {MockAppUserDoctor} from './mockAppUser';
import {InvoiceDoctor} from '@md-app/md-core';

export const MockDoctorInvoice1: InvoiceDoctor = new InvoiceDoctor({
  id: 1,
  date: moment().subtract(4, 'days').toDate(),
  doctorUserId: MockAppUserDoctor.id,
  doctorUser: MockAppUserDoctor
});
