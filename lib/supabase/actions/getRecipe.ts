"use server"

import { createSupabaseServerClient } from "../server"

export async function getRecipes(page: number) {
    const supabase = createSupabaseServerClient()

    return await supabase.from("recipes")
        .select(`id, created_at, image_url, title, caption, is_public, slug, low_image_url,
            user:users!public_recipes_user_id_fkey(
                id,
                username,
                avatar_url
            )
        `)
        .eq("is_public", "TRUE")
        .order('created_at', { ascending: false })
        .range(0, 20)
}

export async function getRecipe(slug: String) {
    const supabase = createSupabaseServerClient()

    return await supabase.from("recipes")
        .select("*, ingredients!inner(*), users!inner(*), steps!inner(*)")
        .eq("slug", slug)
        .single()
}

export async function getRecipeMetadata(slug: String) {
    const supabase = createSupabaseServerClient()

    return await supabase.from("recipes")
        .select("title, caption, low_image_url")
        .eq("slug", slug)
        .single()
}

export async function getUserRecipe(id: String) {
    const supabase = createSupabaseServerClient()

    return await supabase.from("users")
        .select("*")
        .eq("id", id)
        .single()
}