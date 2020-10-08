import express from 'express'

import download from './download'
import upload from './upload'
import bucket from './bucket'

const router = new express.Router()

router.get( '/', async ( req, res ) => {
	res.send( { msg: 'Invalid request.' } )
} )

router.use( '/download', download )
router.use( '/upload', upload )
router.use( '/bucket', bucket )

export default router
