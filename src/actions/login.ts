import { request } from "../request";
import { User } from "../types/user";

export async function login({ name }: { name: string }) {
  return await request<User>({
    method: "POST",
    url: `/users/login`,
    data: {
      name,
    },
  });
}
