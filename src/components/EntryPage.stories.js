// EntryPage.stories.js

import React from 'react';
import EntryPage from './EntryPage.js';

// This default export determines where your story goes in the story list
export default {
  title: 'EntryPage',
  component: EntryPage,
  displayName: 'El Scorcho'
};

const Template = (args) => <EntryPage {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    isMobile: false,
    arg: 'horizontal'
};

export const SecondStory = Template.bind({});

SecondStory.args = {
    isMobile: true,
    arg: null
};