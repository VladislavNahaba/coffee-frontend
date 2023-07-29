import { request } from "../request";
import { User } from "../types/user";

export async function register({
  name,
  membership,
}: {
  name: string;
  membership: User["membership"]["type"];
}) {
  return await request<User>({
    method: "POST",
    url: `/users/register`,
    data: {
      name,
      membership,
    },
  });
}
