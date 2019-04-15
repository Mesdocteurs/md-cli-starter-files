import {MockAppUserDoctor, MockAppUserDoctor2} from './mockAppUser';
import {MockSpecialityDermatology, MockSpecialityGynecology, MockSpecialityPediatry} from './mockSpeciality';
import * as moment from 'moment';
import {Doctor} from '@md-app/md-core';

export const MockDoctorDermato: Doctor = new Doctor({
  id: 30,
  firstname: 'Anna',
  lastname: 'Tomie',
  orderNumber: '123456',
  rppsNumber: 'AAABBB',
  rcproDateEnd: moment().add(1, 'year').toDate(),
  address: '34 rue du Vélodrome',
  zipCode: '13009',
  city: 'Marseille',
  formation: 'Diplomé de l\'académie de l\'om',
  organization: 'Le Sud',
  phone: '06 54 45 32 23',
  appUserId: MockAppUserDoctor.id,
  appUser: MockAppUserDoctor,
  specialitiesToDoctors: [
    {
      id: 1,
      specialityId: MockSpecialityDermatology.id,
      speciality: MockSpecialityDermatology,
      doctorId: 30,
      isDefault: 1
    },
    {
      id: 2,
      specialityId: MockSpecialityPediatry.id,
      speciality: MockSpecialityPediatry,
      doctorId: 30
    },
    {
      id: 3,
      specialityId: MockSpecialityGynecology.id,
      speciality: MockSpecialityGynecology,
      doctorId: 30
    }
  ]
});

export const MockDoctorGyneco: Doctor = new Doctor({
  id: 31,
  firstname: 'Marcel',
  lastname: 'De Schwal',
  orderNumber: '123456',
  phone: '06 54 45 32 23',
  rppsNumber: '3234',
  appUserId: MockAppUserDoctor2.id,
  appUser: MockAppUserDoctor2,
  specialitiesToDoctors: [
    {
      id: 4,
      specialityId: MockSpecialityPediatry.id,
      speciality: MockSpecialityPediatry,
      doctorId: 30,
      isDefault: 1
    },
    {
      id: 5,
      specialityId: MockSpecialityGynecology.id,
      speciality: MockSpecialityGynecology,
      doctorId: 30
    }
  ]
});

