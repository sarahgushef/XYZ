// To make Backend App (server / express app)
const express = require('express');
const app = express();

//to connect Backend app to database (mysql)
var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'awali'
});
db.connect((err,res) => {
    if(err){
        throw err;
    }
    else{console.log('Terhubung ke Mysql')}
});


// To connect from front-end to Backend
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// To recognize the React file
var cors = require('cors');
app.use(cors());


//================================= Show articles at Home ==================


// =========================== Register =========================
app.post('/register', (req, res) => {
    var userData = {
        userID : null,
        userName : req.body.userName,
        userEmail : req.body.userEmail,
        userPassword : req.body.userPassword,
        userRegistrationDate : new Date
    }

    var registerQuery = 'insert into user SET ?'
    
    db.query(registerQuery, userData, (error, hasil) => {
        if (error) {
            throw error
        }
        
        // else{console.log('Data berhasil diinput ke database')};
        
        
        // res.send(hasil);
        res.send('data berhasil diinput beb')

        // console.log(hasil);
        // console.log(error);
    })
})

// ============================== Login ===========================
app.post('/login', (req, res) => {
    var queryLogin = `SELECT * FROM user WHERE userEmail = '${req.body.userEmail}' and userPassword = '${req.body.userPassword}'`;
    db.query(queryLogin, (error, hasil) => {
        if(error) {
            res.send (error)
            // console.log('gagal login beb')
        }
        else{
            res.send (hasil)
            // console.log('berhasil login beb')
        }
    })
})

// ============================== Writing Area ====================

app.get('/user/:id', (req,res) => {
    var userID = `SELECT * FROM user WHERE userID = '${req.params.id}'`;

    db.query(userID, (err, hasil) => {
        if(err) throw err;
        console.log(hasil)
        res.send(hasil)
    })
})


app.post('/postArticle', (req, res) => {
    var postData = {
        articleID : null,
        userID: req.body.userID,
        articleContent: req.body.articleContent

    }

    var postQuery = 'INSERT INTO article SET ?'
    db.query(postQuery, postData, (error, hasil) => {
        if (error) {
            throw error
        }
        else{
            res.send(hasil)
            console.log('berhasil input artikel')
        }
    })
})







// =============== route =============
app.listen(3210, () => {console.log('Server aktif di port 3210')})
