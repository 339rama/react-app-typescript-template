import styled, { keyframes } from 'styled-components';

const edgeAnimation = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const StyledAnimation = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  border-radius: 4px;
  background: rgb(255, 0, 0);
  background: linear-gradient(to right, #f0f0f0 0%, rgba(227, 221, 221, 1) 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: ${edgeAnimation} 2s linear infinite;
`;
