import express from "express";

const app = express();

app.get('/', (req,res) => {
  res.send({
    message: "Hello from server !!"
  })
})

app.listen(3000, () => {
  console.log('Server is running')
})
