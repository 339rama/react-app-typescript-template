import React, { useCallback, useMemo } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { CalendarIcon } from './styles';
import { StyledInput } from '../../input/control/styles';
import LocaleUtils from 'react-day-picker/moment';

import 'react-day-picker/lib/style.css';
import { DayPickerInputProps } from 'react-day-picker/types/Props';
import { FormControlProps } from 'react-bootstrap';
import UDLabel, { UDLabelProps } from '../../label';
import { uniqueId } from 'lodash';
import 'moment/locale/ru';
import moment from 'moment';

export type DatePickerProps = {
  withIcon?: boolean;
  label?: string;
  labelProps?: Omit<UDLabelProps, 'children'>;
} & FormControlProps &
  DayPickerInputProps;

const dateFormat = 'DD.MM.YYYY';
const dateServerFormat = 'YYYY-MM-DD';

const UDDatePicker = (props: DatePickerProps) => {
  const {
    withIcon,
    dayPickerProps,
    label,
    labelProps,
    onBlur,
    onChange,
    ...otherProps
  } = props;
  const id = useMemo(() => uniqueId('ud-form-input'), []);

  let Component: () => JSX.Element;

  const handleDayChange = useCallback(
    (e) => {
      const date = moment(e).format(dateServerFormat);
      onChange && onChange(date || e);
      onBlur && onBlur(date || e);
    },
    [onChange, onBlur]
  );

  Component = () => (
    <div style={{ position: 'relative', width: '100%' }}>
      <DayPickerInput
        placeholder={`${LocaleUtils.formatDate(new Date(), dateFormat)}`}
        {...otherProps}
        style={{ width: '100%' }}
        onDayChange={handleDayChange}
        formatDate={(date, format, locale) =>
          LocaleUtils.formatDate(date, dateFormat, locale)
        }
        parseDate={(date, format, locale) =>
          LocaleUtils.parseDate(date, dateServerFormat, locale)
        }
        component={StyledInput}
        dayPickerProps={{
          ...dayPickerProps,
          localeUtils: LocaleUtils,
          locale: 'ru',
        }}
      />
      {withIcon && <CalendarIcon name="calendar" width={20} height={20} />}
    </div>
  );

  return (
    <>
      {label && (
        <UDLabel {...labelProps} htmlFor={id}>
          {label}
        </UDLabel>
      )}
      <Component />
    </>
  );
};

export default UDDatePicker;
