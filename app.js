const express = require('express')
const axios = require('axios')
const fs = require('fs')
const dotenv = require('dotenv')

dotenv.config({ path: '.env' })

const app = express()

app.get('/news', async (req, res, next) => {
    const newsData = await axios.get(`http://api.mediastack.com/v1/news?access_key=${process.env.ACCESS_KEY}`)

    return res.status(200).json({
        statusCode: 200,
        message: "News gotten successfully",
        data: newsData.data
    })
})

app.get('/save', (req, res, next) => {
})

app.listen(5000, (err) => {
    if (err)
        console.log(err)
    console.log('Server running as port 5000')
})

