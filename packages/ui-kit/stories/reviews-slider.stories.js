import { storiesOf } from '@storybook/svelte';
import ReviewsSlider from '../ReviewsSlider.svelte';

const reviews = [
    { author: 'Author 1', content: 'This is the content 1', url: 'google.com' },
    { author: 'Author 2', content: 'This is the content 2', url: 'google.com' },
];

storiesOf('Reviews Slider', module)
    .add('one slide', () => ({
        Component: ReviewsSlider,
        props: {
            reviews: reviews.slice(0, 1),
        },
    }))
    .add('one slide with no url', () => ({
        Component: ReviewsSlider,
        props: {
            reviews: [{ author: 'Author 3', content: 'This is the content of the review' }],
        },
    }))
    .add('more than one slide', () => ({
        Component: ReviewsSlider,
        props: {
            reviews
        },
    }));