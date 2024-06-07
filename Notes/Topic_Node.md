NODE.JS EXPRESS 

Theory
What is Node.js
why v8 Engine
Advantages & Disadvantages of Node.js
How node works
Node Module System
Concurrency vs parallelism
REPL, Cli
_
NPX
Globals
__dirname
__filename
Module
Process
Modules
Core Modules.
local Modules.
Third-party Modules.
module.exports:{}
require
ESM
import and export
NPM
local and global
npm init
npm install or i
Nodemon
scripts
start
dev
npm run dev
package.json
package-lock.json
Event loop
Event Queue
Events
Events emitter
on, emit
Http module
Streams
type of streams
writable, readable, duplex, transform
createReadStream()
readFile vs readFileSync
pipe() 
Buffers
Transfer-Encoding: chunked
Cron-job
* * * * * 
1st* = second
2nd* = minute
3rd* = hour
4th* = day of month
5th* = month 
6th* = day of week
or, range selector
time zone
validation
COR m S
preflight request
header
accept-control-allow-origin: *
accept-control-allow-methods: *
Cluster
Multithreading in node.js
require(‘worker_theads’)
new Worker
thread pool
worker thread
creating worker,
parent port
cluster vs workerthread
child process
methods
- fork
- exec
- execFile
- spawn
spawn vs fork
child_procees.fork() vs cluster.fork()
HTTP
https
How does it work?
default port
request response cycle
Stateless protocol
Local storage, Sessions and Cookies
Request
General (start line)
method/target/version
header
body
Response
General (start line)
version/statuscode/statustext
header
content type
body
requested resource
HTTP Methods
GET
POST
PUT
PATCH
DELETE
HEAD
CONNECT
OPTIONS
TRACE
Idempotent
Safe Methods
User-Agent
Headers
writeHead vs setHead
Status code
1xx: Informational
2xx: Success
200 - Success
201 - Success and created
3xx: Redirect
301: moved to new URL
304: not changed
4xx: Client Error
401: Unauthorised
402: Payment Required
403: Forbidden
404: Page not found
5xx: Server Error
MIME type
HTTP v2
TCP and IP
XSS
CSRF
referral header
SQL injection
prepared statements
Express
npm install express –save
app = express()
get()
status()
send()
sendFile()
post()
express.urlencode()
Form vs JS
put()
patch()
delete()
all()
use()
listen()
Static files
public
express.static()
API
json()
Params, Query String
Route Parameter
Query string/url Parameter
Path params
MIddleware
what is middleware
used for what?
req, res, next
next()
app.use in middleware
passing two middleware
Types of Middleware
Application-level middleware
Third party middleware
morgan 
multer 
Router-level middleware
Built-in middleware
Error-handling middleware
err.statusCode
err.message
Routing
router
express.Router()
Core Express
Session
i express-session
secret
resave
saveUninitialized
destroy()
Cookies
i cookie-parser
Core middleware
Core routing
Build own API
Core views
database integration
EJS
i ejs
server side rendering
view engine
render()
<% %>, <%- %>, <%= %>
partials
Rest API
RESTful
fragment identifier
VS 
API vs HTTP
API vs SSR
HTTP vs HTTPS
URIs vs URLs vs URNs
Session vs Cookies
GET vs POST
PUT vs PATCH
SSL vs TLS
Build-in Modules (only imp)
os
path
join()
basename()
resolve()
fs
fs sync 
- readFileSync()
- writeFileSync()
- appendFileSync()
- unlinkFileSync()
- statusSync()
- mkdirSync()
recursive: true
fs async
- readFile( )
- writeFile()
http
createServer()