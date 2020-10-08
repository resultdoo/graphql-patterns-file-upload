require( "dotenv" ).config()

let Minio = require( 'minio' )

const minioClientConfig = {
	endPoint: process.env.MINIO_ENDPOINT,
	port: parseInt( process.env.MINIO_PORT ),
	accessKey: process.env.MINIO_ACCESS_KEY,
	secretKey: process.env.MINIO_SECRET_KEY,
	useSSL: process.env.MINIO_HTTPS ? true : false
}

const minioClient = new Minio.Client( minioClientConfig )

export default minioClient