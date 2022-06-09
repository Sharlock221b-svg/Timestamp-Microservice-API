# Timestamp Microservice

<p>This is a Node.js and Express.js based timestamp microservice. This microservice takes a URL parameter in the format of a Unix timestamp or a Date and returns a JSON response with the Unix timestamp and the UTC date.</p>

<h3>Instructions for running in your system</h3>
Navitage to the folder in the cli then run:
<code>npm install</code>
All the Dependencies as mentioned in Package.json will get installed.<br />
For runnuing: <code>node index.js</code>

<h3>Example Usage</h3>
<code>https://timestamp-microoservice-nodejs.herokuapp.com/api</code><br />
Will return current unix and utc timestamp
<br />
<br />
<code>https://timestamp-microoservice-nodejs.herokuapp.com/api/unix-value</code><br/>
OR <code>https://timestamp-microoservice-nodejs.herokuapp.com/api/dateIN(YYYY-MM-DD)</code><br/>
Will return unix and utc timestamp resplectivly. <br />
<b>Response would be a json object</b>
