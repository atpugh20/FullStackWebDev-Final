import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";
import { createRecipe } from "../api/recipes.js";

export function CreateRecipe() {
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [token] = useAuth();

    const queryClient = useQueryClient();
    const createPostMutation = useMutation({
        mutationFn: () => createRecipe(token, { title, contents }),
        onSuccess: () => queryClient.invalidateQueries(["posts"]),
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        createPostMutation.mutate();
    };

    if (!token) return <div>Please log in to create new recipes.</div>;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="create-title">Recipe Name: </label>
                <input
                    type="text"
                    name="create-title"
                    id="create-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <br />
            <textarea
                value={contents}
                onChange={(e) => setContents(e.target.value)}
            />
            <br />
            <br />
            <input
                type="submit"
                value={createPostMutation.isPending ? "Creating..." : "Create"}
                disabled={!title || createPostMutation.isPending}
            />
            {createPostMutation.isSuccess ? (
                <>
                    <br />
                    Recipe created successfully!
                </>
            ) : null}
        </form>
    );
}
