import UDLabel, { UDLabelProps } from 'modules/ud-form/components/label';
import React, { ReactElement, Ref, useMemo } from 'react';
import {
  Form,
  FormControlProps,
  InputGroup,
  InputGroupProps,
} from 'react-bootstrap';
import { uniqueId } from 'lodash';

export type UDCheckboxProps = {
  label?: string;
  labelExtra?: string;
  className?: string;
  fillColor?: boolean;
  placeholder?: string;
  isError?: boolean;
  name?: string;
  labelProps?: Omit<UDLabelProps, 'children'>;
  defaultValue?: string;
} & Omit<FormControlProps, 'type'> &
  InputGroupProps;

const Component: React.ForwardRefRenderFunction<any, UDCheckboxProps> = (
  props: UDCheckboxProps,
  ref
) => {
  const {
    label,
    labelExtra,
    className,
    labelProps,
    name,
    ...otherProps
  } = props;
  const id = useMemo(() => uniqueId('ud-form-input'), []);
  return (
    <>
      {label && (
        <UDLabel {...labelProps} htmlFor={id}>
          {label}
        </UDLabel>
      )}
      <InputGroup className={className}>
        <Form.Check type="checkbox" id={id}>
          <Form.Check.Input
            type="checkbox"
            name={name}
            ref={ref}
            {...otherProps}
          />
          {labelExtra && <Form.Check.Label>{labelExtra}</Form.Check.Label>}
        </Form.Check>
      </InputGroup>
    </>
  );
};

const UDCheckbox = React.forwardRef(Component) as (
  props: UDCheckboxProps & { ref?: Ref<HTMLInputElement> }
) => ReactElement;
export default UDCheckbox;
