import domManager from './domManager';
import htmlBuilder from './htmlBuilder';
import math from "./math";

domManager.postToDom(htmlBuilder.elementBuilder('text','sum-test', math.sum(1,3).toString()))

