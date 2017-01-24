# Apisauce Quick Start

```js
// showLastCommitMessageForThisLibrary.js
import {create} from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://api.github.com/',
  headers: {'Accept': 'application/vnd.github.v3+json'}
})

// start making calls
api
  .get('repos/skellock/apisauce/commits')
  .then((response) => response.data[0].commit.message)
  .then(console.log)

// customizing headers per-request
api.post('/users', { name: 'steve' }, { headers: {'x-gigawatts': '1.21' } })

```
# Documentation

## Create an API

You create an api by calling `.create()` and passing in a configuration object.

```js
const api = create({baseURL: 'https://api.github.com/'})
```

The only required property is `baseURL` and it should be the starting point for
your API.  It can contain a sub-path and a port as well.

```js
const api = create({baseURL: 'https://example.com/api/v3/'})
```

HTTP request headers for all requests can be included as well.

```js
const api = create({
  baseURL: '...',
  headers: {
    'X-API-KEY': '123',
    'X-MARKS-THE-SPOT': 'yarrrrr'
  }
})
```

## Calling The API

With your fresh `api`, you can now call it like this:

```js
api.get('repos/skellock/apisauce/commits')
api.head('me')
api.delete('users/69')
api.post('todos', {note: 'jump around'}, {headers: {'x-ray': 'machine'}})
api.patch('servers/1', {live: false})
api.put('servers/1', {live: true})
```

`get`, `head`, and `delete` accept 3 parameters - (Difference = params):

* url - the relative path to the API (required)
* params - Object - query string variables (optional)
* axiosConfig - Object - config passed along to the `axios` request (optional)

`post`, `put`, and `patch` accept 3 parameters - (Difference = data):

* url - the relative path to the API (required)
* data - Object - the object jumping the wire
* axiosConfig - Object - config passed along to the `axios` request (optional)

## Responses

The responses are PROMISE_BASED, so you you'll need to handle things in a
`.then()` function.

The promised is always resolved with a `response` object.

Even if there was a problem with the request!  This is one of the goals of
this library.  It ensures sane calling code without having to handle `.catch`
and have 2 separate flows.

A response will always have these 2 properties:

```
ok      - Boolean - True is the status code is in the 200's; false otherwise.
problem - String  - One of 6 different values (see below - problem codes)
```

If the request made it to the server and got a response of any kind, response
will also have these properties:

```
data     - Object - this is probably the thing you're after.
status   - Number - the HTTP response code
headers  - Object - the HTTP response headers
config   - Object - the `axios` config object used to make the request
duration - Number - the number of milliseconds it took to run this request
```

## Changing Headers

Once you've created your api, you're able to change HTTP requests by
calling `setHeader` or `setHeaders` on the api.

```js
api.setHeader('Authorization', 'the new token goes here')
api.setHeaders({
  'Authorization': 'token',
  'X-Even-More': 'hawtness'
})
```

## Adding Monitors

Monitors are functions you can attach to the API which will be called
when any request is made.  You can use it to do things like:

* check for headers and record values
* determine if you need to trigger other parts of your code
* measure performance of API calls
* perform logging

Monitors are run just before the promise is resolved.  You get an
early sneak peak at what will come back.

You cannot change anything, just look.

Here's a sample monitor:
```js
const naviMonitor = (response) => console.info('hey!  listen! ', response)
api.addMonitor(naviMonitor)
```

Any exceptions that you trigger in your monitor will not affect the flow
of the api request.

```js
api.addMonitor(response => this.kaboom())
```

Internally, each monitor callback is surrounded by an oppressive `try/catch`
block.

Remember.  Safety first!

## Adding Transforms

In addition to monitoring, you can change every request or response globally.

This can be useful if you would like to:

* fix an api response
* add/edit/delete query string variables for all requests
* change outbound headers without changing everywhere in your app

Unlike monitors, exceptions are not swallowed.  They will bring down the stack, so careful!


### Response Transforms

For responses, you're provided an object with these properties.

* `data` - the object originally from the server that you might wanna mess with
* `duration` - the number of milliseconds
* `problem` - the problem code (see the bottom for the list)
* `ok` - true or false
* `status` - the HTTP status code
* `headers` - the HTTP response headers
* `config` - the underlying axios config for the request

Data is the only option changeable.

```js
api.addResponseTransform(response) => {
  const badluck = Math.floor(Math.random() * 10) === 0
  if (badluck) {
    // just mutate the data to what you want.
    response.data.doorsOpen = false
    response.data.message = 'I cannot let you do that.'
  }
})
```

### Request Transforms

For requests, you are given a `request` object.  Mutate anything in here to change anything about the request.

The object passed in has these properties:

* `data` - the object being passed up to the server
* `method` - the HTTP verb
* `url` - the url we're hitting
* `headers` - the request headers
* `params` - the request params for `get`, `delete`, `head`

```js
api.addRequestTransform(request => {
  request.headers['X-Request-Transform'] = 'Changing Stuff!'
  request.params['page'] = 42
  delete request.params.secure
  request.url = request.url.replace(/\/v1\//, '/v2/')
  if (request.data.password && request.data.password === 'password') {
    request.data.username = `${request.data.username} is secure!`
  }
})
```


# Using Async/Await

If you're more of a `stage-0` kinda person, you can use it like this:

```js
const api = create({baseURL: '...'})
const response = await api.get('/slowest/site/on/the/net')
console.log(response.ok) // yay!
```

# Problem Codes

The `problem` property on responses is filled with the best
guess on where the problem lies.  You can use a switch to
check the problem.  The values are exposed as `CONSTANTS`
hanging on your built API.

```
Constant        VALUE               Status Code   Explanation
----------------------------------------------------------------------------------------
NONE             null               200-299       No problems.
CLIENT_ERROR     'CLIENT_ERROR'     400-499       Any non-specific 400 series error.
SERVER_ERROR     'SERVER_ERROR'     500-599       Any 500 series error.
TIMEOUT_ERROR    'TIMEOUT_ERROR'    ---           Server didn't respond in time.
CONNECTION_ERROR 'CONNECTION_ERROR' ---           Server not available, bad dns.
NETWORK_ERROR    'NETWORK_ERROR'    ---           Network not available.
```

Which problem is chosen will be picked by walking down the list.
