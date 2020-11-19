import { handler } from './s3-uploader';

jest.mock(
  'aws-sdk/clients/s3',
  jest.fn().mockImplementation(() =>
    jest.fn().mockImplementation(() => {
      return {
        putObject: jest.fn().mockImplementation((): { promise: () => Promise<{}> } => ({
          promise: (): Promise<{}> => {
            return Promise.resolve({ Body: JSON.stringify({}) });
          },
        })),
      };
    }),
  ),
);

describe('S3 Uploader', () => {
  it('should upload the given message to S3', async () => {
    expect(await handler({ id: 1, message: 'test' })).toBe('blog-namespace/custom/file/1');
  });
});
