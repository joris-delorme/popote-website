export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    public: {
        Tables: {
            ingredient_step: {
                Row: {
                    id: string
                    ingredient_id: string
                    step_id: string
                }
                Insert: {
                    id?: string
                    ingredient_id: string
                    step_id: string
                }
                Update: {
                    id?: string
                    ingredient_id?: string
                    step_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "public_ingredient_step_ingredient_id_fkey"
                        columns: ["ingredient_id"]
                        isOneToOne: false
                        referencedRelation: "ingredients"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "public_ingredient_step_step_id_fkey"
                        columns: ["step_id"]
                        isOneToOne: false
                        referencedRelation: "steps"
                        referencedColumns: ["id"]
                    },
                ]
            }
            ingredients: {
                Row: {
                    id: string
                    name: string
                    quantity: string
                    recipe_id: string
                    unit: string
                }
                Insert: {
                    id?: string
                    name: string
                    quantity: string
                    recipe_id: string
                    unit: string
                }
                Update: {
                    id?: string
                    name?: string
                    quantity?: string
                    recipe_id?: string
                    unit?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "public_ingredients_recipe_id_fkey"
                        columns: ["recipe_id"]
                        isOneToOne: false
                        referencedRelation: "recipes"
                        referencedColumns: ["id"]
                    },
                ]
            }
            recipes: {
                Row: {
                    caption: string
                    created_at: string
                    id: string
                    image_url: string
                    is_public: boolean
                    language: string
                    low_image_url: string
                    slug: string | null
                    title: string
                    updated_at: string | null
                    user_id: string
                }
                Insert: {
                    caption: string
                    created_at?: string
                    id?: string
                    image_url: string
                    is_public?: boolean
                    language: string
                    low_image_url?: string
                    slug?: string | null
                    title: string
                    updated_at?: string | null
                    user_id: string
                }
                Update: {
                    caption?: string
                    created_at?: string
                    id?: string
                    image_url?: string
                    is_public?: boolean
                    language?: string
                    low_image_url?: string
                    slug?: string | null
                    title?: string
                    updated_at?: string | null
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "public_recipes_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    },
                ]
            }
            request: {
                Row: {
                    created_at: string
                    id: string
                    text: string
                    user_id: string
                }
                Insert: {
                    created_at?: string
                    id?: string
                    text: string
                    user_id: string
                }
                Update: {
                    created_at?: string
                    id?: string
                    text?: string
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "public_request_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    },
                ]
            }
            steps: {
                Row: {
                    id: string
                    name: string
                    recipe_id: string | null
                    step_nbr: number
                    text: string
                }
                Insert: {
                    id?: string
                    name: string
                    recipe_id?: string | null
                    step_nbr: number
                    text: string
                }
                Update: {
                    id?: string
                    name?: string
                    recipe_id?: string | null
                    step_nbr?: number
                    text?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "public_steps_recipe_id_fkey"
                        columns: ["recipe_id"]
                        isOneToOne: false
                        referencedRelation: "recipes"
                        referencedColumns: ["id"]
                    },
                ]
            }
            support: {
                Row: {
                    created_at: string
                    email: string
                    id: string
                    message: string
                    nom: string
                    prenom: string
                }
                Insert: {
                    created_at?: string
                    email: string
                    id?: string
                    message: string
                    nom: string
                    prenom: string
                }
                Update: {
                    created_at?: string
                    email?: string
                    id?: string
                    message?: string
                    nom?: string
                    prenom?: string
                }
                Relationships: []
            }
            users: {
                Row: {
                    avatar_url: string | null
                    full_name: string | null
                    id: string
                    updated_at: string | null
                    username: string | null
                }
                Insert: {
                    avatar_url?: string | null
                    full_name?: string | null
                    id: string
                    updated_at?: string | null
                    username?: string | null
                }
                Update: {
                    avatar_url?: string | null
                    full_name?: string | null
                    id?: string
                    updated_at?: string | null
                    username?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "profiles_id_fkey"
                        columns: ["id"]
                        isOneToOne: true
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    },
                ]
            }
            versions: {
                Row: {
                    created_at: string
                    id: string
                    image: string
                    text: string
                    version: string
                }
                Insert: {
                    created_at?: string
                    id?: string
                    image: string
                    text: string
                    version: string
                }
                Update: {
                    created_at?: string
                    id?: string
                    image?: string
                    text?: string
                    version?: string
                }
                Relationships: []
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
    PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
            Row: infer R
        }
    ? R
    : never
    : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
            Row: infer R
        }
    ? R
    : never
    : never

export type TablesInsert<
    PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Insert: infer I
    }
    ? I
    : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
    }
    ? I
    : never
    : never

export type TablesUpdate<
    PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Update: infer U
    }
    ? U
    : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
    }
    ? U
    : never
    : never

export type Enums<
    PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
