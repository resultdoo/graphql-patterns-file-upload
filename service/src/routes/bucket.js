import express from 'express'

import minioClient from "../utils/minio"
import log from '../log'

const router = new express.Router()

router.post( '/', ( req, res, next ) => {
    log.info( `Apollo Minio Example creating bucket ... `, req.body, req.headers )

    const { bucketId } = req.body

	try {
		minioClient.makeBucket( bucketId, ( err ) => {
			if ( err ) {
			    log.info( `Apollo Minio Example error while creating bucket ...`, err )
				return next( err )
			}
			return res.send( {
				success: true
			} )
		})
	} catch ( e ) {
		return next({
			msg: e
		})
	}
})

export default router