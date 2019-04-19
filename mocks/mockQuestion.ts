import {MockCustomerBayer, MockCustomerMutualia, MockCustomerSanteclair, MockCustomerTeleconseil} from './mockCustomer';
import {MockSpecialityDermatology, MockSpecialityGynecology, MockSpecialityNutrition} from './mockSpeciality';
import {
  MockProductChatTeleconseil, MockProductIrcemCall,
  MockProductQuestionTeleconseil, MockProductTeleconsultAudio,
  MockProductTeleconsultChat, MockProductVisioTeleconseil,
  MockProductVisioTeleconsult
} from './mockProduct';
import {MockDoctorDermato, MockDoctorGyneco} from './mockDoctor';
import * as moment from 'moment';
import {MockAppUserSanteclair} from './mockAppUser';
import {AppUser, Chat, Debriefing, Prescription, Question, QuestionOrder, QuestionVisio} from '@md-app/md-core';

export const Question1 = new Question({
  id: 1,
  type: 'question',
  dateQuestion: moment().subtract(10, 'minutes').toDate(),
  dateTaken: moment().subtract(8, 'minutes').toDate(),
  dateAnswer: moment().subtract(6, 'minutes').toDate(),
  dateAdditionalAnswer: moment().subtract(4, 'minutes').toDate(),
  productId: MockProductQuestionTeleconseil.id,
  product: MockProductQuestionTeleconseil,
  specialityId: MockSpecialityDermatology.id,
  speciality: MockSpecialityDermatology,
  status: 'answered',
  customerUserId: MockCustomerTeleconseil.appUserId,
  customerUser: new AppUser({
    id: MockCustomerTeleconseil.appUserId,
    email: MockCustomerTeleconseil.appUser.email,
    customer: MockCustomerTeleconseil
  }),
  doctorUserId: MockDoctorDermato.appUserId,
  doctorUser: new AppUser({
    id: MockDoctorDermato.appUserId,
    email: MockDoctorDermato.appUser.email,
    doctor: MockDoctorDermato
  })
});

export const QuestionGyneco = new Question({
  id: 1,
  type: 'question',
  dateQuestion: moment().subtract(10, 'minutes').toDate(),
  dateTaken: moment().subtract(8, 'minutes').toDate(),
  dateAnswer: moment().subtract(6, 'minutes').toDate(),
  dateAdditionalAnswer: moment().subtract(4, 'minutes').toDate(),
  productId: MockProductQuestionTeleconseil.id,
  product: MockProductQuestionTeleconseil,
  specialityId: MockSpecialityGynecology.id,
  speciality: MockSpecialityGynecology,
  status: 'answered',
  customerUserId: MockCustomerTeleconseil.appUserId,
  customerUser: new AppUser({
    id: MockCustomerTeleconseil.appUserId,
    email: MockCustomerTeleconseil.appUser.email,
    customer: MockCustomerTeleconseil
  }),
  doctorUserId: MockDoctorGyneco.appUserId,
  doctorUser: new AppUser({
    id: MockDoctorGyneco.appUserId,
    email: MockDoctorGyneco.appUser.email,
    doctor: MockDoctorGyneco
  })
});

export const MockQuestionAvailable = new Question({
  id: 1,
  type: 'question',
  questionText: 'Docteur, je souffre, je suis malade, completement malaaaaaaaade, que puis-je faire ? aidez-moi senor doctor',
  productId: MockProductQuestionTeleconseil.id,
  product: MockProductQuestionTeleconseil,
  specialityId: MockSpecialityDermatology.id,
  speciality: MockSpecialityDermatology,
  dateQuestion: moment().subtract(10, 'minutes').toDate(),
  status: 'available',
  customerUserId: MockCustomerTeleconseil.appUserId,
  customerUser: new AppUser({
    id: MockCustomerTeleconseil.appUserId,
    email: MockCustomerTeleconseil.appUser.email,
    customer: MockCustomerTeleconseil
  })
});

