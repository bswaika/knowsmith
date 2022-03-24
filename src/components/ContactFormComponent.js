import React, { Component } from 'react'
import { Row, Col } from 'react-grid-system'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faBan } from '@fortawesome/free-solid-svg-icons'

import cx from 'classnames'
import defaults from '../styles/atomic-styles.module.css'

import '../styles/ContactFormComponent.css'

class ContactFormComponent extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        errors: {
            name: '',
            email: '',
            message: ''
        }
    }

    baseState = this.state

    handleChange = ({ target }) => {
        this.setState({
            ...this.state,
            [target.name]: target.value
        })
    }

    isEmptyObject = (obj) => {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false
        }
        return true
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        let errors = {}
        if (this.state.name.length <= 0) {
            errors.name = 'Name field is required'
        }

        if (this.state.email.length <= 0) {
            errors.emailError = true
            errors.email = 'Email field is required.'
        }

        if (this.state.message.length <= 0) {
            errors.message = 'Message field is required.'
        }

        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
            if (errors.emailError) {
                errors.email += ' Email entered is invalid.'
            } else {
                errors.email = 'Email entered is invalid.'
            }

        }

        if (this.isEmptyObject(errors)) {
            const data = {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            }

            

            try{
                const url = process.env.REACT_APP_API_URL
                // console.log(url)
                const options = {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }
                const res = await fetch(url, options)
                const response = await res.json()
                
                if(res.status === 200 && response.result === 'Message Sent') {
                    toast.dark(
                        <div style={{
                            padding: '1rem',
                            fontSize: '0.8em'
                        }} className={defaults.fontPoppins}>
                            <FontAwesomeIcon icon={faCheck} color='#ee3937' /> Thank you for reaching out! We will get back to you within <strong>an hour</strong>.
                        </div>
                    )
                } else {
                    throw new Error('Internal Server Error')
                }
                

            } catch(err){
                console.log(err)
                toast.dark(
                    <div style={{
                        padding: '1rem',
                        fontSize: '0.8em'
                    }} className={defaults.fontPoppins}>
                        <FontAwesomeIcon icon={faBan} color='#ee3937' /> Oops! There was some server issue. Please try sending the message again.
                    </div>
                )
            }
            
            
            this.setState(this.baseState)
        } else {
            this.setState({
                errors
            })
        }

    }

    render() {
        return (
            <div className={cx(defaults.fontOswald, "form-container")}>
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">
                                    <small>Name</small>
                                </label><br />
                                <input type="text" name="name" value={this.state.name} className="form-input" placeholder=" " onChange={this.handleChange} />
                                <span className="form-error">
                                    <small>{this.state.errors.name}</small>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    <small>Email</small>
                                </label><br />
                                <input type="text" name="email" value={this.state.email} className="form-input" placeholder=" " onChange={this.handleChange} />
                                <span className="form-error">
                                    <small>{this.state.errors.email}</small>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">
                                    <small>Message</small>
                                </label><br />
                                <textarea rows={6} name="message" value={this.state.message} className="form-input" onChange={this.handleChange}>
                                </textarea>
                                <span className="form-error">
                                    <small>{this.state.errors.message}</small>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={cx(defaults.btnDiv, "form-btnDiv")}>
                                <button type="submit" className={cx(defaults.btn, defaults.fontOswald, defaults.white, defaults.bgDarkGray)}>Send</button>
                            </div>
                        </Col>
                    </Row>
                </form>
                <ToastContainer position="top-center" progressStyle={{ backgroundColor: '#4f4f4f' }} />
            </div>
        )
    }
}

export default ContactFormComponent