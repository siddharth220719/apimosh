const express=require('express')
const genreRouter=require('./routes/genresRouter')
const customerRouter=require('./routes/customerRouter')
const movieRouter=require('./routes/movieRouter')
const rentalRouter=require('./routes/rentalRouter')
const userRouter=require('./routes/userRouter')
const authRouter=require('./routes/auth')
const appDebugger=require('debug')('app:startup')
const mongoose=require('mongoose')
const app=express()

const PORT=3000||process.env.PORT

app.listen(PORT,()=>{
    appDebugger('app running on port'+PORT)
})

app.use(express.json())
app.use('/api/genres',genreRouter)
app.use('/api/customers',customerRouter)
app.use('/api/movies',movieRouter)
app.use('/api/rentals',rentalRouter)
app.use('/api/users',userRouter)
app.use('/api/auth',authRouter)
mongoose.connect(process.env.url,{ useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{
    console.log('Connected to mongodb')
}).catch((error)=>{
console.log(error.message)
})

// const courses=[
//     {"tags":["express","backend"],"date":"2018-01-24T21:42:27.388Z","name":"Express.js Course","author":"Mosh","isPublished":true,"price":10,"__v":0},
//     {"tags":["node","backend"],"date":"2018-01-24T21:42:47.912Z","name":"Node.js Course","author":"Mosh","isPublished":true,"price":20,"__v":0},
//     {"tags":["aspnet","backend"],"date":"2018-01-24T21:42:59.605Z","name":"ASP.NET MVC Course","author":"Mosh","isPublished":true,"price":15,"__v":0},
//     {"tags":["react","frontend"],"date":"2018-01-24T21:43:21.589Z","name":"React Course","author":"Mosh","isPublished":false,"__v":0},
//     {"tags":["node","backend"],"date":"2018-01-24T21:44:01.075Z","name":"Node.js Course by Jack","author":"Jack","isPublished":true,"price":12,"__v":0},
//     {"tags":["node","backend"],"date":"2018-01-24T21:47:53.128Z","name":"Node.js Course by Mary","author":"Mary","isPublished":false,"price":12,"__v":0},
//     {"tags":["angular","frontend"],"date":"2018-01-24T21:56:15.353Z","name":"Angular Course","author":"Mosh","isPublished":true,"price":15,"__v":0}
//   ]
  
//   courses.forEach((item)=>{
//     const course=new Course(item)
//     try{
//        const save=async()=>{
//             const course1=await course.save()
//             console.log(course1)
//         }
//         save()
        
    
    
//     }
//     catch(error){
//         console.log(error.message)
//     }
//   })

// const find=async()=>{
// const data= await Course.findById('61235744a090062d0032d8f4')
// data.author="Sid"
// const update=await data.save()
// console.log(update)
// }

//         find()