export const MockQuestionAvailableTimeExceeded = new Question({
  id: 1,
  type: 'question',
  questionText: 'Docteur, je souffre, je suis malade, completement malaaaaaaaade, que puis-je faire ? aidez-moi senor doctor',
  productId: MockProductQuestionTeleconseil.id,
  specialityId: MockSpecialityDermatology.id,
  speciality: MockSpecialityDermatology,
  dateQuestion: moment().subtract(16, 'minutes').toDate(),
  status: 'available',
  customerUserId: MockCustomerTeleconseil.appUserId,
  customerUser: new AppUser({
    id: MockCustomerTeleconseil.appUserId,
    email: MockCustomerTeleconseil.appUser.email,
    customer: MockCustomerTeleconseil
  })
});

export const MockQuestionParlogynAvailableTimeExceeded = new Question({
  id: 1,
  type: 'question',
  questionText: 'Docteur, je souffre, je suis malade, completement malaaaaaaaade, que puis-je faire ? aidez-moi senor doctor',
  productId: MockProductQuestionTeleconseil.id,
  specialityId: MockSpecialityDermatology.id,
  speciality: MockSpecialityDermatology,
  dateQuestion: moment().subtract(16, 'minutes').toDate(),
  status: 'available',
  customerUserId: MockCustomerBayer.appUserId,
  customerUser: new AppUser({
    id: MockCustomerBayer.appUserId,
    email: MockCustomerBayer.appUser.email,
    customer: MockCustomerBayer
  })
});

export const MockQuestionTeleconsultAvailableTimeExceeded = new Question({
  id: 1,
  type: 'question',
  questionText: 'Docteur, je souffre, je suis malade, completement malaaaaaaaade, que puis-je faire ? aidez-moi senor doctor',
  productId: MockProductTeleconsultChat.id,
  product: MockProductTeleconsultChat,
  specialityId: MockSpecialityDermatology.id,
  speciality: MockSpecialityDermatology,
  isTeleconsult: 1,
  dateQuestion: moment().subtract(16, 'minutes').toDate(),
  status: 'available',
  customerUserId: MockCustomerSanteclair.appUserId,
  customerUser: new AppUser({
    id: MockCustomerSanteclair.appUserId,
    email: MockCustomerSanteclair.appUser.email,
    customer: MockCustomerSanteclair
  })
});

export const MockQuestionBeforeAvailable = new Question({
  id: 10,
  type: 'question',
  questionText: 'Docteur, je souffre, je suis malade, completement malaaaaaaaade, que puis-je faire ? aidez-moi senor doctor',
  productId: MockProductQuestionTeleconseil.id,
  product: MockProductQuestionTeleconseil,
  specialityId: MockSpecialityDermatology.id,
  speciality: MockSpecialityDermatology,
  dateQuestion: moment().subtract(10, 'minutes').toDate(),
  status: 'before_available',
  customerUserId: 50,
  customerUser: new AppUser({
    id: 50,
    email: 'dev+jp@mesdocteurs.com',
    customer: MockCustomerTeleconseil
  })
});

export const MockQuestionCreated = new Question({
  id: 1,
  type: 'question',
  questionText: 'Docteur, je souffre, je suis malade, completement malaaaaaaaade, que puis-je faire ? aidez-moi senor doctor',
  productId: MockProductQuestionTeleconseil.id,
  specialityId: MockSpecialityDermatology.id,
  speciality: MockSpecialityDermatology,
  dateQuestion: moment().subtract(10, 'minutes').toDate(),
  status: 'created',
  customerUserId: 50,
  customerUser: new AppUser({
    id: 50,
    email: 'dev+jp@mesdocteurs.com',
    customer: MockCustomerTeleconseil
  })
});

