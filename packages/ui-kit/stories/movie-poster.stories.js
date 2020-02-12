import { storiesOf } from '@storybook/svelte';
import MoviePoster from '../MoviePoster.svelte';

storiesOf('Movie Poster', module)
    .add('with id and no background', () => ({
        Component: MoviePoster,
        props: {
            id: 'jojo'
        },
    }))
    .add('with background', () => ({
        Component: MoviePoster,
        props: {
            poster: '7GsM4mtM0worCtIVeiQt28HieeN.jpg'
        },
    }))
    .add('with background and title', () => ({
        Component: MoviePoster,
        props: {
            title: 'Jojo Rabit',
            poster: '7GsM4mtM0worCtIVeiQt28HieeN.jpg'
        },
    }))
    .add('with background, title and rating', () => ({
        Component: MoviePoster,
        props: {
            title: 'Jojo Rabit',
            rating: 9,
            poster: '7GsM4mtM0worCtIVeiQt28HieeN.jpg'
        },
    }));