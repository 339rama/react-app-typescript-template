import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorP } from '../error';
import UDDatePicker, { DatePickerProps } from './control';

type ComponentProps = {
  name?: string;
};
type WrapperProps = {
  name: string;
};

const UDFormDatePicker = (props: DatePickerProps & WrapperProps) => {
  const { name, ...componentProps } = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { errors, control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={(props) => <UDDatePicker {...props} {...componentProps} />}
      />
      <ErrorMessage errors={errors} name={name || ''} as={ErrorP} />
    </>
  );
};

export default UDFormDatePicker;
