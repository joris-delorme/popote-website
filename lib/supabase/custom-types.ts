import { Tables } from "./types";

export interface RecipeUser extends Pick<Tables<"recipes">, "id" | "created_at" | "title" | "caption" | "image_url" | "public"> {
    user: Pick<Tables<"profiles">, "id" | "username" | "avatar_url"> | null
}