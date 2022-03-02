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
    const url2 = settings.server + `/bloggers/getprofile`
    console.log(userEmail)
    let result, response
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

    try {
        response = await axios.post(url2,
            {
                userEmail,
            })
        response = response.data
    } catch (ex) {
        console.log(ex)
    }

    console.log(response)
    sessionStorage['firstName'] = response.firstName
    sessionStorage['lastName'] = response.lastName
    sessionStorage['userCity'] = response.userCity
    sessionStorage['userState'] = response.userState
    sessionStorage['userCountry'] = response.userCountry
    sessionStorage['userPostalCode'] = response.userPostalCode
    sessionStorage['userBirthDate'] = response.userBirthDate
    sessionStorage['userGender'] = response.userGender
    return result
}


export const updateprofile = async (firstName, lastName, userEmail, userCity, userState, userCountry, userPostalCode, userBirthDate, userGender) => {
    const url = settings.server + `/bloggers/updateprofile`
    let result
    try {
        result = await axios.post(url,
            {
                firstName, lastName, userEmail, userCity, userState, userCountry,
                userPostalCode, userBirthDate, userGender,
            },
        )
        result = result.data
    }
    catch (ex) {
        console.log(ex)
    }
    sessionStorage['firstName'] = result.firstName
    sessionStorage['lastName'] = result.lastName
    sessionStorage['userCity'] = result.userCity
    sessionStorage['userState'] = result.userState
    sessionStorage['userCountry'] = result.userCountry
    sessionStorage['userPostalCode'] = result.userPostalCode
    sessionStorage['userBirthDate'] = result.userBirthDate
    sessionStorage['userGender'] = result.userGender
    return result
}

