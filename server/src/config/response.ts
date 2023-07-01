import { Result, ResultEmailSendComplete } from "../types/response"
import { EMAIL_VERIFICATION_TIME } from "./setting.config"

//complete
export const signUpComplete: Result = {
    code: 1000, 
    message: "Sign up successfully 🎉"
}

export const emailSendComplete: ResultEmailSendComplete = {
    code: 1001,
    message: "sent a auth code to your email.",
    timeout: EMAIL_VERIFICATION_TIME
} 


// Duplicate //
export const emailDuplicateError: Result = {
    code: 2100,
    message: "The email is a duplicate."
}

// validation //
export const headersValidationError: Result = {
    code: 2000,
    message: "Invalid header information. "
}

export const authCodeValidationError: Result = {
    code: 2200,
    message: "Invalid authentication code."
}

export const promoCodeValidationError: Result = {
    code: 2201,
    message: "Invalid promo code."
}


// failed
export const emailFailedSend: Result = {
    code: 3000,
    message: "Email sending failed, please try again."
}