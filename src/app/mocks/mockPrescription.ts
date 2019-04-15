import {Prescription} from '@md-app/md-core';

export const MockPrescription1: Prescription = new Prescription({
  date: new Date(),
  duration: 72,
  questionId: 1,
  message: 'toto',
  hasDrugs: null
});

export const MockPrescription2: Prescription = new Prescription({
  date: new Date(),
  duration: 72,
  questionId: 2,
  message: 'totfdsfs fds fd fo',
  hasDrugs: null
});
