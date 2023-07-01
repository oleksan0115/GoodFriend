# Gaming Solution Server APi.
### Required headers
HTTP Headers
1. 'GF-API-KEY': 'abcedef'
2.'GF-AFFILIATE-CODE': 'abcde'

This is the value the client needs to communicate with the server.
The value for each client is different.
Please manage your affiliate code and API key through Sveltekit's env.

### Add the sign-up API
> Send a auth code by email
- endpoint: /api/account/email
- method: post
- data: email (string)

#### response
````
//success
{
    code: 1001,
    message: "sent a verification code to your email.",
    timeout: EMAIL_VERIFICATION_TIME // <-- The auth code expiration time.
}

// error
{
    code: 2100,
    message: "The email is a duplicate."
}

{
    code: 3000,
    message: "Email delivery failed, please try again."
}
````

> Sign up API
- endpoint: /api/account/sign-up
- method: post
- data: email(string), authCode(string), promoCode(stirng)/optional, password(string)

#### response
````
//success
{
    code: 1000, 
    message: "Sign up successfully 🎉"
}

// error

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
````
