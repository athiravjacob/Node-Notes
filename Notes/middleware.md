# Middleware
 It is a function that gets executed between a request and response  cycle.
 It have access to res .req object and the next middleware

 The order of executtion of middleware is same as the order in which they are defined

 To call a middleware 'use' method is used

 const customMiddleware = ((req,res,next)=>{
    res.send(Hello World)
    next()
 })

 app.use(customMiddleware)

 Middleware in Express is a function that has access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. Middleware functions can perform tasks like executing code, modifying the request and response objects, ending the request-response cycle, and calling the next middleware in the stack.

Regular route handlers are also middleware, but they are designed specifically to handle requests at a particular route. Middleware, on the other hand, can be more generic and applied globally or to a subset of routes.
# Types of Middleware
# Application middlewear
   Application-level middleware is middleware that is bound to an instance of the Express application object (app) using app.use() or app.METHOD()

   When bound using app.use(), the middleware function is applied to all incoming requests, regardless of the HTTP method or route.

   Middleware can also be applied to specific routes or paths by providing a route or path pattern as the first argument to app.use().

# Router Middlewear
   Route-level middleware in Express provides a way to modularize and organize middleware functions for specific routes. By using router instances, you can create middleware that only applies to certain sections of your application, making your code more maintainable and easier to understand. 

#  Custom Middleware
   These middleware functions are written by developers to perform specific tasks such as logging, authentication, and input validation.

# Third-Party Middleware
      These middleware functions are created by the community and can be installed via npm. They provide additional functionality not available in the built-in middleware.

      Examples:

      body-parser: Parses incoming request bodies.
      morgan: HTTP request logger.
      cors: Enable Cross-Origin Resource Sharing.

# Built-In Middleware
      Express provides some built-in middleware functions that you can use without installing additional packages.

      Examples:

      express.static: Serves static files.
      express.json: Parses incoming JSON requests.
      express.urlencoded: Parses URL-encoded bodies.

# Error-Handling Middleware
   These middleware functions take four arguments: (err, req, res, next). They are designed to handle errors that occur during the execution of other middleware functions or route handlers.