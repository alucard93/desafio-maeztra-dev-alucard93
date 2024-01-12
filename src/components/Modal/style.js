import styled from 'styled-components'

export const ModalContainerStyled = styled.div`
  width: 100%;

  .background {
    position: fixed;

    width: 100%;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
  }

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 848px;
    height: 526px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .modalSucess {
    height: 400px;
    width: 400px;
    background-color: wheat;
  }

  .closeIsModal {
    all: unset;
    position: absolute;
    right: 0;
    top: -33px;

    color: #fff;
    font-family: Lato;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-transform: uppercase;
  }

  .container-info-modal {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12.5px;
  }

  .text-welcome {
    color: var(--Color-2, #464b54);
    text-align: center;
    font-family: Titillium Web;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
    text-transform: uppercase;
  }

  .text-handle {
    color: var(--Color-4, #787d83);
    text-align: center;
    font-family: Titillium Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px; /* 115% */
    display: inline-block;
    max-width: 260px;
    margin-bottom: 12px;
  }

  .strong-text-handle {
    color: var(--Color-4, #787d83);
    font-family: Titillium Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
  }

  .input-modal {
    all: unset;
    width: 100%;
    max-width: 308px;
    height: 40px;
    padding-left: 13px;

    border-radius: 10px;
    border: 1px solid var(--cor-neutra-color-5500-bebebe, #c4c4c4);
    background: var(--Branco, #fff);

    color: var(--Color-4, #787d83);
    font-family: Titillium Web;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
  }

  .btn-modal-send {
    all: unset;
    width: 100%;
    max-width: 322px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    border: 1px solid var(--cor-neutra-color-5500-bebebe, #c4c4c4);
    border-radius: 10px;
    background: #faa500;
    color: var(--txt-light-01, #fff);
    font-family: Titillium Web;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 166.667% */
    text-transform: uppercase;
    gap: 8px;
  }

  @media (max-width: 1024px) {
    .container-img-modal {
      display: none;
    }

    .modal {
      max-width: 298px;
      height: 307px;

      transform: translate(-50%, -82%);
    }

    .input-modal {
      max-width: 244px;
    }

    .btn-modal-send {
      max-width: 258px;
    }

    .text-handle {
      font-size: 16px;
    }

    .strong-text-handle {
      font-size: 16px;
    }

    .closeIsModal {
      top: -22px;
    }
  }
`
