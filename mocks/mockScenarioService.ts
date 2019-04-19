import {Speciality} from '@md-app/md-core';


const SPECIALITY: Speciality = new Speciality({
  id: 1,
  name: 'Gynéco',
  profession: 'Gynécologue'
});

const ASPECIALITY: Speciality[] = [];
ASPECIALITY.push(SPECIALITY);

export class MockScenarioService {

  // find(): Observable<Speciality[]> {
  //   return Observable.of(ASPECIALITY);
  // }
}
