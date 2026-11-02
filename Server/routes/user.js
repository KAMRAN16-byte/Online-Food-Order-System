const cryptojs = require('crypto-js')
const router = require("express").Router();
const pool = require('../db/pool')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')
const createResult = require('../utils/result')

router.post('/signup', async (req, res) =>
{
    const {name, email, mobile} = req.body;
    const hashPassword = cryptojs.SHA256(req.body.password);
    const sql = `INSERT INTO user (name, email, password, mobile) VALUES (?, ?, ?, ?)`
    try
    {
        const response = await pool.query(sql, [name, email, hashPassword, mobile])
        res.send(createResult(response[0], null))
    } catch (error)
    {
        res.send(createResult(null, error))
    }
})

router.post('/signin', (req, res) =>
{
    const hashPassword = cryptojs.SHA256(req.body.password);
    const sql = `SELECT *
                 FROM user
                 WHERE email = ?
                   AND password = ?`;
    pool.query(sql, [req.body.email, hashPassword])
        .then(result =>
        {
            const response = result[0][0];
            response.token = jwt.sign({uid: response.uid}, config.SECRET_KEY);
            delete response.uid;
            delete response.password;
            res.send(createResult(response, null))
        })
        .catch(error => res.send(createResult(null, error)))
})

router.get('/profile', async (req, res) =>
{
    const sql = `SELECT *
                 FROM user
                 WHERE uid = ?`;
    try
    {
        const response = (await pool.query(sql, [req.headers.uid]))[0][0];
        delete response.uid;
        delete response.password;
        res.send(createResult(response, null))
    } catch (error)
    {
        console.log(error)
        res.send(createResult(null, error))
    }
})

router.delete('/', (req, res) =>
{
    const sql = `DELETE
                 FROM user
                 WHERE uid = ?`;
    pool.query(sql, [req.headers.uid])
        .then(result =>
        {
            res.send(createResult(result, null))
        })
        .catch(error => res.send(createResult(null, error)))
})

module.exports = router