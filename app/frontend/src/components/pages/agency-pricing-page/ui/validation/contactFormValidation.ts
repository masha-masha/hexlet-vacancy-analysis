import * as yup from "yup";


const phoneRegExp = /^\+7(?:[()\s-]*\d){10}$/;

export const contactFormSchema = yup.object().shape({
 companyName: yup
  .string()
  .min(3, "Название компании должно содержать не менее 3 символов")
  .max(100, "Название компании не должно превышать 100 символов")
  .required('Поле "Название компании" обязательно для заполнения'),

 fullName: yup
  .string()
  .min(3, "Ваше имя должно содержать не менее 3 символов")
  .max(100, "Ваше имя не должно превышать 100 символов")
  .required('Поле "Ваше имя" обязательно для заполнения'),

 email: yup
  .string()
  .email("Введите корректный Email адрес")
  .required('Поле "Email" обязательно для заполнения'),

 phone: yup
  .string()
  .required('Поле "Телефон" обязательно для заполнения')
  .matches(phoneRegExp, "Введите корректный номер телефона, начинающийся с +7"),
});