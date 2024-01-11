import styled from 'styled-components'

export const FooterFinalContainerStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85px;
  background: #353535;

  .container-footer-final {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1598px;
    margin: 0 auto;
  }

  .container-img-footer-final {
    display: flex;
    gap: 22px;
  }

  .container-img-footer-final:nth-child(0n + 2) {
    background-color: red;
    margin-left: 139px;
  }
`
