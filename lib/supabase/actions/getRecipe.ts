"use server"

import { createSupabaseServerClient } from "../server"

export async function getRecipes(page: number) {
    const supabase = createSupabaseServerClient()

    return await supabase.from("recipes")
        .select("*, ingredients!inner(*), steps!inner(*)")
        .range(0,20)
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