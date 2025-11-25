import { Fragment } from "react";
import PropTypes from "prop-types";
import { Recipe } from "./Recipe.jsx";

export function RecipeList({ posts = [] }) {
    return (
        <div>
            {posts.map((post) => (
                <Fragment key={post._id}>
                    <Recipe {...post} key={post._id} />
                    <hr />
                </Fragment>
            ))}
        </div>
    );
}

RecipeList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape(Recipe.propTypes)).isRequired,
};
