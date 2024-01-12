import { WhyBuyContainerStyled } from './style'
import earth from '../../assets/earth.svg'
import house from '../../assets/house.svg'
import box from '../../assets/box.svg'
import ticket from '../../assets/ticket.svg'
import truck from '../../assets/truck.svg'

const WhyBuy = () => {
  return (
    <WhyBuyContainerStyled>
      <h3 className='text-why-buy'>Por que comprar na Maztra?</h3>
      <div className="wrapper-img-paragraph-why-buy">
        <div className="container-img-paragraph-why-buy">
          <img src={earth} alt="icone planeta terra" />
          <div className="container-paragraph-why-buy">
            <p className="strong-why-buy">Produtos importados</p>
            <p className="paragraph-why-buy">Produto de Alta Qualidade</p>
          </div>
        </div>

        <div className="container-img-paragraph-why-buy">
          <img src={house} alt="icone de uma casa" />
          <div className="container-paragraph-why-buy">
            <p className="strong-why-buy">Estoque no Brazil</p>
            <p className="paragraph-why-buy">Produtos mais perto de você!</p>
          </div>
        </div>

        <div className="container-img-paragraph-why-buy">
          <img src={box} alt="icone de uma casa" />
          <div className="container-paragraph-why-buy">
            <p className="strong-why-buy">Trocas Garantidas</p>
            <p className="paragraph-why-buy">
              Trocas em até 48 horas, vejas as regras
            </p>
          </div>
        </div>

        <div className="container-img-paragraph-why-buy">
          <img src={ticket} alt="icone de uma casa" />
          <div className="container-paragraph-why-buy">
            <p className="strong-why-buy">Ganhe 5% off</p>
            <p className="paragraph-why-buy">Pagando à vista no Cartão</p>
          </div>
        </div>

        <div className="container-img-paragraph-why-buy">
          <img src={truck} alt="icone de uma casa" />
          <div className="container-paragraph-why-buy">
            <p className="strong-why-buy">Frete Grátis</p>
            <p className="paragraph-why-buy">Em compras acima de R$ 499,00</p>
          </div>
        </div>
      </div>
    </WhyBuyContainerStyled>
  )
}

export default WhyBuy
