const charAPI = "http://localhost:3000/characters";
const charBar = document.getElementById('character-bar');
document.getElementById('votes-form').addEventListener('submit', addVotes);
let voteCount = document.getElementById('vote-count');
let currentCharacter;

fetch(charAPI)
.then(res => res.json())
.then(renderNames)

function renderNames(names) {
    names.forEach(renderName)
}

function renderName(character) {
    const charName = document.createElement('span')
    charName.textContent = character.name;
    charBar.append(charName);
    charName.addEventListener('click', () => renderCharDetail(character))
}

function renderCharDetail(character) {
    currentCharacter = character;
    const charDetail = document.getElementById('detailed-info');
    document.getElementById('name').textContent = character.name;
    const detailImage = document.getElementById('image')
    detailImage.src = character.image;
    detailImage.alt = character.name;
    voteCount.textContent = character.votes;
}

function addVotes(event) {
    event.preventDefault();
    const form = event.target;
    //const value = document.getElementById()
    voteCount.textContent = form.votes.textContent + voteCount.textContent;
    console.log(voteCount.textContent);
    renderCharDetail();
}