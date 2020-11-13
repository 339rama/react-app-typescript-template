import { setLocale } from 'yup';

export function setupYup() {
  setLocale({
    mixed: {
      required: 'Поле обязательно для заполнения',
    },
    string: {
      min: ({ min }) => `Минимальная длина - ${min}`,
      email: 'Введите валидный Email',
    },
  });
}
