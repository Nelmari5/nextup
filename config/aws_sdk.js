const Env = use('Env')

module.exports = {

    s3: {
        key: Env.get('S3_KEY'),
        secret: Env.get('S3_SECRET'),
        region: Env.get('S3_REGION'),
        bucket: Env.get('S3_BUCKET')
    }

}