import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormContainer = styled.div`
  width: 90%;
  max-width: 450px;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.12);
`
export const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px;
  margin-top: 16px;
`
export const Image = styled.img`
  width: 150px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 12px;
`
export const InputLabel = styled.label`
  color: #94a3b8;
  font-size: 12px;
  font-weight: bold;
`
export const Input = styled.input`
  color: #475569;
  font-size: 14px;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  margin-top: 6px;
  padding: 8px 16px;
  outline: none;
  &::placeholder {
    color: #94a3b8;
    font-weight: 400;
  }
  &:focus {
    background-color: #ebebeb;
  }
  @media screen and (min-width: 768px) {
    height: 50px;
    font-size: 16px;
  }
`
export const ShowPasswordContainer = styled(InputContainer)`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`
export const CheckBox = styled.input.attrs({type: 'checkbox'})`
  width: 20px;
  height: 16px;
  //   top: 4px;
  position: relative;
`
export const CheckBoxLabel = styled.label`
  color: #1e293b;
  font-size: 14px;
  font-weight: 500;
  margin-left: 5px;
`
export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  margin: 32px 0;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background-color: #3b82f6;
  border-radius: 8px;
  padding: 8px 16px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 12px;
  margin-top: 12px;
`
