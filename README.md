# Gaming Solution Server APi.
### Required headers
HTTP Headers
1. 'GF-API-KEY': 'abcedef'
2. 'GF-AFFILIATE-CODE': 'abcde'

This is the value the client needs to communicate with the server.
The value for each client is different.
Please manage your affiliate code and API key through Sveltekit's env.

### sign-up API
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

> Sign up
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
{
    code: 2100,
    message: "The email is a duplicate."
}
{
    code: 2000,
    message: "Invalid header information. "
}
{
    code: 2200,
    message: "Invalid authentication code."
}
{
    code: 2201,
    message: "Invalid promo code."
}
````

### sign-in API
> Sign in
- endpoint: /api/sign-in
- method: post
- data: email(string), password(string)
- cookie name: accesstoken, refreshtoken
- credentials:"include" (fetch), withCredentials: true (axios)

#### response
````
// success
{
    code: 1002, 
    message: "Sign in successfully 🎉"
}

// error
{
    code: 3005,
    message: "The email or password is incorrect."
} 
````
> acceetoken
- endpoint: /api/accesstoken
- method: post
- cookie name: accesstoken
- credentials:"include" (fetch), withCredentials: true (axios)
- expiration time : 1m
- description: The AccessToken is used to authenticate the user's session. This token can contain information such as the user's username, email, role, and permissions.

#### response
````
// error
{
    code: 3005,
    message: "The email or password is incorrect."
}
{
    code: 4001,
    message: "The token has expired."
}
````

> refreshtoken
- endpoint: /api/accesstoken
- method: post
- cookie name: refreshtoken
- credentials:"include" (fetch), withCredentials: true (axios)
- expiration time : 1h
- description: The Refresh Token is used to allow users to continue logging into the system after their AccessToken has expired.

#### response
````
// error
{
    code: 3005,
    message: "The email or password is incorrect."
}
{
    code: 4001,
    message: "The token has expired."
}
````

>Sign in success
- endpoint: /api/sign-in/success
- method: post
- credentials:"include" (fetch), withCredentials: true (axios)
- description: Gets information about the accesstoken.

#### response
````
// error
{
    code: 3005,
    message: "The email or password is incorrect."
}
{
    code: 4001,
    message: "Used when a user first connects."
}
````

>sign out
- endpoint: /api/sign-out
- method: post
- credentials:"include" (fetch), withCredentials: true (axios)
- description: Initialiseer het accesstoken.

#### response
````
// error
{
    code: 1004,
    message: "Sign out successfully"
}
````

