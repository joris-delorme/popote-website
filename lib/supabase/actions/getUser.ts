"use server";

import { unstable_noStore as noStore } from "next/cache";
import { createSupabaseServerClient } from "../server";

export async function readUser() {
	noStore()
	const supabase = createSupabaseServerClient()
    return await supabase.auth.getUser()
}