import styled from 'styled-components';
import { StylesConfig } from 'react-select';

export const Container = styled.div`
  width: 100%;
`;

export const customStyles: StylesConfig = {
  option: (_, state) => ({
    color: state.isSelected ? '#fff' : '#262626',
    backgroundColor: state.isSelected ? '#f7464e' : '#fff',
    padding: '8px 18px',
    transition: '50ms ease',
    ':hover': {
      backgroundColor: '#6a6a6a',
      color: '#fff',
    },
  }),
  control: (_, { selectProps: { menuIsOpen }, isFocused }) => ({
    display: 'flex',
    height: '38px',
    borderRadius: menuIsOpen ? '4px 4px 0 0' : '4px',
    borderWidth: '1px',
    borderStyle: 'solid',
    backgroundColor: '#efefef',
    borderColor: 'transparent',
    boxShadow: isFocused ? '0 0 0 0.2rem rgba(0, 123, 255, 0.25)' : '',
    transition: '0.1s ease',
    borderBottomColor: menuIsOpen ? 'transparent' : '',
  }),
  container: (_, { selectProps: { isDisabled } }) => ({
    position: 'relative',
    cursor: `${isDisabled ? 'not-allowed' : 'pointer'}`,
    minHeight: '38px',
    ...(isDisabled ? { pointerEvents: 'none' } : undefined),
    filter: `${isDisabled && 'grayscale(1)'}`,
  }),
  menu: () => ({
    position: 'absolute',
    borderTop: '1px solid #e4e4e4',
    width: '100%',
    borderRadius: '0 0 4px 4px',
    backgroundColor: '#fff',
    color: '#1489CB',
    zIndex: 10,
    overflow: 'hidden',
    boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.16)',
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  placeholder: (styles) => ({
    ...styles,
    display: 'block',
    color: '#BBC0CA',
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: '0 16px',
  }),
  singleValue: (styles) => ({
    ...styles,
    lineHeight: '2',
  }),
};
