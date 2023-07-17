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
- data: page/(number), search/(string)(optional) <- Searches from 2 characters or more.
- description: Search for title, vendor, and type together.

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
- data: idx(number)/, nick (string)

#### response
````
//200
{
    link: string
}

//400
````

> Get info
- endpoint: /api/casino/info
- method: post
- data: idx

#### response
````
//200
{
  title: 'Korean Speed Baccarat B',
  thumbnail: 'path/to/image.png',
  vendor: 'evolution',
  type: 'baccarat'
}

//400
````

> Get bet result list
- endpoint: /api/casino/bet-result
- method: post

#### response
````
//200
[
    {
        title: '5 Lions Megaways', 
        nick: 'user5931960781', 
        betAmount: -250, 
        profitAmount: -250
    }
]
````