import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TodoList from './TodoList';

storiesOf('TodoList', module)
  .add('empty', () => <TodoList todos={["test1", "test2"]}/>);