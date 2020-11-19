import { handler } from './s3-retriever';

const SIGNED_URL = 's3://blog-namespace/custom/file/1';

jest.mock(
  'aws-sdk/clients/s3',
  jest.fn().mockImplementation(() =>
    jest.fn().mockImplementation(() => {
      return {
        getSignedUrlPromise: jest.fn().mockImplementation((): string => SIGNED_URL),
      };
    }),
  ),
);

describe('S3 Uploader', () => {
  it('should upload the given message to S3', async () => {
    expect(await handler({ id: 1 })).toBe(SIGNED_URL);
  });
});
