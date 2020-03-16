const mongoose =require('mongoose');

mongoose.connect("mongodb://localhost:27017/mydb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("db connected"))
    .catch(err => console.log(err));
