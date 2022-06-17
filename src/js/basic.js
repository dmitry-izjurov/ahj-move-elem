import Goblin from './Goblin';
import {positionsDOM, getAttack} from './utils';

let timerId = setInterval(Goblin.add, 800);
getAttack(positionsDOM);