import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";


const app = express();
app.use(cors());

app.use(express.json());


dotenv.config();


// const corsOptions = {
//     origin: 'http://localhost:5173', // Replace with your frontend origin
//     optionsSuccessStatus: 200
//   };
  
const PORT=process.env.PORT || 3003;
const URI=process.env.MongoDBURI;

//connect to mongodb
console.log("PORT:", PORT);
console.log("MongoDB URI:", URI);

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to mongoDB");
})
.catch((error) => {
    console.error("Error connecting to mongoDB: ", error);
});

//defining routes 
app.use(express.static('public'));

app.use("/book",bookRoute);
app.use("/user",userRoute);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  }).on('error', (err) => {
    console.error('Error starting server: ', err);
  });
  