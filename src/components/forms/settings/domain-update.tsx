import {
  FieldError,
  FieldErrors,
  FieldValue,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
import FormGenerator from '../form-generator';

type Props = {
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldError>;
};

const DomainUpdate = ({ name, register, errors }: Props) => {
  return (
    <div className="flex gap-2 pt-5 items-end w-[400px]">
      <FormGenerator
        label="Domain Name"
        name="domain"
        type="text"
        register={register}
        errors={errors}
        placeholder={name}
        inputType="input"
      />
    </div>
  );
};

export default DomainUpdate;
