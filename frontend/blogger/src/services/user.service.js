import axios from 'axios'
import { settings } from '../config'
import React, { Component } from 'react';

export const signup = async (firstName, lastName, userEmail, userPassword) => {
    const url = settings.server + '/bloggers/signup'

    let result
    try {
        console.log(firstName + ' ' + lastName)
        result = await axios.post(url, {
            firstName,
            lastName,
            userEmail,
            userPassword
        })
        result = result.data
    } catch (ex) {
        result = ex
    }

    return result
}

export const signin = async (userEmail, userPassword) => {
    const url = settings.server + '/bloggers/signin'
    console.log(userEmail)
    let result
    try {
        console.log("Hello")
        result = await axios.post(url, {
            userEmail,
            userPassword,
        })
        result = result.data
    } catch (ex) {
        console.log(ex)
    }
    return result
}
