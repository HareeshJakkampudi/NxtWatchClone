import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  Container,
  FormContainer,
  ImageContainer,
  Image,
  Form,
  InputContainer,
  InputLabel,
  Input,
  ShowPasswordContainer,
  CheckBox,
  CheckBoxLabel,
  LoginButton,
  ErrorMsg,
} from './style/Login'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isError: false,
    errMsg: '',
    showPassword: false,
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onChangeShowPassword = e => {
    this.setState({showPassword: e.target.checked})
  }

  handleResponse = jwtToken => {
    const {history} = this.props
    console.log(history)
    Cookies.set('_nxtwth', jwtToken, {expires: 7})
    history.replace('/')
  }

  handleErr = errMsg => {
    this.setState({errMsg, isError: true})
  }

  handleSubmitForm = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()
    if (response.ok) {
      this.handleResponse(fetchedData.jwt_token)
    } else {
      this.handleErr(fetchedData.error_msg)
    }
  }

  renderInputUserName = () => {
    const {username} = this.state
    const token = Cookies.get('_nxtwth')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <InputContainer>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </InputContainer>
    )
  }

  renderInputPassword = () => {
    const {password, showPassword} = this.state

    return (
      <InputContainer>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <Input
          type={showPassword ? 'text' : 'password'}
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </InputContainer>
    )
  }

  renderShowPassword = () => {
    const {showPassword} = this.state
    return (
      <ShowPasswordContainer>
        <CheckBox
          type="checkbox"
          id="show password"
          checked={showPassword}
          onChange={this.onChangeShowPassword}
        />
        <CheckBoxLabel htmlFor="show password">Show Password</CheckBoxLabel>
      </ShowPasswordContainer>
    )
  }

  render() {
    const {isError, errMsg} = this.state
    return (
      <Container>
        <FormContainer>
          <ImageContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="web"
            />
          </ImageContainer>
          <Form onSubmit={this.handleSubmitForm}>
            {this.renderInputUserName()}
            {this.renderInputPassword()}
            {this.renderShowPassword()}
            <LoginButton type="submit">Login</LoginButton>
            {isError && <ErrorMsg>*{errMsg}</ErrorMsg>}
          </Form>
        </FormContainer>
      </Container>
    )
  }
}
export default Login
