import {Speciality} from '@md-app/md-core';

export const MockSpecialityGynecology: Speciality = new Speciality({
  id: 1,
  name: 'Gynéco',
  profession: 'Gynécologue',
  icon: 'grossesse',
  color: 'pink-2',
  position: 1,
  status: 'enabled',
  list: 'primary',
  imageUrl: 'https://www.mesdocteurs.com/shared/assets/img/landing-pages/gynecologie.jpg'
});

export const MockSpecialityDermatology: Speciality = new Speciality({
  id: 2,
  name: 'Dermatologie',
  profession: 'Dermatologue',
  icon: 'dermatologie',
  color: 'yellow',
  position: 8,
  status: 'enabled',
  list: 'primary',
  imageUrl: 'https://www.mesdocteurs.com/shared/assets/img/articles-seo/examen-dermatologique.jpg'
});

export const MockSpecialityNutrition: Speciality = new Speciality({
  id: 3,
  name: 'Nutrition',
  profession: 'Nutritioniste',
  icon: 'nutrition',
  color: 'red',
  status: 'enabled',
  list: 'secondary',
  imageUrl: 'https://www.mesdocteurs.com/shared/assets/img/landing-pages/gastro-enterologue-en-ligne.jpg'
});

export const MockSpecialityPediatry: Speciality = new Speciality({
  id: 5,
  name: 'Pédiatrie',
  profession: 'Pédiatre',
  icon: 'pediatrie',
  color: 'blue',
  position: 2,
  status: 'enabled',
  list: 'primary',
  imageUrl: 'https://www.mesdocteurs.com/shared/assets/img/landing-pages/pediatrie.jpg'
});

export const MockSpecialityOther: Speciality = new Speciality({
  id: 12,
  name: 'Autres',
  profession: 'Autres',
  icon: 'others',
  color: 'black',
  position: 1,
  status: 'enabled',
  list: 'primary',
  imageUrl: 'https://www.mesdocteurs.com/shared/assets/img/landing-pages/question-sante.jpg'
});
