const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=3000

app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())

app.get("/",(req,res)=>{
	res.send("pavankalyan")
})
app.post("/newData",(req,res)=>{
	const{name,password,car}=req.body;
	console.log(name,password,car)
	res.send("added")
})
app.listen(port,()=>console.log("server is running on port 3000"))