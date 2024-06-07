# What is Node.js
   * Node.js is an open-source and cross-platform JavaScript runtime environment 
   * Node.js provides a runtime environment outside of the browser. It's  built on the Chrome V8 JavaScript engine. This makes it possible to build back-end applications using the same JavaScript
   * Differences Between the Browser and Node.js Runtime Environments
        + Access to the DOM APIs
        + Window vs Global object
        + Node.js, you can choose which version to run your server-side application . Contrast this to the browser runtime environment. As a developer, you have no control over the version of browsers your clients use to access your app.

# Workflow of node.js
    Clients send requests to the webserver to interact with the web application. Requests can be non-blocking or blocking:
            -Querying for data

            -Deleting data 

            -Updating the data

    Node.js retrieves the incoming requests and adds those requests to the Event Queue
    The requests are then passed one-by-one through the Event Loop. It checks if the requests are simple enough to not require any external resources
    Event Loop processes simple requests (non-blocking operations), such as I/O Polling, and returns the responses to the corresponding clients
    A single thread from the Thread Pool is assigned to a single complex request. This thread is responsible for completing a particular blocking request by accessing the external resources, such as compute, database, file system, etc.

    Once, the task is carried out completely, the response is sent to the Event Loop that in turn sends that response back to the Client

# Modules 
    
    *  Node.js supports two module systems for organizing and sharing code. These are
        CommonJS modules system 
        ECMAScript modules system
        CommonJS modules have been the traditional method for handling dependencies in Node.js, whereas ECMAScript modules are a newer 

#

# 

# How does an HTTP request work?

        HTTP (Hypertext Transfer Protocol) is a protocol used for requesting and transmitting information on the World Wide Web. When you make an HTTP request, you are asking a web server to send you a resource, such as a web page, an image, or data. 
        
        This request at a basic level will consist of;

                URL: Specifies the resource’s location.
                HTTP method (e.g., GET, POST, PUT, DELETE): Specifies the type of request being made.
                Headers: Additional metadata, such as user-agent information, accepted content types, and cookies.
                Body (for some request methods like POST or PUT): Data to be sent to the server.
                
        The response will also consist of;

                HTTP status code: A three-digit code that indicates the outcome of the request (e.g., 200 for success, 404 for not found, 500 for server error).
                Headers: Metadata about the response, including content type, length, and cache control settings.
                Body: The actual content being sent back to the client, which could be an HTML page, an image, JSON data, or any other resource.
