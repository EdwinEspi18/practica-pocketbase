import { pb } from "../config/pocketbase";

export async function login() {
  try {
    const auth = await pb
      .collection("users")
      .authWithPassword("user1@gmail.com", "admin12345");
    console.log(auth);
    return auth.record;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
