import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../services/user.service'
import React, { Component } from 'react';

const SignupPage = (props) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userEmail, setuserEmail] = useState('')
    const [userPassword, setuserPassword] = useState('')

    const navigate = useNavigate()

    const onSignup = async () => {
        if (firstName.length === 0) {
            alert('please enter your first name')
        }
        else if (lastName.length === 0) {
            alert('please enter yout last name')
        }
        else if (userEmail.length === 0) {
            alert('please enter Email')
        } else if (userPassword.length === 0) {
            alert('please enter Password')
        } else {
            const result = await signup(firstName, lastName, userEmail, userPassword)
            console.log(result)
            if (result) {
                navigate('/signin')
            }
        }
    }

    return (
        <div>
            <h1 className="header">Signup</h1>
            <div className="form">
                <div className="mb-3">
                    <label className="form-label">Firstname</label>
                    <input
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Lastname</label>
                    <input
                        onChange={(e) => {
                            setLastName(e.target.value)
                        }}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        onChange={(e) => {
                            setuserEmail(e.target.value)
                        }}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        onChange={(e) => {
                            setuserPassword(e.target.value)
                        }}
                        type="userPassword"
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <div>
                        Already have an account ? Signin <Link to="/signin">here</Link>
                    </div>
                    <button onClick={onSignup} className="btn btn-success">
                        Signup
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignupPage
