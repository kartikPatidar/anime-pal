import altImgSrc from './Images/imageNotFound.jpg';

function AnimeCard(props) {
    let imgSrc = props.animeDetails.attributes.coverImage && props.animeDetails.attributes.coverImage.tiny ?
        props.animeDetails.attributes.coverImage.tiny : altImgSrc;

    return (
        <div>
            <h3>Title : {props.animeDetails.attributes.titles.en}</h3>
            <p>synopsis : {props.animeDetails.attributes.synopsis}</p>
            <img src={imgSrc} alt={`${props.animeDetails.attributes.titles.en}'s poster`} />
            <br />
            <br />
        </div>
    );
}

export default AnimeCard;