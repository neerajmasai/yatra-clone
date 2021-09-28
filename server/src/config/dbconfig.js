
//server host name
const HOST = "localhost";

//remote database name
const DATABASE = "yatra";

//database credentials
const USERNAME = "yatra-clone";
const PASSWORD = "yatraclone123";

//default app port
const PORT = 2345;

//default connection url
const DEFAULT_CONNECTION_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@yatra-clone.xrxnv.mongodb.net/${DATABASE}`; 

/* 
//default connection url
const DEFAULT_CONNECTION_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.cindx.mongodb.net/${DATABASE}?retryWrites=true&w=majority`; 
*/
//mongoose options for connection
const MONGOOSE_OPTIONS = {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true,
    useNewUrlParser:true
}

module.exports = {HOST, PORT, DATABASE, USERNAME, PASSWORD, DEFAULT_CONNECTION_STRING, MONGOOSE_OPTIONS}