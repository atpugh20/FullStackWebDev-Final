import { RecipeList } from "../components/RecipeList.jsx";
import { CreateRecipe } from "../components/CreateRecipe.jsx";
import { RecipeFilter } from "../components/RecipeFilter.jsx";
import { RecipeSorting } from "../components/RecipeSorting.jsx";

import { Header } from "../components/Header.jsx";

import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../api/recipes.js";
import { useState } from "react";

export function RecipePage() {
    const [author, setAuthor] = useState("");
    const [sortBy, setSortBy] = useState("createdAt");
    const [sortOrder, setSortOrder] = useState("descending");

    const postsQuery = useQuery({
        queryKey: ["posts", { author, sortBy, sortOrder }],
        queryFn: () => getRecipes({ author, sortBy, sortOrder }),
    });

    const posts = postsQuery.data ?? [];

    return (
        <div style={{ padding: 8 }}>
            <Header />
            <br />
            <hr />
            <CreateRecipe />
            <br />
            <hr />
            Filter by:
            <RecipeFilter
                field="author"
                value={author}
                onChange={(value) => setAuthor(value)}
            />
            <br />
            <RecipeSorting
                fields={["createdAt", "updatedAt"]}
                value={sortBy}
                onChange={(value) => setSortBy(value)}
                orderValue={sortOrder}
                onOrderChange={(orderValue) => setSortOrder(orderValue)}
            />
            <hr />
            <RecipeList posts={posts} />
        </div>
    );
}
