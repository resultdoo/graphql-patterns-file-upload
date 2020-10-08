import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import config from 'config'
import { createServer } from 'http'

import log from './log'
import routes from './routes'
import { errorHandle } from './utils'

require( 'dotenv' ).config()

process.on( 'unhandledRejection', ( err ) => {
	throw err
} )

process.on( 'uncaughtException', ( err ) => {
	log.error( 'uncaughtException:', err )
} )

const app = express()

const server = createServer( app )

app.use( cors( '*' ) )

app.use(
	bodyParser.json( {
		limit: '1mb',
	} ),
)

app.use( '/', routes )

app.use( errorHandle )

const port = config.get( 'port' )

server.listen( port, () => {
	log.info( `Apollo Minio Example Storage service started on port ${ port }.` )
} )


export default server
