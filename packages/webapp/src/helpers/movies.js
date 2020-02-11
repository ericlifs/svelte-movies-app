export const getGenresForMovie = (movie, genres) => {
    return (movie.genre_ids || []).reduce((memo, current) => {
        const genre = (genres || []).find(({ id }) => id === current);

        if (memo) {
            return `${memo}, ${genre.name}`;
        }

        return genre.name;
    }, '');
};