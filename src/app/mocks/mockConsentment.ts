import {Consentment} from '@md-app/md-core';

export const MockConsentmentCustomerTeleconseil: Consentment = new Consentment({
  id: 1,
  name: 'Consentement de test',
  content: 'Je reconnais accepter les conditions',
  namespace: 'consentTest',
  url: 'https://www.mesdocteurs.com/cgu',
  role: 'customer',
  active: 1,
  createdAt: new Date()
});

export const MockConsentmentCustomerTeleconseil2: Consentment = new Consentment({
  id: 2,
  name: 'Consentement de test2',
  content: 'Je reconnais accepter les conditions2',
  namespace: 'consentTest2',
  url: 'https://www.mesdocteurs.com/cgu2',
  role: 'customer',
  active: 1,
  createdAt: new Date()
});

export const MockConsentmentCustomerTeleconseil3: Consentment = new Consentment({
  id: 3,
  name: 'Consentement de test3',
  content: 'Je reconnais accepter les conditions3',
  namespace: 'consentTest3',
  url: 'https://www.mesdocteurs.com/cgu3',
  role: 'customer',
  active: 1,
  createdAt: new Date()
});

export const MockConsentmentCustomerTeleconseil4: Consentment = new Consentment({
  id: 4,
  name: 'Consentement de test4',
  content: 'Je reconnais accepter les conditions4',
  namespace: 'consentTest4',
  url: 'https://www.mesdocteurs.com/cgu4',
  role: 'customer',
  active: 1,
  createdAt: new Date()
});

export const MockConsentmentCustomerTeleconsult: Consentment = new Consentment({
  id: 7,
  name: 'Consentement teleconsult',
  content: 'Je reconnais accepter les conditions7',
  namespace: 'ircemConsentment',
  url: 'https://www.mesdocteurs.com/cgu7',
  role: 'customer',
  active: 1,
  isTeleconsult: 1,
  createdAt: new Date()
});

export const MockConsentmentDoctor: Consentment = new Consentment({
  id: 5,
  name: 'Consentement de test4',
  content: 'Je reconnais accepter les conditions4',
  namespace: 'doctorConsentTest5',
  url: 'https://www.mesdocteurs.com/cgu4',
  role: 'doctor',
  active: 1,
  createdAt: new Date()
});

export const MockConsentmentDoctor2: Consentment = new Consentment({
  id: 6,
  name: 'Consentement de test4',
  content: 'Je reconnais accepter les conditions4',
  namespace: 'doctorConsentTest6',
  url: 'https://www.mesdocteurs.com/cgu4',
  role: 'doctor',
  active: 1,
  createdAt: new Date()
});
