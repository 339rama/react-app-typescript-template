import React from 'react';

import * as Components from './styles';

type Props = {
  behaviour: 'absolute' | 'fixed' | 'relative'
}
const UDLoader = (props: Props) => {
  return (
    <Components.Container behaviour={props.behaviour}>
      <Components.Loader>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Components.Loader>
    </Components.Container>
  );
};

UDLoader.defaultProps = {
  behaviour: 'fixed'
}

export default UDLoader;
