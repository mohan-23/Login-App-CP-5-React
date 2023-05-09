import './index.css'

const Message = props => {
  const {isValid} = props

  const message = isValid ? 'Welcome User' : 'Please Login'

  return <h1 className="heading">{message}</h1>
}

export default Message