export const MockQuestionTaken = new Question({
  id: 1,
  type: 'question',
  dateQuestion: moment().subtract(10, 'minutes').toDate(),
  dateTaken: moment().subtract(3, 'minutes').toDate(),
  questionText: 'Docteur, je souffre, je suis malade, completement malaaaaaaaade, que puis-je faire ? aidez-moi senor doctor',
  productId: MockProductQuestionTeleconseil.id,
  product: MockProductQuestionTeleconseil,
  specialityId: MockSpecialityDermatology.id,
  speciality: MockSpecialityDermatology,
  status: 'taken',
  customerUserId: 50,
  customerUser: new AppUser({
    id: 50,
    email: 'dev+jp@mesdocteurs.com',
    customer: MockCustomerTeleconseil
  }),
  doctorUserId: MockDoctorDermato.appUserId,
  doctorUser: new AppUser({
    id: MockDoctorDermato.appUserId,
    email: 'dev+anna@mesdocteurs.com',
    doctor: MockDoctorDermato
  })
});

export const MockQuestionAnswered = new Question({
  id: 4,
  type: 'question',
  questionText: 'Docteur, je souffre, je suis malade, completement malaaaaaaaade, que puis-je faire ? aidez-moi senor doctor',
  answerText: 'Je ne peux rien pour vous, cordialement.',
  additionalAnswerText: 'Je vous conseille la Suisse. Amitiés',
  productId: MockProductQuestionTeleconseil.id,
  product: MockProductQuestionTeleconseil,
  specialityId: MockSpecialityDermatology.id,
  speciality: MockSpecialityDermatology,
  dateQuestion: moment().subtract(10, 'minutes').toDate(),
  dateTaken: moment().subtract(8, 'minutes').toDate(),
  dateAnswer: moment().subtract(6, 'minutes').toDate(),
  dateAdditionalAnswer: moment().subtract(4, 'minutes').toDate(),
  status: 'answered',
  doctorUserId: MockDoctorDermato.appUserId,
  doctorUser: new AppUser({
    id: MockDoctorDermato.appUserId,
    email: 'dev+anna@mesdocteurs.com',
    doctor: MockDoctorDermato
  }),
  customerUserId: 50,
  customerUser: new AppUser({
    id: 50,
    email: 'dev+jp@mesdocteurs.com',
    customer: MockCustomerTeleconseil
  }),
  questionOrders: [
    new QuestionOrder({
      amount: 600,
      state: 'validated',
      status: 'initial',
      date: new Date()
    })
  ]
});

// Chat before available
export const MockQuestionChatBeforeAvailable = new Question({
  id: 10,
  type: 'chat',
  questionText: 'Docteur, je souffre, je suis malade, completement malaaaaaaaade, que puis-je faire ? aidez-moi senor doctor',
  productId: MockProductChatTeleconseil.id,
  product: MockProductChatTeleconseil,
  specialityId: MockSpecialityDermatology.id,
  speciality: MockSpecialityDermatology,
  dateQuestion: moment().subtract(10, 'minutes').toDate(),
  status: 'before_available',
  customerUserId: 50,
  customerUser: new AppUser({
    id: 50,
    email: 'dev+jp@mesdocteurs.com',
    customer: MockCustomerTeleconseil
  })
});

