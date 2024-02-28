import React from "react";

const Book = ({image, title, description, characters, onBtnClick}) => {
    const btnClick = () => {
        onBtnClick(title, characters)
    };

    return (
        <div className="book">
            <img className="img" src={image} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
            <p>Characters: {characters.join(', ')}</p>
            <button onClick={btnClick}>Alert Title and Characters</button>
        </div>
    );
};

export default Book;