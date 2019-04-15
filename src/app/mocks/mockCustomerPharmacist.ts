import {CustomerPharmacist} from '@md-app/md-core';

export const MockCustomerPharmacist1: CustomerPharmacist = new CustomerPharmacist({
  id: 1,
  firstname: 'Denis',
  lastname: 'Grognar',
  name: 'Pharmacie de l\'OM',
  email: 'dev+pharma@mesdocteurs.com',
  orderNumber: '123456',
  address: '150 avenue de la liberation',
  zipCode: '13720',
  city: 'La Bouilladisse',
  validated: 1
});
export const MockCustomerPharmacist2: CustomerPharmacist = new CustomerPharmacist({
  id: 2,
  firstname: 'Mac',
  lastname: 'Gyver',
  name: 'Pharmacie du QSG',
  email: 'dev+pharma2@mesdocteurs.com',
  orderNumber: '1000',
  address: '44 rue du Terrail',
  zipCode: '13007',
  city: 'Marseille',
  validated: 1
});
export const MockCustomerPharmacist3: CustomerPharmacist = new CustomerPharmacist({
  id: 3,
  firstname: 'Fabio',
  lastname: 'Capello',
  name: 'Pharmacie de Nice',
  email: 'dev+pharma@mesdocteurs.com',
  orderNumber: '431234',
  address: '44 boulevard ard',
  zipCode: '13008',
  city: 'Marseille',
  validated: 1
});
