
import {of as observableOf, Observable} from 'rxjs';
import {Question1} from './mockQuestion';
import {Question} from '@md-app/md-core';

export class MockQuestionService {

  public findById(id: number): Observable<Question> {
    return observableOf(Question1);
  }

  public findOneRunning(): Observable<number> {
    return observableOf(null);
  }

  public countTeleconsultation(where: any = {}, customHeaders?: Function): Observable<{ count: number }> {
    return observableOf({ count: 3 });
  }

  public countTeleconsultationByPartner(partnerId: number): Observable<any> {
    return observableOf(3);
  }

  getMessageEndQuestion(question: Question) {
    if (question.userIdEndedQuestion) {
      if (question.customerUserId === question.userIdEndedQuestion) {
        return 'Conversation terminée par le patient.';
      } else if (question.doctorUserId === question.userIdEndedQuestion) {
        return 'Conversation terminée par le docteur.';
      }
    }
  }
}
