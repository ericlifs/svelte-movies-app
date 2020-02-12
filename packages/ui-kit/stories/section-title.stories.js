import { storiesOf } from '@storybook/svelte';
import SectionTitle from '../SectionTitle.svelte';

storiesOf('Section Title', module)
    .add('not underlined', () => ({
        Component: SectionTitle,
        props: {
            title: 'This is the title',
        },
    }))
    .add('underlined', () => ({
        Component: SectionTitle,
        props: {
            title: 'This is the title',
            underlined: true,
        },
    }));