export const MockChatTeleconsultAnswered = new Question({
  id: 7,
  type: 'chat',
  dateQuestion: moment().subtract(10, 'minutes').toDate(),
  dateTaken: moment().subtract(4, 'minutes').toDate(),
  dateAnswer: moment().toDate(),
  questionText: 'Docteur, je souffre, je suis malade, completement malaaaaaaaade, que puis-je faire ? aidez-moi senor doctor',
  productId: MockProductTeleconsultChat.id,
  specialityId: MockSpecialityNutrition.id,
  speciality: MockSpecialityNutrition,
  isTeleconsult: 1,
  status: 'answered',
  doctorUserId: MockDoctorDermato.appUserId,
  doctorUser: new AppUser({
    id: MockDoctorDermato.appUserId,
    email: 'dev+anna@mesdocteurs.com',
    doctor: MockDoctorDermato
  }),
  customerUserId: 32,
  // Pb de redondance
  // customerUser: MockAppUserMutualia,
  customerUser: new AppUser({
    id: 32,
    email: 'mutualia@mesdocteurs.com',
    status: 'enabled',
    consentmentsToAppuser: [],
    customer: MockCustomerMutualia
  }),
  questionOrders: [
    new QuestionOrder({
      amount: 600,
      state: 'validated',
      status: 'initial',
      date: new Date()
    })
  ],
  chats: [
    new Chat({
      role: 'doctor',
      userId: 1,
      questionId: 1,
      message: 'Bonjour Steeve pouvez-vous m\'en dire plus ?'
    }),
    new Chat({
      role: 'customer',
      userId: 2,
      questionId: 1,
      message: 'J\'ai mal a mon pied'
    })
  ],
  prescriptions: [],
  debriefing: new Debriefing({
    content: 'Debriefing de ouf',
  })
});

export const MockQuestionChatTaken = new Question({
  id: 1,
  type: 'chat',
  dateQuestion: moment().subtract(10, 'minutes').toDate(),
  dateTaken: moment().subtract(3, 'minutes').toDate(),
  questionText: 'Docteur, je souffre, je suis malade, completement malaaaaaaaade, que puis-je faire ? aidez-moi senor doctor',
  productId: MockProductChatTeleconseil.id,
  product: MockProductChatTeleconseil,
  specialityId: MockSpecialityDermatology.id,
  speciality: MockSpecialityDermatology,
  status: 'taken',
  customerUserId: 50,
  customerUser: new AppUser({
    id: 50,
    email: 'dev+jp@mesdocteurs.com',
    customer: MockCustomerTeleconseil
  }),
  doctorUserId: MockDoctorDermato.appUserId,
  doctorUser: new AppUser({
    id: MockDoctorDermato.appUserId,
    email: 'dev+anna@mesdocteurs.com',
    doctor: MockDoctorDermato
  }),
  chats: [
    new Chat({
      id: 1,
      questionId: 1,
      userId: MockDoctorDermato.appUserId,
      message: 'test chat',
      role: 'doctor',
      date: new Date()
    }),
    new Chat({
      id: 2,
      questionId: 1,
      userId: MockCustomerTeleconseil.appUserId,
      message: 'reponse chat',
      role: 'customer',
      date: new Date()
    }),
  ]
});

export const MockQuestionChatTakenNoMessage = new Question({
  id: 154,
  type: 'chat',
  dateQuestion: moment().subtract(10, 'minutes').toDate(),
  dateTaken: moment().subtract(3, 'minutes').toDate(),
  questionText: 'Docteur, je souffre, je suis malade, completement malaaaaaaaade, que puis-je faire ? aidez-moi senor doctor',
  productId: MockProductChatTeleconseil.id,
  product: MockProductChatTeleconseil,
  specialityId: MockSpecialityDermatology.id,
  speciality: MockSpecialityDermatology,
  status: 'taken',
  customerUserId: 50,
  customerUser: new AppUser({
    id: 50,
    email: 'dev+jp@mesdocteurs.com',
    customer: MockCustomerTeleconseil
  }),
  doctorUserId: MockDoctorDermato.appUserId,
  doctorUser: new AppUser({
    id: MockDoctorDermato.appUserId,
    email: 'dev+anna@mesdocteurs.com',
    doctor: MockDoctorDermato
  }),
  chats: [
  ]
});

