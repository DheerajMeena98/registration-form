import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
    isFormSubmitted: false,
  }

  renderRegistrationForm = () => {
    const {isFirstNameEmpty, isLastNameEmpty} = this.state

    return (
      <>
        <h1 className="registration-heading"> Registration </h1>
        <form className="login-form-container" onSubmit={this.submitForm}>
          <div className="first-name-container">
            <label htmlFor="first name" className="first-name-last-name-text">
              {' '}
              FIRST NAME{' '}
            </label>
            <input
              type="text"
              id="first name"
              className="login-input"
              placeholder="First name"
              onBlur={this.onBlurFirstName}
            />
            {isFirstNameEmpty ? (
              <p className="error-message"> Required</p>
            ) : null}
          </div>
          <div className="last-name-container">
            <label htmlFor="last name" className="first-name-last-name-text">
              {' '}
              LAST NAME{' '}
            </label>
            <input
              type="text"
              id="last name"
              placeholder="Last name"
              onBlur={this.onBlurLastName}
              className="login-input"
            />
            {isLastNameEmpty ? (
              <p className="error-message"> Required</p>
            ) : null}
          </div>
          <button type="submit" className="submit-button">
            {' '}
            Submit{' '}
          </button>
        </form>
      </>
    )
  }

  renderSuccessfulRegistrationForm = () => (
    <>
      <h1 className="registration-heading"> Registration </h1>
      <div className="registration-success-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p> Submitted Successfully </p>
        <button
          type="button"
          className="submit-button"
          onClick={this.submitAnotherForm}
        >
          {' '}
          Submit Another Response{' '}
        </button>
      </div>
    </>
  )

  submitAnotherForm = () => {
    this.setState({isFormSubmitted: false})
  }

  onBlurFirstName = event => {
    const firstNameInput = event.target.value
    if (firstNameInput === '') {
      this.setState({isFirstNameEmpty: true})
    } else {
      this.setState({isFirstNameEmpty: false, firstName: firstNameInput})
    }
  }

  onBlurLastName = event => {
    const lastNameInput = event.target.value
    if (lastNameInput === '') {
      this.setState({isLastNameEmpty: true})
    } else {
      this.setState({isLastNameEmpty: false, lastName: lastNameInput})
    }
  }

  onSuccessSubmit = () => {
    this.setState({isFormSubmitted: true})
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.onSuccessSubmit()
    } else if (firstName === '' && lastName !== '') {
      this.setState({isFormSubmitted: false, isFirstNameEmpty: true})
    } else if (firstName !== '' && lastName === '') {
      this.setState({isFormSubmitted: false, isLastNameEmpty: true})
    } else {
      this.setState({
        isFormSubmitted: false,
        isFirstNameEmpty: true,
        isLastNameEmpty: true,
      })
    }
  }

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="registration-form-bcg-container">
        {!isFormSubmitted
          ? this.renderRegistrationForm()
          : this.renderSuccessfulRegistrationForm()}
      </div>
    )
  }
}

export default RegistrationForm
