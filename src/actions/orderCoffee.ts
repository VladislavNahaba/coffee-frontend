import { request } from "../request";
import { User } from "../types/user";

export async function orderCoffee({
  user,
  coffee,
}: {
  user: User;
  coffee: string;
}) {
  return await request({
    method: "POST",
    url: `/coffee/buy`,
    data: {
      coffee,
    },
    headers: {
      "user-id": user.id,
      "membership-type": user.membership.type,
    },
  });
}
