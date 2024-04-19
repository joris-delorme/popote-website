"use server"

import { createSupabaseServerClient } from "@/lib/supabase/server"

export const sendSupportRequest = async (nom: string, prenom: string, email: string, message: string) => {
    const supabase = createSupabaseServerClient()

    const { error } = await supabase.from('support').insert([
        { nom, prenom, email, message }
    ])

    if (error) throw error
}