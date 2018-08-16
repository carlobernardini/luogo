import React from 'react';
import Luogo from 'luogo';
import { truncate } from 'lodash-es';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Luogo', module);

stories.add('Default', (
    <Luogo />
));
