import { Tables } from "./types";

export interface RecipeUser extends Pick<Tables<"recipes">, "id" | "low_image_url" | "created_at" | "title" | "caption" | "image_url" | "is_public" | "slug"> {
    user: Pick<Tables<"users">, "id" | "username" | "avatar_url"> | null
}