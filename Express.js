const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const users = [{
  name:"john",
  kidneys: [{
    healthy:false
  }]
}];

app.get('/', (req, res) => {
  const kidneys = users[0].kidneys;
  const num = kidneys.length;
  let ans = 0;
  for(let i = 0;i<num;i++){
    if(kidneys[i].healthy){
      ans++;
    }
  }

  numunhealthy = kidneys.length - ans;

  res.json({
    num,
    ans,
    numunhealthy
  })
})

app.post("/",function(req,res){

  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({
    msg:"Done!"
  })

})

app.put("/",function(req,res){
  for(let i = 0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})