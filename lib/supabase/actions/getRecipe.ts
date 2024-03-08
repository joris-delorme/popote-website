"use server"

import { createSupabaseServerClient } from "../server"

export async function getRecipes(page: number) {
    const supabase = createSupabaseServerClient()

    return await supabase.from("recipes")
        .select(`id, created_at, image_url, title, caption, isPublic,
            user:profiles!public_recipes_user_id_fkey(
                id,
                username,
                avatar_url
            )
        `)
        .eq("isPublic", "TRUE")
        .range(0, 20)
}

export async function getRecipe(id: String) {
    const supabase = createSupabaseServerClient()

    return await supabase.from("recipes")
        .select("*, ingredients!inner(*), steps!inner(*)")
        .eq("id", id)
        .single()
}

export async function getRecipeMetadata(id: String) {
    const supabase = createSupabaseServerClient()

    return await supabase.from("recipes")
        .select("title, caption, image_url")
        .eq("id", id)
        .single()
}

export async function getUserRecipe(id: String) {
    const supabase = createSupabaseServerClient()

    return await supabase.from("profiles")
        .select("*")
        .eq("id", id)
        .single()
}