import AnimeCard from './AnimeCard';

function SearchResult(props) {
    return (
        props.listOfAnimes.map((element) =>
            <AnimeCard key={element.id} animeDetails={element} />
        )
    );
}

export default SearchResult;