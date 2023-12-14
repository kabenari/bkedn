const express = require('express')
const app = express()
const port = 3000

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})