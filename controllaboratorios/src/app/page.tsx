// src/app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/register"); // redirige automáticamente a /login
}
