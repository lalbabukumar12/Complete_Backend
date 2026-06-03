const express = require('express')

const app = express()

app.get('/',function(req, res) {
  res.send('Hello World')
});
app.get("/chicken",(req, res) => {
  res.send("Sure sir, I can make you some chicken");
});
app.get("/idli",(req, res) => {
    var customize_idli={
        name:"idli",
        price:20,
        quantity:2,
        size:"5 cm diameter",
        is_veg:true,
        is_chutney:true,
        is_sambar:true
    }
  //res.send("Sure sir, I can make you some Idli");
  res.send(customize_idli);
});

app.listen(3000,()=> {
  console.log('Example app listening on port 3000')
})
  