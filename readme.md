# Project store

This is a backend for a conceptual local app store (a deployment store let's say). 
It's written in deno & typescript, using Oak as a middleware framework and psql as a provider. 

Some issues with oak are currently visible with this - lack of wildcard route middleware, lack of multipart - images are sent as b64 enc string and then uploaded to imagekit. Make your own Env if you want to fork it.

TODO: 
- Add data scheme
- Flesh out the data model interfaces
- Add more routes 
- Add DB queries
- Refactor the ugly stuff (repository and usecases probs, maybe RouteByName usecase style?)
- Validation and error handling