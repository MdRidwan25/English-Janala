// https://openapi.programming-hero.com/api/levels/all

const loadLessons = ()=>{

fetch('https://openapi.programming-hero.com/api/levels/all') //promise of response
.then(res => res.json()) //promise of json data
.then(json => displayLessons(json.data))


};

const loadLavelWord=(id)=>{

    const ulr = `https://openapi.programming-hero.com/api/level/${id}`;
fetch(ulr)
.then(res => res.json())
.then(data => displayLavelWord(data.data))


}

// {
//     "id": 84,
//     "level": 1,
//     "word": "Fish",
//     "meaning": "মাছ",
//     "pronunciation": "ফিশ"
// }

const displayLavelWord = (words)=>{

const wordContainer = document.getElementById('word-container');
wordContainer.innerHTML = '';


if(words.length == 0){

wordContainer.innerHTML =` 


<div class="text-center  col-span-full rounded-xl py-10 space-y-6 font-bangla">

<img class="mx-auto" src="./assets/alert-error.png" alt="">

<p class="text-xl font-medium text-gray-400 ">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>

<h2 class="font-bold text-3xl">নেক্সট Lesson এ যান</h2>
</div>



`;
return;
}



words.forEach(word =>{

console.log(word);

const card = document.createElement('div');

card.innerHTML = `

<div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">

<h2 class="font-bold text-2xl">${word.word}</h2>
<p class="font-semibold">Meaning /Pronounciation</p>

<div class="text-2xl font-medium font-bangla">${word.meaning} / ${word.pronunciation}</div>

<div class="flex justify-between items-center">

    <button class="btn1 bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
    
    <button class="bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid  fa-volume-high"></i></button>

</div>

</div>
`;

wordContainer.append(card);


})

}


const displayLessons =(lessons)=>{

console.log(lessons);

//  1. get the container & empty
const lavelContainer = document.getElementById('lavel-container');
lavelContainer.innerHTML = "";



// 2. get into every lessons useing for loop and create element and append child all code write in a for loop section

for(let lesson of lessons){

// 3. create Element

const btnDiv = document.createElement('div');

btnDiv.innerHTML = `
<button onclick="loadLavelWord(${lesson.level_no })" class=" btn btn-outline btn-primary">

<i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no }

</button>

`;

// 4. append into container

lavelContainer.append(btnDiv);



}





}


loadLessons()