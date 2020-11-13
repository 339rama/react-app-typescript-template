import { uniqueId } from 'lodash';
import Icon, { IconProps } from 'modules/ud-ui/icon';
import React, { useMemo } from 'react';
import Select, {
  components,
  IndicatorProps,
  MultiValueProps,
  OptionTypeBase,
  Props as SyncProps,
} from 'react-select';
import AsyncSelect, { Props as AsyncProps } from 'react-select/async';
import UDLabel, { UDLabelProps } from '../../label';
import { Container, customStyles } from './styles';

type UDSyncSelectProps<T> = SyncProps<T> & {
  async?: false;
};
type UDAsyncSelectProps<T> = AsyncProps<T> & {
  async: true;
};

type CommonProps = {
  label?: string;
  labelProps?: Omit<UDLabelProps, 'children'>;
  icon?: IconProps;
  storeValues?: boolean;
  disabled?: boolean;
  isMulti?: boolean;
};

export type UDSelectProps<T> = CommonProps &
  (UDSyncSelectProps<T> | UDAsyncSelectProps<T>);

const UDSelect = <T extends OptionTypeBase>(props: UDSelectProps<T>) => {
  const {
    storeValues,
    label,
    labelProps,
    async,
    icon = { name: 'chevron-down', width: 16, height: 16 },
    styles,
    isMulti,
    ...otherProps
  } = props;

  const id = useMemo(() => uniqueId('ud-form-select'), []);

  const DropdownIndicator = useMemo(
    () => (props: IndicatorProps<any>) => {
      return (
        <components.DropdownIndicator {...props}>
          <div>{!icon ? null : <Icon {...icon} />}</div>
        </components.DropdownIndicator>
      );
    },
    [icon]
  );
  const MultiValueContainer = useMemo(
    () => (props: MultiValueProps<any>) => {
      return (
        <div>
          <components.MultiValueContainer {...props} />
        </div>
      );
    },
    []
  );

  let Component: () => JSX.Element;

  if (async === true) {
    Component = () => (
      <Container>
        <AsyncSelect
          {...otherProps}
          inputId={id}
          isMulti={isMulti}
          loadOptions={props.loadOptions}
          components={{ DropdownIndicator, MultiValueContainer }}
          styles={{ ...customStyles, ...styles }}
          isDisabled={otherProps?.disabled}
        />
      </Container>
    );
  }
  Component = () => (
    <Container>
      <Select
        {...otherProps}
        inputId={id}
        isMulti={isMulti}
        components={{ DropdownIndicator }}
        styles={{ ...customStyles, ...styles }}
        isDisabled={otherProps?.disabled}
      />
    </Container>
  );
  return (
    <>
      {label && (
        <UDLabel htmlFor={id} {...labelProps}>
          {label}
        </UDLabel>
      )}
      <Component />
    </>
  );
};

export default UDSelect;
