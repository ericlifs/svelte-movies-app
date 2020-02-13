import { storiesOf } from '@storybook/svelte';
import GridItem from '../GridItem.svelte';

storiesOf('Grid Item', module)
    .add('with no background', () => ({
        Component: GridItem,
        props: { },
    }))
    .add('with background', () => ({
        Component: GridItem,
        props: {
            background: '7GsM4mtM0worCtIVeiQt28HieeN.jpg'
        },
    }))
    .add('with background and title', () => ({
        Component: GridItem,
        props: {
            title: 'Jojo Rabit',
            background: '7GsM4mtM0worCtIVeiQt28HieeN.jpg'
        },
    }))
    .add('with background, title and subtitle', () => ({
        Component: GridItem,
        props: {
            title: 'Jojo Rabit',
            subtitle: 'Rating: 9',
            background: '7GsM4mtM0worCtIVeiQt28HieeN.jpg'
        },
    }));