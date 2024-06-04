import { Database } from "@/lib/supabase/types"
import { createClient } from "@supabase/supabase-js"

export async function POST(req: Request) {
    const { id } = await req.json()
    if (!id) return new Response("Missing id", { status: 400 })

    const supabaseAdmin = createClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    const { data, error } = await supabaseAdmin
        .from('recipes')
        .select('slug')
        .eq('id', id)
        .maybeSingle()
    
    if (error) return new Response(error.message, { status: 500 })
    
        

}