import styled from 'styled-components';

export const CustomOverlayStyled = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  z-index: 999;
  animation: showOverlay 0.2s linear forwards;

  @keyframes showOverlay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
