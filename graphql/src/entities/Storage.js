import { RESTDataSource } from "apollo-datasource-rest"

let storageEntity = null

class StorageEntity extends RESTDataSource {
	constructor() {
		if ( ! storageEntity ) {
			super()
			this.baseURL = "http://storage_service:8080/"
			storageEntity = this
		}
		return storageEntity
	}

	async createBucket( bucketId ) {
		const data = await this.post(
			'bucket',
			{
				bucketId
			}
		)
		return data.success
	}

	async createUploadURL( bucketId, fileName ) {
		return this.post(
			'upload',
			{
				bucketId,
				fileName
			}
		)
	}

	async createDownloadURL( bucketId, fileName ) {
		return this.post(
			'download',
			{
				bucketId,
				fileName
			}
		)
	}

}

new StorageEntity()

export default storageEntity
