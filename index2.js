const express = require("express");
const app = express();
const users=[{
    name:"Abhinay",
    kidney:[{
        healthy:false
    }]

}];
app.use(express.json());
 app.get("/",function(req,res){
    // write klogic
    const Abhinaykidney=users[0].kidney;
    const numberofkidney=Abhinaykidney.length;
     let numberofhealthykidney =0;
     for(let i=0;i<Abhinaykidney.length;i++)
     {
        if(Abhinaykidney[i].healthy)
        {
            numberofhealthykidney=numberofhealthykidney+1;
        }
     }
     const numberofUnhealthykidney = numberofkidney-numberofhealthykidney;
     res.json({
    
        numberofkidney,
        numberofhealthykidney,
        numberofUnhealthykidney
     })
 })
  app.post("/",function(req,res)
{
   // const n=req.query.n;
   // console.log(req.body);
    const ishealthy = req.body.ishealthy;
    users[0].kidney.push({
        healthy : ishealthy
    })
    res.json({
        msg:"Done!"
    })
})
 app.put("/",function(req,res)
 {
    for(let i=0;i<users[0].kidney.length;i++)
    {
        users[0].kidney[i].healthy=true;
 }
 res.json({});
})
app.delete("/",function(req,res)
{
    const newkidney=[];
    for(let i=0;i<users[0].kidney.length;i++)
    {
        if(users[0].kidney[i].healthy)
        {
            newkidney.push({
                healthy:true
            })

        }
    }

    users[0].kidney=newkidney;
    res.json({
        msg:"All Unhealthy kidneys removed"
    })
})
app.listen(3000);
    