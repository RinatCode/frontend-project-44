#!/usr/bin/env node

import gameLogic from '../src/index.js';
import { task, answer, questionAndCorrectAnswerFunc } from '../src/games/calc.js';

gameLogic(task, answer, questionAndCorrectAnswerFunc);
