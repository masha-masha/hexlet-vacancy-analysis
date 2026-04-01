import { Title, Stack, TextInput, Button, Text } from "@mantine/core";
import { useForm, type SubmitHandler, type UseFormRegister, type FieldErrors } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "./validation/contactFormValidation";

export interface ContactFormData {
 companyName: string;
 fullName: string;
 email: string;
 phone: string;
}

type FormInputProps = {
 id: number;
 placeholder: string;
 fieldName: keyof ContactFormData; 
 type?: string;
};

const FormField = ({ 
  placeholder, 
  fieldName, 
  type = "text", 
  register, 
  errors 
}: { 
  placeholder: string, 
  fieldName: keyof ContactFormData, 
  type?: string,
  register: UseFormRegister<ContactFormData>,
  errors: FieldErrors<ContactFormData>
}) => {
 return (
  <TextInput
   type={type}
   placeholder={placeholder}
   size="lg"
   classNames={{
    input:
     "!bg-[#1A2F4B] !text-white !border-[#4ECDC4] !placeholder-gray-500 !rounded-lg",
   }}
   {...register(fieldName)}
   error={errors[fieldName]?.message}
  />
 );
};

const ContactForm = () => {
 const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
 } = useForm<ContactFormData>({
  resolver: yupResolver(contactFormSchema),
  defaultValues: {
   companyName: "",
   fullName: "",
   email: "",
   phone: "+7",
  },
 });

 const onSubmit: SubmitHandler<ContactFormData> = (data) => {
  console.log(data);
  reset();
 };

 const dataForInputs: FormInputProps[] = [
  { id: 1, placeholder: "Название компании", fieldName: "companyName" },
  { id: 2, placeholder: "Ваше имя", fieldName: "fullName" },
  { id: 3, placeholder: "Email", fieldName: "email", type: "email" },
  { id: 4, placeholder: "Телефон", fieldName: "phone", type: "tel" },
 ];

 return (
  <Stack>
   <Title order={2} c="white" mb="xl" ta="left">
    Оставить заявку
   </Title>
   
   <Stack component="form" onSubmit={handleSubmit(onSubmit)} gap="md">
    {dataForInputs.map((input) => (
     <FormField
      key={input.id}
      placeholder={input.placeholder}
      fieldName={input.fieldName}
      type={input.type}
      register={register} 
      errors={errors}    
     />
    ))}

    <Button
     variant="filled"
     type="submit"
     fullWidth
     size="lg"
     color="#4ECDC4"
     radius="md"
     mt="md"
    >
     Отправить заявку
    </Button>
    
    <Text c="dimmed" size="sm" ta="center" mt="md">
     Мы свяжемся с вами в течение 24 часов
    </Text>
   </Stack>
  </Stack>
 );
};

export default ContactForm;

