import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

const SwitchApiMount = {
  isInitial: INITIAL,
  isSuccess: SUCCESS,
  isFailure: FAILURE,
  isLoading: LOADING,
}

class Home extends Component {
  state = {statusApi: SwitchApiMount.isInitial}

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({statusApi: SwitchApiMount.isLoading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/restaurants-list/offers'
    const options = {
      method: 'GET',
      Authorization: `Bearer ${jwtToken}`,
    }
    const fetchData = await fetch(url, options)
    if (fetchData.ok === true) {
      const data = await fetchData.json()
      console.log(data)
      this.setState({statusApi: SwitchApiMount.isSuccess})
    } else {
      this.setState({statusApi: SwitchApiMount.isFailure})
    }
  }

  renderSuccess = () => {}

  renderFailure = () => {}

  renderLoading = () => (
    <div>
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderSwitch = () => {
    const {statusApi} = this.state
    switch (statusApi) {
      case SwitchApiMount.isSuccess:
        return this.renderSuccess()
      case SwitchApiMount.isFailure:
        return this.renderFailure()
      case SwitchApiMount.isLoading:
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <p>hlo</p>
        {this.renderSwitch()}
      </div>
    )
  }
}

export default Home
