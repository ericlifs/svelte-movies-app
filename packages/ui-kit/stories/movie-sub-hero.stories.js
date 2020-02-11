import { storiesOf } from '@storybook/svelte';
import MovieSubHero from '../MovieSubHero.svelte';

storiesOf('Movie SubHero', module)
    .add('with rating', () => ({
        Component: MovieSubHero,
        props: {
            rating: 9,
        },
    }))
    .add('with rating and rating votes', () => ({
        Component: MovieSubHero,
        props: {
            rating: 9,
            ratingVotes: 1232,
        },
    }))
    .add('with rating and release date', () => ({
        Component: MovieSubHero,
        props: {
            rating: 9,
            ratingVotes: 1232,
            releaseDate: '2020/12/10'
        },
    }))
    .add('with rating, release date and genres', () => ({
        Component: MovieSubHero,
        props: {
            rating: 9,
            ratingVotes: 1232,
            releaseDate: '2020/12/10',
            genres: 'War, Comedy'
        },
    }));