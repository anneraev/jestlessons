import domManager from './domManager';
import htmlBuilder from './htmlBuilder';
import mathematics from "./math";

domManager.postToDom(htmlBuilder.elementBuilder('text','sum-test', mathematics.sum(1,3).toString()))

