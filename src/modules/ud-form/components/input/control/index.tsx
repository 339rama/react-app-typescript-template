import { uniqueId } from 'lodash';
import UDLabel, { UDLabelProps } from 'modules/ud-form/components/label';
import React, { ReactElement, Ref, useMemo } from 'react';
import { FormControlProps, InputGroup, InputGroupProps } from 'react-bootstrap';
import { StyledInput } from './styles';

export type UDInputProps = {
  label?: string;
  className?: string;
  fillColor?: boolean;
  placeholder?: string;
  isError?: boolean;
  name?: string;
  labelProps?: Omit<UDLabelProps, 'children'>;
  defaultValue?: string;
} & FormControlProps &
  InputGroupProps;

const Component: React.ForwardRefRenderFunction<any, UDInputProps> = (
  props: UDInputProps,
  ref
) => {
  const { label, className, labelProps, name, ...otherProps } = props;
  const id = useMemo(() => uniqueId('ud-form-input'), []);
  return (
    <>
      {label && (
        <UDLabel {...labelProps} htmlFor={id}>
          {label}
        </UDLabel>
      )}
      <InputGroup className={className}>
        <StyledInput
          id={id}
          ref={ref}
          name={name}
          {...otherProps}
          placeholder={otherProps.placeholder}
        />
      </InputGroup>
    </>
  );
};

const UDInput = React.forwardRef(Component) as (
  props: UDInputProps & { ref?: Ref<HTMLInputElement> }
) => ReactElement;
export default UDInput;
