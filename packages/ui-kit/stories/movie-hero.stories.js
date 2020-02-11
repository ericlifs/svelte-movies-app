import { storiesOf } from '@storybook/svelte';
import MovieHero from '../MovieHero.svelte';

storiesOf('Movie Hero', module)
    .add('with description and title', () => ({
        Component: MovieHero,
        props: {
            title: '1917',
            description: 'After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord.',
        },
    }))
    .add('with hero background and description', () => ({
        Component: MovieHero,
        props: {
            title: '1917',
            description: 'After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord.',
            background: 'http://image.tmdb.org/t/p/w1280/5BwqwxMEjeFtdknRV792Svo0K1v.jpg',
        },
    }))
    .add('with hero background, description and id', () => ({
        Component: MovieHero,
        props: {
            title: '1917',
            description: 'After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord.',
            background: 'http://image.tmdb.org/t/p/w1280/5BwqwxMEjeFtdknRV792Svo0K1v.jpg',
            id: '123123'
        },
    }));