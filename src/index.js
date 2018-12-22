import express from 'express'
import bodyParser from 'body-parser'
import { env, corsOptions } from './config'
import cors from 'cors'
import errorhandler from 'errorhandler'
import morgan from 'morgan'
import chalk from 'chalk'


var app = express()

app.set('PORT', env.PORT)
app.use(cors(corsOptions))
app.use(bodyParser.json())

if (env.NODE_ENV === 'development') {
    app.use(errorhandler())
    app.use(morgan('combined'))
}

app.get('/', (req, res) => {
    res.json({ test: 200 })
})

app.listen(app.get('PORT'), () => {
    console.log(`App is listening on port: ${chalk.cyanBright(app.get('PORT'))}`)
    console.log(`Environment: ${chalk.green(env.NODE_ENV)}`)
})