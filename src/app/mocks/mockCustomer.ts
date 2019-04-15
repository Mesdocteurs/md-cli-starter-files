import {MockPartnerBayer, MockPartnerIrcem, MockPartnerMesDocteurs, MockPartnerMutualia, MockPartnerSanteclair} from './mockPartner';
import {MockCustomerPharmacist1} from './mockCustomerPharmacist';
import {
  MockAppUserIrcem,
  MockAppUserMutualia,
  MockAppUserParlogyn,
  MockAppUserPatient,
  MockAppUserSanteclair, MockAppUserSanteclair2, MockAppUserSupport
} from './mockAppUser';
import {Customer} from '@md-app/md-core';

export const MockCustomerTeleconseil: Customer = new Customer({
  id: 1,
  firstname: 'José',
  lastname: 'Paldir',
  appUserId: MockAppUserPatient.id,
  appUser: MockAppUserPatient,
  partnerId: MockPartnerMesDocteurs.id,
  partner: MockPartnerMesDocteurs,
  rememberCard: 1,
  cicCardAlias: 'e0cc594f466083298ffd9fc1d91184a3fdd82eff',
  cicCardIdentifier: '004040******4957',
  cicValidAlias: 1,
  cardDateExpiration: '0319',
  cardBrand: 'VI'
});

export const MockCustomerBayer: Customer = new Customer({
  id: 2,
  firstname: 'Marie',
  lastname: 'Curie',
  dateOfBirth: new Date(1960, 5, 5),
  appUserId: 51,
  appUser: MockAppUserParlogyn,
  partnerId: MockPartnerBayer.id,
  partner: MockPartnerBayer
});

export const MockCustomerMutualia: Customer = new Customer({
  id: 3,
  firstname: 'Lucho',
  lastname: 'Gonzales',
  dateOfBirth: new Date(1980, 2, 5),
  gender: 'Homme',
  height: '186',
  weight: '71',
  city: 'Marseille',
  zipCode: '13008',
  address: '104 traverse Talabot',
  isTeleconsult: 1,
  profession: 'Footballeur',
  appUserId: MockAppUserMutualia.id,
  appUser: MockAppUserMutualia,
  partnerId: MockPartnerMutualia.id,
  partner: MockPartnerMutualia,
  partnerCredit: 5000,
});

export const MockCustomerSanteclair: Customer = new Customer({
  id: 4,
  firstname: 'Steeve',
  lastname: 'Mandanda',
  dateOfBirth: new Date(1983, 2, 5),
  gender: 'Homme',
  height: '192',
  weight: '75',
  city: 'Marseille',
  zipCode: '13008',
  address: '104 traverse Talabot',
  isTeleconsult: 1,
  profession: 'Gardien de but',
  appUserId: MockAppUserSanteclair.id,
  appUser: MockAppUserSanteclair,
  partnerId: MockPartnerSanteclair.id,
  partner: MockPartnerSanteclair,
  nbUse: 5,
  nbUsed: 3
});


export const MockCustomerSanteclair2: Customer = new Customer({
  id: 100,
  firstname: 'Adil',
  lastname: 'Rami',
  dateOfBirth: new Date(1984, 5, 5),
  gender: 'Homme',
  height: '188',
  weight: '79',
  isTeleconsult: 1,
  profession: 'Défenseur centre',
  appUserId: MockAppUserSanteclair2.id,
  appUser: MockAppUserSanteclair2,
  partnerId: MockPartnerSanteclair.id,
  partner: MockPartnerSanteclair,
  nbUse: 5,
  nbUsed: 3
});

export const MockCustomerCouponTeleconseil: Customer = new Customer({
  id: 5,
  firstname: 'Florian',
  lastname: 'Thauvin',
  isTeleconsult: null,
  appUserId: MockAppUserPatient.id,
  appUser: MockAppUserPatient,
  partnerId: MockPartnerMesDocteurs.id,
  partner: MockPartnerMesDocteurs
});

export const MockCustomerIrcem: Customer = new Customer({
  id: 6,
  firstname: 'Maxime',
  lastname: 'Lopez',
  dateOfBirth: new Date(1997, 11, 4),
  gender: 'Homme',
  height: '167',
  weight: '58',
  city: 'Marseille',
  zipCode: '13008',
  phone: '0102030405',
  address: '104 traverse Talabot',
  profession: 'Milieu de terrain',
  customerPharmacistId: MockCustomerPharmacist1.id,
  customerPharmacist: MockCustomerPharmacist1,
  isTeleconsult: 1,
  appUserId: MockAppUserIrcem.id,
  appUser: MockAppUserIrcem,
  partnerId: MockPartnerIrcem.id,
  partner: MockPartnerIrcem
});
