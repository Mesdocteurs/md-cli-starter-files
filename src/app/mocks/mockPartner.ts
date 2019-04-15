import {
  MockProductAudioMutualia,
  MockProductAudioTeleconseil, MockProductAudioTeleconseilFree, MockProductChatMutualia, MockProductChatTeleconseil,
  MockProductChatTeleconseilFree,
  MockProductQuestionTeleconseil,
  MockProductQuestionTeleconseilFree, MockProductTeleconsultAudio, MockProductTeleconsultChat, MockProductTeleconsultVisio,
  MockProductVisioMutualia,
  MockProductVisioTeleconseil, MockProductVisioTeleconseilFree,
  MockProductIrcemCall
} from './mockProduct';
// import {environment} from '../../environments/environment';
import {Partner} from '@md-app/md-core';

export const MockPartnerMesDocteurs: Partner = new Partner({
  id: 13, // environment.mesDocteurs.id,
  namespace: 'mesdocteurs',
  url: 'https://www.mesdocteurs.com',
  name: 'Mes Docteurs',
  products: [
    MockProductQuestionTeleconseil,
    MockProductChatTeleconseil,
    MockProductAudioTeleconseil,
    MockProductVisioTeleconseil
  ]
});

export const MockPartnerSanteclair: Partner = new Partner({
  id: 6, // environment.santeclair.id,
  namespace: 'santeclair',
  isTeleconsult: 1,
  name: 'Santéclair',
  url: 'https://santeclair.mesdocteurs.com',
  products: [
    MockProductQuestionTeleconseil,
    MockProductChatTeleconseil,
    MockProductAudioTeleconseil,
    MockProductVisioTeleconseil,
    MockProductTeleconsultChat,
    MockProductTeleconsultAudio,
    MockProductTeleconsultVisio
  ]
});

export const MockPartnerBayer: Partner = new Partner({
  id: 18, // environment.parlogyn.id,
  namespace: 'parlogyn',
  name: 'Parlogyn',
  products: [
    MockProductQuestionTeleconseilFree,
    MockProductChatTeleconseilFree,
    MockProductAudioTeleconseilFree,
    MockProductVisioTeleconseilFree
  ]
});

export const MockPartnerMutualia: Partner = new Partner({
  id: 4,
  namespace: 'mutualia',
  isTeleconsult: 1,
  name: 'Mutualia',
  products: [
    MockProductChatMutualia,
    MockProductVisioMutualia,
    MockProductAudioMutualia
  ]
});

export const MockPartnerIrcem: Partner = new Partner({
  id: 17,
  namespace: 'ircem',
  isTeleconsult: 1,
  name: 'IRCEM',
  products: [
    MockProductIrcemCall
  ]
});

export const MockPartnerBaloo: Partner = new Partner({
  id: 1,
  namespace: 'baloo',
  isTeleconsult: 1,
  canRegister: 1,
  hasCode: 1,
  couponAvailable: 1,
  active: 1,
  name: 'Baloo',
  products: [
    MockProductQuestionTeleconseil,
    MockProductChatTeleconseil,
    MockProductAudioTeleconseil,
    MockProductVisioTeleconseil,
    MockProductTeleconsultChat,
    MockProductTeleconsultAudio,
    MockProductTeleconsultVisio
  ]
});
