import { PartnerBrandsContainerStyled } from './style'

import comma from '../../assets/comma.png'
import melissa from '../../assets/melissa.png'
import forever from '../../assets/forever.png'
import zara from '../../assets/zara.png'
import ann from '../../assets/ann.png'

const PartnerBrands = () => {
  return (
    <PartnerBrandsContainerStyled>
      <h3 className="text-partner-brand">Marcas Parceiras</h3>
      <div className="wrapper-img-paragraph-partner-brand">
        <div className="container-img-paragraph-partner-brand">
          <img
            className="img-partner-brand"
            src={comma}
            alt="icone marca comma"
          />
        </div>

        <div className="container-img-paragraph-partner-brand">
          <img
            className="img-partner-brand"
            src={melissa}
            alt="icone marca melissa"
          />
        </div>

        <div className="container-img-paragraph-partner-brand">
          <img
            className="img-partner-brand"
            src={forever}
            alt="icone marca forever"
          />
        </div>

        <div className="container-img-paragraph-partner-brand">
          <img
            className="img-partner-brand"
            src={zara}
            alt="icone marca zara"
          />
        </div>

        <div className="container-img-paragraph-partner-brand">
          <img
            className="img-partner-brand"
            src={ann}
            alt="icone marca ann taylor"
          />
        </div>
      </div>
    </PartnerBrandsContainerStyled>
  )
}

export default PartnerBrands
