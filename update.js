const dbConnect =require('./mongodb');


const upadateData=async()=>{
 let data= await dbConnect();
 let updateResult = await data.updateMany({ name: 'max 1' }, { $set: { name: 'max 1 pro' } });

console.log('Updated documents =>', updateResult);
}

upadateData();