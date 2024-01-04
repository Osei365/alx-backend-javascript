import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let newObject = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    newObject = { photo, user };
  } catch (err) {
    newObject = { photo: null, user: null };
  }
  return newObject;
}
