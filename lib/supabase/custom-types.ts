import { Tables } from "./types";

export interface RecipeUser extends Pick<Tables<"recipes">, "id" | "created_at" | "title" | "caption" | "image_url" | "is_public"> {
    user: Pick<Tables<"users">, "id" | "username" | "avatar_url"> | null
}