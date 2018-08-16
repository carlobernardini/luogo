import { configure } from '@storybook/react';

setDefaults({
    header: false
});

const loadStories = () => {
    require('./stories/index.js');
};

configure(loadStories, module);
