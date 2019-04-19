import * as moment from 'moment';
import {AppUser, Consentment} from '@md-app/md-core';

export const MockAppUserDoctor: AppUser = new AppUser({
  id: 50,
  email: 'dev+docteur@mesdocteurs.com',
  status: 'enabled',
  otpPhone: '0033600000000',
  otpAuth: null,
  consentmentsToAppuser: []
});

export const MockAppUserDoctor2: AppUser = new AppUser({
  id: 51,
  email: 'dev+docteur2@mesdocteurs.com',
  status: 'enabled',
  consentmentsToAppuser: []
});

export const MockAppUserPatient: AppUser = new AppUser({
  id: 30,
  email: 'dev+jp@mesdocteurs.com',
  status: 'enabled',
  consentmentsToAppuser: []
});

export const MockAppUserSanteclair: AppUser = new AppUser({
  id: 31,
  email: 'santeclair@mesdocteurs.com',
  status: 'enabled',
  created: moment().subtract(5, 'days').toDate(),
  consentmentsToAppuser: []
});

export const MockAppUserSanteclair2: AppUser = new AppUser({
  id: 98,
  email: 'santeclair2@mesdocteurs.com',
  status: 'enabled',
  created: moment().subtract(5, 'days').toDate(),
  consentmentsToAppuser: []
});

export const MockAppUserMutualia: AppUser = new AppUser({
  id: 32,
  email: 'mutualia@mesdocteurs.com',
  status: 'enabled',
  consentmentsToAppuser: [],
  // customer: MockCustomerMutualia
});

export const MockAppUserIrcem: AppUser = new AppUser({
  id: 33,
  email: 'dev+ircem@mesdocteurs.com',
  status: 'enabled',
  password: 'toCr3ate',
  consentmentsToAppuser: [
    {
      acceptedAt: new Date(),
      id: 1,
      consentmentId: 1,
      appUserId: 33,
      appUser: new AppUser({
        id: 33,
        email: 'dev+ircem@mesdocteurs.com',
        password: 'toCr3ate'
      }),
      consentment: new Consentment({
        id: 1,
        name: 'Consentement de test',
        content: 'Je reconnais accepter les conditions',
        namespace: 'consentTest',
        url: 'https://www.mesdocteurs.com/cgu',
        role: 'customer',
        active: 1,
        createdAt: new Date()
      })
    },
    {
      acceptedAt: new Date(),
      id: 2,
      consentmentId: 2,
      appUserId: 33,
      appUser: new AppUser({
        id: 33,
        email: 'dev+ircem@mesdocteurs.com',
        password: 'toCr3ate'
      }),
      consentment: new Consentment({
        id: 2,
        name: 'Consentement de test2',
        content: 'Je reconnais accepter les conditions2',
        namespace: 'consentTest2',
        url: 'https://www.mesdocteurs.com/cgu2',
        role: 'customer',
        active: 1,
        createdAt: new Date()
      })
    }
  ]
});

export const MockAppUserParlogyn: AppUser = new AppUser({
  id: 34,
  email: 'dev+parlogyn@mesdocteurs.com',
  status: 'enabled',
  consentmentsToAppuser: [],
  // customer: MockCustomerBayer
});

export const MockAppUserSupport: AppUser = new AppUser({
  id: 35,
  email: 'support@mesdocteurs.com',
  status: 'enabled'
});
