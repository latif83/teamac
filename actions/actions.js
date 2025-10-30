"use server"
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dqnpplwcg",
  api_key: "622931539991962",
  api_secret: "D-H-b7b2yjhnrGREg9Olad-IfD8",
});

export const uploadAnalysisImage = async(base64Image) => {
  const uploadOptions = {
    folder: "teamac/services/thumbnails",
    overwrite: true,
    resource_type: "image",
  };

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(base64Image, uploadOptions, (error, result) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve({ url: result.url, public_id: result.public_id });
      }
    });
  });
};