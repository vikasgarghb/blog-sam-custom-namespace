import S3 from 'aws-sdk/clients/s3';

export const S3_BUCKET = `blog-sam-custom-namespace-bucket-${process.env.ENV}`;
const s3 = new S3();

interface S3RetrieverEvent {
  id: number;
}

/**
 * A Lambda function that logs the payload received from S3.
 */
export const handler = async (event: S3RetrieverEvent): Promise<string> => {
  const key = `blog-namespace/custom/file/${event.id}`;

  const params = {
    Key: key,
    Bucket: S3_BUCKET,
    Expires: 30 * 60, // in seconds
    ResponseContentDisposition: `attachment;filename="${key}"`,
  };

  return s3.getSignedUrlPromise('getObject', params);
};
