// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoCurrencies: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrencies()
  }

  getCryptoCurrencies = async () => {
    const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'
    const response = await fetch(apiUrl)
    const currencies = await response.json()

    const cryptoCurrenciesArray = await currencies.map(eachCurrency =>
      this.getFormattedData(eachCurrency),
    )

    this.setState({cryptoCurrencies: cryptoCurrenciesArray, isLoading: false})
    console.log(cryptoCurrenciesArray)
  }

  renderLoader = () => (
    <div className="loader" testid="loader">
      <Loader type="TailSpin" color=" #ffffff" height={30} width={30} />
    </div>
  )

  renderCryptocurrencyTracker = cryptoCurrencies => (
    <>
      <div>
        <h1 className="cryptocurrency-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-img"
        />
      </div>

      <div className="container">
        <div className="currency-container">
          <div className="row-container">
            <h1 className="coin-type-heading">Coin Type</h1>
            <div className="currency-type">
              <h1 className="currency-in-USD"> USD</h1>
              <h1 className="currency-euro">EURO</h1>
            </div>
          </div>
        </div>

        <ul className="currency-list">
          {cryptoCurrencies.map(eachCurency => (
            <CryptocurrencyItem key={eachCurency.id} coinType={eachCurency} />
          ))}
        </ul>
      </div>
    </>
  )

  getFormattedData = currency => ({
    currencyName: currency.currency_name,
    usdValue: currency.usd_value,
    euroValue: currency.euro_value,
    id: currency.id,
    currencyLogo: currency.currency_logo,
  })

  render() {
    const {cryptoCurrencies, isLoading} = this.state
    console.log(isLoading)

    return (
      <div className="crypto-container">
        {isLoading
          ? this.renderLoader()
          : this.renderCryptocurrencyTracker(cryptoCurrencies)}
      </div>
    )
  }
}

export default CryptocurrenciesList
