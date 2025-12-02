import { PropTypes } from "prop-types";
import { User } from "./User";

export function Recipe({ title, contents, imageURL, author: userId }) {
    return (
        <article>
            <h3>{title}</h3>
            <div>{contents}</div>
            <img src={imageURL} className="recipe-image" style={{width: 300 + "px"}}/>
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
    imageURL: PropTypes.string,
    author: PropTypes.string,
};
