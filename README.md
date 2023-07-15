# Gaming Solution Server APi.
## Required headers
HTTP Headers
1. 'GF-API-KEY': 'abcedef'
2. 'GF-AFFILIATE-CODE': 'abcde'

This is the value the client needs to communicate with the server.
The value for each client is different.
Please manage your affiliate code and API key through Sveltekit's env.

## Casino API
> Get casino list
- endpoint: /api/casino/list
- method: post
- data: , page/(number)(optional), search/(string)(optional) <- Searches from 4 characters or more.

#### response
````
//200
{
    list: [
        {
            idx: number,
            game_id: string,
            title: string,
            provider: string,
            thumnail: string,
            vendor: string,
            type: string,
            is_open: string,
            reg_date: string
        }
    ],
    totalNumber: number <- Number of total lists
}

//400
````

> Casino Launch
- endpoint: /api/casino/launch
- method: post
- data: idx(number), nick (string)

#### response
````
//200
{
    link: string
}

//400
````

> Get info
- endpoint: /api/casino/launch
- methdo: post
- data: idx

#### response
````
//200
{
    title: info.title, 
    thumbnail: info.thumbnail, 
    vendor: info.vendor, 
    type: info.type 
}

//400
````


