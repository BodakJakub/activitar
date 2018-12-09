'use strict';

interface IAccObject {
    act: string;
    link: string;
}

const actArr: Array<IAccObject> = [
    {act: 'Read a book', link: 'https://www.listchallenges.com/bbcs-top-100-books-you-need-to-read-before-you-die'},
    {act: 'Watch a movie', link: 'https://www.imdb.com/list/ls055592025/'},
    {act: 'Learn a language', link: 'https://www.duolingo.com/'}];

window.onload = function(){
    const revealButton = document.querySelector('#revealBtn');
    const revealText = document.querySelector('#revealText');
    revealButton.addEventListener('click', () => {changeText(revealText)});
};

function changeText(textElement) {
    const [innerText, link] = getActivity(actArr);
    textElement.innerHTML = `<a href=${link} target="_blank">${innerText}</a>`
}

function getActivity(actArr: Array<IAccObject>) {
    const rand: number = getRndInteger(0,3);
    const text: string = getRndText(actArr, rand);
    const link: string = getLink(actArr, rand);
    return [text, link];
}

function getLink(actArr: Array<IAccObject>, num: number) {
    return actArr[num].link;
}

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getRndText(actArray: Array<IAccObject>, num: number) {
    return actArray[num].act;
}