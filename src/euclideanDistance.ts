import {makeProject} from '@motion-canvas/core';

import logo from './scenes/logo?scene';
import question from './scenes/question?scene';
import explain from './scenes/explain?scene';
import dot from './scenes/greendot?scene';


export default makeProject({
  scenes: [logo, question, explain, dot],
});
