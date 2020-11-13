import { ErrorMessage } from '@hookform/error-message';
import React, {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorP } from '../error';

type ComponentProps = {
  name?: string;
};
type WrapperProps = {
  name: string;
};
type Options = {
  wrapController?: boolean;
};

type ReturnType = <T extends ComponentProps, C>(
  component:
    | ((props: T) => JSX.Element)
    | ForwardRefExoticComponent<PropsWithoutRef<T> & RefAttributes<C>>,
  options?: Options
) => (props: T & WrapperProps) => JSX.Element;

const UDFormFieldWrapper: ReturnType = (component, options = {}) => {
  return (props) => {
    const { wrapController } = options;
    const { name, ...componentProps } = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register: ref, errors, control } = useFormContext();
    if (wrapController) {
      const Component = component as (props: any) => JSX.Element;
      return (
        <>
          <Controller
            control={control}
            name={name}
            render={(props) => (
              <Component
                {...props}
                isError={name && errors[name]}
                {...componentProps}
              />
            )}
          />
          <ErrorMessage errors={errors} name={name || ''} as={ErrorP} />
        </>
      );
    }
    const Component = component as ForwardRefExoticComponent<
      PropsWithoutRef<unknown> & RefAttributes<unknown>
    >;
    return (
      <>
        <Component
          ref={ref}
          name={name}
          isError={name && errors[name]}
          {...componentProps}
        />
        <ErrorMessage errors={errors} name={name || ''} as={ErrorP} />
      </>
    );
  };
};

export default UDFormFieldWrapper;
