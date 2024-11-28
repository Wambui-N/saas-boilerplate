import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (file: NodeJS.ReadableStream) => {
  try {
    const result = await cloudinary.uploader.upload_stream(
      { resource_type: 'auto' },
      (error, result) => {
        if (error) {
          throw new Error(error.message);
        }
        return result;
      }
    );
    file.pipe(result);
  } catch (error) {
    console.error(error);
  }
};
