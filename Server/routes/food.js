const fs = require('fs');
const express = require("express/lib/express");
const upload = require('multer')({dest: 'uploads/'})
const router = express.Router()
const pool = require('../db/pool')
const createResult = require('../utils/result')


router.get('/',async (req, res) => {
    const sql = 'SELECT * FROM food';
    try{
        const result = await pool.query(sql)
        res.send(result[0])
    }
    catch(err){
        res.send(createResult(null,err))
    }
})


router.post('/add', upload.single('food_image'), (req, res) =>
{
    const sql = `INSERT INTO food (name,price,description,image) VALUES (?,?,?,?)`;
    const {name,price,description} = req.body;
    const extension = req.file.mimetype.split('/')[1]
    fs.rename(req.file.path, `${req.file.path}.${extension}`,()=>{});
    pool.query(sql,[name,price,description,`${req.file.filename}.${extension}`])
        .then(result=>{res.send(createResult(result[0],null))})
        .catch(err => res.send(createResult(null,err)))
})

module.exports = router;




