var {MongoClient}=require('mongodb');
var url = 'mongodb://127.0.0.1:27017';
var client=new MongoClient(url);

var database='e-comm';

async function dbConnect()
{
   let result= await client.connect();
   let db=result.db(database);
   return db.collection('products');
}
module.exports=dbConnect;