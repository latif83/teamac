"use server"
import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken";

cloudinary.config({
  cloud_name: "dqnpplwcg",
  api_key: "622931539991962",
  api_secret: "D-H-b7b2yjhnrGREg9Olad-IfD8",
});

export const uploadServicesThumbnail = async(base64Image) => {
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

export const uploadOfferThumbnail = async(base64Image) => {
  const uploadOptions = {
    folder: "teamac/offers/thumbnails",
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

export const verifyToken = async(token) => {
  try {
    const decodedToken = jwt.verify(token, "your-secret-key");
    return { status: true, decodedToken };
  } catch (err) {
    // cookies().delete('access-token')
    // console.log(err)
    return { status: false };
  }
};