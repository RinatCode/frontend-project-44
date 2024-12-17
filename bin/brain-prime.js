#!/usr/bin/env node

import gameLogic from '../src/index.js';
import { task, answer, questionAndCorrectAnswerFunc } from '../src/games/prime.js';

gameLogic(task, answer, questionAndCorrectAnswerFunc);
