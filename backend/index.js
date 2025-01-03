const express = require("express");
const rootRouter=require("./routes/index");
const cors=require('cors')
const app=express();

app.use((req, res, next) => {
    console.log('Request received:', {
        method: req.method,
        path: req.path,
        headers: req.headers,
        body: req.body
    });
    next();
});

app.use(cors());
app.use(express.json());


app.use("/api/v1",rootRouter);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

