// src/app/hf/admin/login/action.ts
'use server'

import { verifyPassword, createSession } from "@/lib/auth";
import { ADMIN_AUTH } from "@/lib/auth-config";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const username = (formData.get("username") as string)?.trim();
  const password = (formData.get("password") as string)?.trim();
  
  if (username !== ADMIN_AUTH.username) {
    return { error: "Invalid username or password" };
  }
  
  const isValid = await verifyPassword(password);
  
  if (!isValid) {
    return { error: "Invalid username or password" };
  }
  
  await createSession(username);
  redirect("/hf/admin");
}

export async function logoutAction() {
    const { deleteSession } = await import("@/lib/auth");
    await deleteSession();
    redirect("/hf/admin/login");
}