export const MockQuestionChatAnswered = new Question({
  id: 43,
  type: 'chat',
  dateQuestion: moment().subtract(10, 'minutes').toDate(),
  dateTaken: moment().subtract(4, 'minutes').toDate(),
  dateAnswer: moment().toDate(),
  questionText: 'Docteur, je souffre, je suis malade, completement malaaaaaaaade, que puis-je faire ? aidez-moi senor doctor',
  productId: MockProductChatTeleconseil.id,
  product: MockProductChatTeleconseil,
  specialityId: MockSpecialityNutrition.id,
  speciality: MockSpecialityNutrition,
  status: 'answered',
  customerUserId: MockCustomerTeleconseil.appUserId,
  customerUser: new AppUser({
    id: MockCustomerTeleconseil.appUserId,
    email: 'dev@mesdocteurs.com',
    status: 'enabled',
    consentmentsToAppuser: [],
    customer: MockCustomerMutualia
  }),
  doctorUser: new AppUser({
    id: MockDoctorDermato.appUserId,
    email: 'dev+anna@mesdocteurs.com',
    status: 'enabled',
    consentmentsToAppuser: [],
    doctor: MockDoctorDermato
  }),
  questionOrders: [
    new QuestionOrder({
      amount: 200,
      state: 'validated',
      status: 'initial',
      date: new Date()
    })
  ],
  chats: []
});


// Visio santéclair taken
export const MockQuestionVisioSanteclairTaken = new Question({
  id: 1,
  type: 'visio',
  questionText: 'Docteur, je souffre, je suis malade, completement malaaaaaaaade, que puis-je faire ? aidez-moi senor doctor',
  productId: MockProductVisioTeleconsult.id,
  product: MockProductVisioTeleconsult,
  specialityId: MockSpecialityDermatology.id,
  speciality: MockSpecialityDermatology,
  status: 'taken',
  customerUserId: MockAppUserSanteclair.id,
  customerUser: MockAppUserSanteclair,
  doctorUserId: MockDoctorDermato.appUserId,
  doctorUser: new AppUser({
    id: MockDoctorDermato.appUserId,
    email: 'dev+anna@mesdocteurs.com',
    doctor: MockDoctorDermato
  }),
  visio: new QuestionVisio({
    id: 1,
    customerToken: 'AAAA',
    doctorToken: 'BBBB',
    questionId: 1,
    customerCodec: JSON.stringify({ 'VP8': 'probably', 'H264': 'probably' }),
    doctorCodec: JSON.stringify({ 'VP8': 'probably', 'H264': 'probably' }),
  })
});

// Vision teleconseil available
export const MockVisioAvailable = new Question({
  id: 44,
  type: 'visio',
  dateQuestion: moment().subtract(10, 'minutes').toDate(),
  questionText: 'Docteur, je souffre, je suis malade, completement malaaaaaaaade, que puis-je faire ? aidez-moi senor doctor',
  productId: MockProductVisioTeleconseil.id,
  product: MockProductVisioTeleconseil,
  specialityId: MockSpecialityNutrition.id,
  speciality: MockSpecialityNutrition,
  status: 'available',
  customerUserId: MockCustomerTeleconseil.appUserId,
  customerUser: new AppUser({
    id: MockCustomerTeleconseil.appUserId,
    email: 'dev@mesdocteurs.com',
    status: 'enabled',
    consentmentsToAppuser: [],
    customer: MockCustomerMutualia
  }),
  questionOrders: [
    new QuestionOrder({
      amount: 200,
      state: 'validated',
      status: 'initial',
      date: new Date()
    })
  ]
});

// Telesecretariat
export const MockCallAvailable = new Question({
  id: 355,
  type: 'call',
  dateQuestion: moment().subtract(10, 'minutes').toDate(),
  questionText: 'Rappeler le patient au 06.06.06.06.06',
  productId: MockProductIrcemCall.id,
  product: MockProductIrcemCall,
  specialityId: MockSpecialityNutrition.id,
  speciality: MockSpecialityNutrition,
  status: 'available',
  customerUserId: MockCustomerTeleconseil.appUserId,
  customerUser: new AppUser({
    id: MockCustomerTeleconseil.appUserId,
    email: 'dev@mesdocteurs.com',
    status: 'enabled',
    consentmentsToAppuser: [],
    customer: MockCustomerMutualia
  }),
  questionOrders: [
    new QuestionOrder({
      amount: 200,
      state: 'validated',
      status: 'initial',
      date: new Date()
    })
  ]
});

