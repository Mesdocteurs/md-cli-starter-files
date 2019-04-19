import {MockProductTypeAudio, MockProductTypeCall, MockProductTypeChat, MockProductTypeVisio} from './mockProductType';
import {Product} from '@md-app/md-core';

export const MockProductQuestionTeleconseil: Product = new Product({
  id: 1,
  namespace: 'question',
  description: 'Question Téléconseil',
  imageUrl: 'express.jpg',
  name: 'Question',
  isTeleconsult: null,
  amount: 600,
  active: 1,
  productTypeId: 1,
  // productType: new ProductType({
  //   id: 1,
  //   name: 'Question',
  //   namespace: 'question'
  // })
});

export const MockProductChatTeleconseil: Product = new Product({
  id: 2,
  namespace: 'chat',
  description: 'Chat Téléconseil',
  imageUrl: 'ecrit.jpg',
  name: 'Chat',
  isTeleconsult: null,
  amount: 200,
  active: 1,
  productTypeId: MockProductTypeChat.id,
  // productType: MockProductTypeChat
});

export const MockProductAudioTeleconseil: Product = new Product({
  id: 3,
  namespace: 'audio',
  description: 'Audio Téléconseil',
  imageUrl: 'audio.jpg',
  name: 'Audio',
  isTeleconsult: null,
  amount: 200,
  active: 1,
  productTypeId: 3,
  productType: {
    id: 3,
    name: 'Audio',
    namespace: 'audio'
  }
});

export const MockProductVisioTeleconseil: Product = new Product({
  id: 4,
  namespace: 'visio',
  description: 'Visio Téléconseil',
  imageUrl: 'visio.jpg',
  name: 'Visio',
  isTeleconsult: null,
  amount: 200,
  active: 1,
  productTypeId: 4,
  productType: {
    id: 4,
    name: 'Visio',
    namespace: 'visio'
  }
});

export const MockProductQuestionTeleconseilFree: Product = new Product({
  id: 5,
  namespace: 'questionTeleconseilFree',
  description: 'Question Téléconseil gratuite',
  imageUrl: 'express.jpg',
  name: 'Question',
  active: 1,
  productTypeId: 1,
  productType: {
    id: 1,
    name: 'Question',
    namespace: 'question'
  }
});

export const MockProductChatTeleconseilFree: Product = new Product({
  id: 6,
  namespace: 'chatTeleconseilFree',
  description: 'Chat Téléconseil gratuit',
  imageUrl: 'ecrit.jpg',
  name: 'Chat',
  active: 1,
  productTypeId: MockProductTypeChat.id,
  // productType: MockProductTypeChat
});

export const MockProductAudioTeleconseilFree: Product = new Product({
  id: 7,
  namespace: 'audioTeleconseilFree',
  description: 'Audio Téléconseil gratuit',
  imageUrl: 'audio.jpg',
  name: 'Audio',
  active: 1,
  productTypeId: 3,
  productType: {
    id: 3,
    name: 'Audio',
    namespace: 'audio'
  }
});

export const MockProductVisioTeleconseilFree: Product = new Product({
  id: 8,
  namespace: 'visioTeleconseilFree',
  description: 'Visio Téléconseil gratuit',
  imageUrl: 'visio.jpg',
  name: 'Visio',
  active: 1,
  productTypeId: MockProductTypeVisio.id,
  // productType: MockProductTypeVisio
});

export const MockProductChatMutualia: Product = new Product({
  id: 9,
  namespace: 'chatMutualia',
  description: 'Chat Téléconsultation',
  imageUrl: 'ecrit.jpg',
  name: 'Chat',
  active: 1,
  amount: 160,
  isTeleconsult: 1,
  productTypeId: MockProductTypeChat.id,
  // productType: MockProductTypeChat
});

export const MockProductAudioMutualia: Product = new Product({
  id: 10,
  namespace: 'audioMutualia',
  description: 'Audio Téléconsultation',
  imageUrl: 'audio.jpg',
  name: 'Audio',
  active: 1,
  amount: 160,
  isTeleconsult: 1,
  productTypeId: MockProductTypeAudio.id,
  // productType: MockProductTypeAudio
});

export const MockProductVisioMutualia: Product = new Product({
  id: 11,
  namespace: 'visioMutualia',
  description: 'Visio Téléconsultation',
  imageUrl: 'visio.jpg',
  name: 'Visio',
  active: 1,
  amount: 160,
  isTeleconsult: 1,
  productTypeId: MockProductTypeVisio.id,
  // productType: MockProductTypeVisio
});

export const MockProductTeleconsultChat: Product = new Product({
  id: 25,
  name: 'Chat',
  description: 'Téléconsultation écrite',
  namespace: 'chatTeleconsultation',
  imageUrl: 'ecrit.jpg',
  isTeleconsult: 1,
  active: 1,
  productTypeId: MockProductTypeChat.id,
  // productType: MockProductTypeChat
});

export const MockProductTeleconsultAudio: Product = new Product({
  id: 26,
  name: 'Audio',
  description: 'Téléconsultation audio',
  namespace: 'audioTeleconsultation',
  imageUrl: 'audio.jpg',
  isTeleconsult: 1,
  active: 1,
  productTypeId: MockProductTypeAudio.id,
  // productType: MockProductTypeAudio
});

export const MockProductTeleconsultVisio: Product = new Product({
  id: 27,
  name: 'Visio',
  description: 'Téléconsultation visio',
  namespace: 'visioTeleconsultation',
  imageUrl: 'visio.jpg',
  isTeleconsult: 1,
  active: 1,
  productTypeId: MockProductTypeVisio.id,
  // productType: MockProductTypeVisio
});

export const MockProductIrcemCall: Product = new Product({
  id: 28,
  name: 'Appel téléphonique',
  description: 'Appel télésecretariat',
  namespace: 'call',
  imageUrl: 'audio.jpg',
  isTeleconsult: 1,
  active: 1,
  productTypeId: MockProductTypeCall.id,
  // productType: MockProductTypeCall
});


export const MockProductVisioTeleconsult: Product = new Product({
  id: 29,
  namespace: 'visio',
  description: 'Visio Téléconseil',
  imageUrl: 'visio.jpg',
  name: 'Visio',
  isTeleconsult: 1,
  amount: 200,
  active: 1,
  productTypeId: MockProductTypeVisio.id,
  // productType: MockProductTypeVisio
});
