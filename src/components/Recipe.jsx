import { PropTypes } from "prop-types";
import { User } from "./User";

export function Recipe({ title, contents, author: userId }) {
    return (
        <article>
            <h3>{title}</h3>
            <div>{contents}</div>
            {userId && (
                <em>
                    <br />
                    Written by <User id={userId} />
                </em>
            )}
        </article>
    );
}

Recipe.propTypes = {
    title: PropTypes.string.isRequired,
    contents: PropTypes.string,
    author: PropTypes.string,
};
