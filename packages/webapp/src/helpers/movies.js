export const getGenresForPopularMovie = (movie, genres) => {
    return (movie.genre_ids || []).reduce((memo, current) => {
        const genre = (genres || []).find(({ id }) => id === current);

        if (memo) {
            return `${memo}, ${genre.name}`;
        }

        return genre.name;
    }, '');
};

export const getGenresForMovie = movie => {
    return movie.genres.reduce((memo, genre) => {
        if (!memo) {
            return genre.name;
        }

        return `${memo}, ${genre.name}`;
    }, '')
};