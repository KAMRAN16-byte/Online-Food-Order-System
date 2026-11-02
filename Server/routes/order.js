const pool = require('../db/pool');
const router = require('express').Router();
const createResult = require('../utils/result');

router.post('/', async (req, res) =>
{
    const sql1 = 'INSERT INTO orders(uid,total_amount) VALUES (?,?)';
    const sql2 = 'INSERT INTO orderdetails VALUES (?,?,?)';
    try
    {
        const result = await pool.query(sql1,[req.headers.uid,req.body.total_bill]);
        for(const item of req.body.items)
        {
            await pool.query(sql2,[result[0].insertId,item.fid,item.quantity]);
        }
        res.send(createResult(result[0]));
    } catch (err)
    {
        res.send(createResult(err));
    }

})

module.exports = router;