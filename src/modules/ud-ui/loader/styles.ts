import styled from 'styled-components';

type ContainerProps = {
  behaviour: 'relative' | 'fixed' | 'absolute'
}
export const Container = styled.div<ContainerProps>`
  position: ${(props) => props.behaviour};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  background: white;
  z-index: 2;
`;

export const Loader = styled.div`
  & {
    display: inline-block;
    position: relative;
    width: 48px;
    height: 48px;
  }
  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    margin: 4px;
    border: 4px solid ${({ theme }) => theme.black};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.black} transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
