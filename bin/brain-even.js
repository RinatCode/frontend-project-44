#!/usr/bin/env node

import gameLogic from '../src/index.js';
import { task, answer, questionAndCorrectAnswerFunc } from '../src/games/even.js';

gameLogic(task, answer, questionAndCorrectAnswerFunc);
