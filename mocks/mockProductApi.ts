
import {of as observableOf, Observable} from 'rxjs';
import {
  MockProductAudioMutualia,
  MockProductAudioTeleconseil, MockProductAudioTeleconseilFree, MockProductChatMutualia, MockProductChatTeleconseil,
  MockProductChatTeleconseilFree, MockProductIrcemCall,
  MockProductQuestionTeleconseil,
  MockProductQuestionTeleconseilFree, MockProductTeleconsultAudio, MockProductTeleconsultChat,
  MockProductTeleconsultVisio, MockProductVisioMutualia, MockProductVisioTeleconseil, MockProductVisioTeleconseilFree
} from './mockProduct';
import {Product} from '@md-app/md-core';

export class MockProductApi {

  public find(): Observable<Product[]> {
    return observableOf([
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
      MockProductTeleconsultVisio,
      MockProductIrcemCall
    ]);
  }

  public findById(): Observable<Product> {
    return observableOf(
      MockProductQuestionTeleconseil
    );
  }
}
