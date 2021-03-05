function AnimeCard(props) {
    return (
        <div>
            <h3>Title : {props.animeDetails.attributes.titles.en}</h3>
            <p>synopsis : {props.animeDetails.attributes.synopsis}</p>
            <br />
            <br />
        </div>
    );
}

export default AnimeCard;