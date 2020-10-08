export default {
    Storage_createUploadURL: async( _source, { input }, { dataSources } ) => {
        return dataSources.storageAPI.createUploadURL( input.bucketId, input.fileName )
    },
    Storage_createDownloadURL: async ( _source, { input }, { dataSources } ) => {
        return dataSources.storageAPI.createDownloadURL( input.bucketId, input.fileName )
    },
    Storage_createBucket: async ( _source, { input }, { dataSources } ) => {
        return dataSources.storageAPI.createBucket( input.bucketId )
    }
}
