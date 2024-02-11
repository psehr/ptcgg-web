"use client";

import { fetchInventory } from "@/lib/local_api";
import { Inventory, Item } from "@/types/struct";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("api/auth/signin");
    },
  });

  const [inventory, setInventory] = useState<Inventory>();
  useEffect(() => {
    if (!inventory && status == "authenticated") {
      fetchInventory(session?.user?.email!).then((json) => {
        setInventory(json);
      });
    }
  }, [status]);

  if (status === "loading")
    return <div className="w-full h-full m-auto text-center">Loading...</div>;

  if (inventory) {
    return (
      <div>
        {inventory.content.items.map((item) => (
          <>
            <div>{item.id}</div>
          </>
        ))}
      </div>
    );
  }
}
