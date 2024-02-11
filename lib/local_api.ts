"use server";

import { Inventory } from "@/types/struct";
const defaultPath = process.env.LOCAL_API_URL!;
let headers = new Headers();
headers.append("authorization", process.env.LOCAL_API_KEY!);

export async function fetchInventory(user_id: string): Promise<Inventory> {
  return new Promise(async (resolve, reject) => {
    await fetch(`${defaultPath}/users/${user_id}/inventory`, {
      headers: headers,
    }).then(async (d) => {
      d.status == 200 ? resolve(d.json()) : reject(d.status);
    });
  });
}
