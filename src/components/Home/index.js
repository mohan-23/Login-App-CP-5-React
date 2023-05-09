import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isValid: false}

  onClickButton = () => {
    this.setState(prevState => ({isValid: !prevState.isValid}))
  }

  render() {
    const {isValid} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <Message isValid={isValid} />
          {isValid ? (
            <Logout logout={this.onClickButton} />
          ) : (
            <Login login={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
