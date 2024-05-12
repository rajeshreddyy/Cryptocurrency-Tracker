// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {coinType} = props
  const {currencyName, currencyLogo, euroValue, usdValue, id} = coinType

  console.log(currencyName)

  return (
    <li id={`cryptoId${id}`} className="crypto-currency-item">
      <div className="currency-container">
        <img alt={currencyName} src={currencyLogo} className="currency-logo" />
        <p>{currencyName} </p>
      </div>

      <div className="currency-rate-container">
        <p className="usd-value"> {usdValue} </p>
        <p className="euro-value"> {euroValue} </p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