export const MockQuestionVisioBeforeAvailable = new Question({
  id: 10,
  type: 'visio',
  questionText: 'Docteur, je souffre, je suis malade, completement malaaaaaaaade, que puis-je faire ? aidez-moi senor doctor',
  productId: MockProductVisioTeleconseil.id,
  product: MockProductVisioTeleconseil,
  specialityId: MockSpecialityDermatology.id,
  speciality: MockSpecialityDermatology,
  dateQuestion: moment().subtract(10, 'minutes').toDate(),
  status: 'before_available',
  customerUserId: 50,
  customerUser: new AppUser({
    id: 50,
    email: 'dev+jp@mesdocteurs.com',
    customer: MockCustomerTeleconseil
  })
});


export const MockQuestionAudioAnswered = new Question({
  id: 454,
  type: 'audio',
  dateQuestion: moment().subtract(10, 'minutes').toDate(),
  dateTaken: moment().subtract(4, 'minutes').toDate(),
  dateAnswer: moment().toDate(),
  questionText: 'Docteur, je souffre, je suis malade, completement malaaaaaaaade, que puis-je faire ? aidez-moi senor doctor',
  productId: MockProductTeleconsultAudio.id,
  product: MockProductTeleconsultAudio,
  specialityId: MockSpecialityNutrition.id,
  speciality: MockSpecialityNutrition,
  status: 'answered',
  customerUserId: MockCustomerTeleconseil.appUserId,
  customerUser: new AppUser({
    id: MockCustomerTeleconseil.appUserId,
    email: 'dev@mesdocteurs.com',
    status: 'enabled',
    consentmentsToAppuser: [],
    customer: MockCustomerMutualia
  }),
  questionOrders: [
    new QuestionOrder({
      amount: 200,
      state: 'validated',
      status: 'initial',
      date: new Date()
    })
  ],
  chats: []
});

export const MockChatTeleconsultWithDebriefingAndPrescriptions = new Question({
  id: 34,
  type: 'chat',
  dateQuestion: moment().subtract(10, 'minutes').toDate(),
  dateTaken: moment().subtract(4, 'minutes').toDate(),
  dateAnswer: moment().toDate(),
  questionText: 'Docteur, je souffre, je suis malade, completement malaaaaaaaade, que puis-je faire ? aidez-moi senor doctor',
  productId: MockProductTeleconsultChat.id,
  specialityId: MockSpecialityNutrition.id,
  speciality: MockSpecialityNutrition,
  isTeleconsult: 1,
  status: 'answered',
  doctorUserId: MockDoctorDermato.appUserId,
  doctorUser: new AppUser({
    id: MockDoctorDermato.appUserId,
    email: 'dev+anna@mesdocteurs.com',
    doctor: MockDoctorDermato
  }),
  customerUserId: 32,
  customerUser: new AppUser({
    id: 32,
    email: 'mutualia@mesdocteurs.com',
    status: 'enabled',
    consentmentsToAppuser: [],
    customer: MockCustomerMutualia
  }),
  questionOrders: [
    new QuestionOrder({
      amount: 600,
      state: 'validated',
      status: 'initial',
      date: new Date()
    })
  ],
  chats: [
    new Chat({
      role: 'doctor',
      userId: 1,
      questionId: 1,
      message: 'Bonjour Steeve pouvez-vous m\'en dire plus ?'
    }),
    new Chat({
      role: 'customer',
      userId: 2,
      questionId: 1,
      message: 'J\'ai mal a mon pied'
    })
  ],
  prescriptions: [
    new Prescription({
      date: new Date(),
      message: '12 doliprane de l\'heure pour peter la forme'
    }),
    new Prescription({
      date: new Date(),
      message: '300 doliprane de l\'heure pour peter la forme'
    }),
  ],
  debriefing: new Debriefing({
    content: 'Debriefing de ouf',
  })
});
