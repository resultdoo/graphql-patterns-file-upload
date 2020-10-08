import express from 'express'

import minioClient from "../utils/minio"
import log from '../log'

const router = new express.Router()

router.post( '/', async( req, res, next ) => {
    const { bucketId, fileName } = req.body

	try {
		minioClient.presignedPutObject( bucketId, fileName, 100, ( err, presignedUrl ) => {
			if ( err ) {
			    log.info( `Error while creating upload link - `, err )
				return next({
					msg: err
				})
			}

			return res.send({
                url: presignedUrl
			})
		})
	} catch ( e ) {
        log.info( `Error while creating upload link - `, e )
		return next({
			msg: e
		})
	}
})

export default router
