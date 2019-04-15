import {Observable, of} from 'rxjs';
import {MockChatTeleconsultAnswered, MockChatTeleconsultWithDebriefingAndPrescriptions, MockQuestionAnswered, Question1} from './mockQuestion';
import {
  MockProductAudioMutualia,
  MockProductAudioTeleconseil, MockProductAudioTeleconseilFree, MockProductChatMutualia, MockProductChatTeleconseil,
  MockProductChatTeleconseilFree,
  MockProductQuestionTeleconseil,
  MockProductQuestionTeleconseilFree, MockProductTeleconsultAudio, MockProductTeleconsultChat,
  MockProductTeleconsultVisio, MockProductVisioMutualia, MockProductVisioTeleconseil, MockProductVisioTeleconseilFree
} from './mockProduct';
import {MockPartnerMutualia, MockPartnerSanteclair} from './mockPartner';
import {LoopBackFilter, Question} from '@md-app/md-core';

const PRODUCTS = [
  MockProductQuestionTeleconseil,
  MockProductChatTeleconseil,
  MockProductAudioTeleconseil,
  MockProductVisioTeleconseil,
  MockProductQuestionTeleconseilFree,
  MockProductChatTeleconseilFree,
  MockProductAudioTeleconseilFree,
  MockProductVisioTeleconseilFree,
  MockProductChatMutualia,
  MockProductAudioMutualia,
  MockProductVisioMutualia,
  MockProductTeleconsultChat,
  MockProductTeleconsultAudio,
  MockProductTeleconsultVisio
];

const QUESTIONS: Question[] = [
  MockQuestionAnswered,
  Question1
];

export class MockQuestionApi {

  findById(): Observable<Question> {
    return of(Question1);
  }

  countPool(customHeaders?: Function): Observable<any> {
    return of(2);
  }

  hasQuestionRunning(options: any = {}, customHeaders?: Function): Observable<number> {
    return of(null);
  }

  patchAttributes(id: number, data: Question): Observable<any> {
    return of({});
  }

  calculInitialAmount(productId: any, couponAppUserId: any = {}, customHeaders?: Function): Observable<any> {
    if (productId === MockProductVisioMutualia.id) {
      return of({
        oShared: {
          partnerId: MockPartnerMutualia.id,
          bankAmount: 0,
          partnerAmount: 160
        },
        oAmount: {
          amount: 160,
          discount: 0,
          total: 160
        }
      });
    } else if (productId === MockProductQuestionTeleconseil.id) {
      if (!couponAppUserId) {
        return of({
          oShared: {
            partnerId: null,
            bankAmount: MockProductQuestionTeleconseil.amount,
            partnerAmount: null,
          },
          oAmount: {
            amount: MockProductQuestionTeleconseil.amount,
            discount: 0,
            total: MockProductQuestionTeleconseil.amount
          }
        });
      } else {
        return of({
          oShared: {
            partnerId: null,
            bankAmount: 420,
            partnerAmount: null,
          },
          oAmount: {
            amount: 420,
            discount: 180,
            total: 420
          }
        });
      }
    } else if (productId === MockProductTeleconsultAudio.id) {
      return of({
        oShared: {
          partnerId: MockPartnerSanteclair.id,
          bankAmount: null,
          partnerAmount: null,
        },
        oAmount: {
          amount: null,
          discount: 0,
          total: null
        }
      });

    } else {
      const exists = PRODUCTS.find(x => x.id === productId);
      return of({
        oShared: {
          partnerId: null,
          healthInsuranceAmount: null,
          bankAmount: exists.amount,
          partnerAmount: null
        }
      });
    }
  }

  getDoctorHistoric(id: any, limit: any = {}, skip: any = {}, customHeaders?: Function): Observable<any> {
    return of(QUESTIONS);
  }

  getCustomerHistoric(id: any, limit: any = {}, skip: any = {}, customHeaders?: Function): Observable<any> {
    return of(QUESTIONS);
  }

  findPool(id: any, customHeaders?: Function): Observable<Question[]> {
    return of(QUESTIONS);
  }

  create<T>(data: T, customHeaders?: Function): Observable<T> {
    return of();
  }

  countDoctorHistoric(id: any, customHeaders?: Function): Observable<any> {
    return of({ count: QUESTIONS.length });
  }

  count(where: any = {}, customHeaders?: Function): Observable<{ count: number }> {
    return of({ count: QUESTIONS.length });
  }

  find<T>(filter: LoopBackFilter = {}, customHeaders?: Function): Observable<Question[]> {
    return of(QUESTIONS);
  }

  numberUnread(req: any = {}, customHeaders?: Function): Observable<any> {
    return of({unread: 0});
  }

  cancel(id: any = {}, customHeaders?: Function): Observable<any> {
    return of({});
  }

  checkBayerQuestions(id: number, customHeaders?: Function): Observable<boolean> {
    return of(false);
  }

  getFiles(id: any, limit?: any, skip?: any, customHeaders?: Function): Observable<any> {
    return of([
      MockChatTeleconsultWithDebriefingAndPrescriptions,
      MockChatTeleconsultAnswered
    ]);
  }

  countFiles(id: any, customHeaders?: Function): Observable<any> {
    return of(2);
  }
}
