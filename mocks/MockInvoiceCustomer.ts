import {MockQuestionAnswered} from './mockQuestion';
import {AppUser, InvoiceCustomer} from '@md-app/md-core';

export const MockInvoiceCustomer1: InvoiceCustomer = new InvoiceCustomer({
  id: 1,
  questionId: 1,
  customerUserId: 1,
  question: MockQuestionAnswered,
  customerUser: new AppUser({
    id: 1,
    email: 'dev@mesdocteurs.com'
  })
});
