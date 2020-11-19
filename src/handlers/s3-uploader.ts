import S3 from 'aws-sdk/clients/s3';

export const S3_BUCKET = `blog-sam-custom-namespace-bucket-${process.env.ENV}`;
const s3 = new S3();

interface S3UploaderEvent {
  id: number;
  message: string;
}

export const handler = async (event: S3UploaderEvent): Promise<string> => {
  const key = `blog-namespace/custom/file/${event.id}`;
  await s3
    .putObject({
      Bucket: S3_BUCKET,
      Key: key,
      Body: JSON.stringify({ message: event.message }),
    })
    .promise();
  return key;
};
