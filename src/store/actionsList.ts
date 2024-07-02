// Мы собираем все екшены в одну кучу, чтобы иметь доступ ко всем екшенам за раз
// Список всех этих екшенов мы используем в нашем кастомном хуке - useGetAction
import { selectCount, resetCounter, setIncrementCount, setDecrementCount } from "./slices/test";
import { resetContactForm, setContactForm } from "./slices/contactForm";
export {
  selectCount, resetCounter, setIncrementCount, setDecrementCount, //"test" Actions
  resetContactForm, setContactForm, //"contactForm" Actions
} 

// // Мы собираем все екшены в одну кучу, чтобы иметь доступ ко всем екшенам за раз
// // Список всех этих екшенов мы используем в нашем кастомном хуке - useGetAction
// Также создадим кастомную функцию "extractActions". 
// Чтобы не импортировать екшены по одному вручную из слайса, просто будем импортировать весь слайс, и при помощи кастомной функций будем вытягивать екшены из нее
// import { extractActions } from './extractActions';
// import * as testSlice from './slices/test';
// import * as contactFormSlice from './slices/contactForm';

// const testActions = extractActions(testSlice);
// const contactFormActions = extractActions(contactFormSlice);
// // const anotherActions = extractActions(anotherSlice);

// const actionsList = {
//   ...testActions,
//   ...contactFormActions,
//   // ...anotherActions,
// };

// export default actionsList;
