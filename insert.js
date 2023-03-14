const dbConnect=require('./mongodb');

const insert= async ()=>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [{name:'max 1', brand:'micromax', price:250,category:'mobile'},
        {name:'max 2', brand:'micromax', price:350,category:'mobile'},
        {name:'max 3', brand:'micromax', price:450,category:'mobile'}
    ]);
    if(result.acknowledged == true)
    {
        console.log('data inserted successfully');
    }
}
insert();