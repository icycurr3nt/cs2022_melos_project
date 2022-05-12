const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = 
[{name:"Song0",type:"User", image:"Empty-Song.png",cash:"Description"},
{name:"Song1",type:"User",image:"Empty-Song.png",cash:"Description"},
{name:"Song2",type:"User",image:"Empty-Song.png",cash:"Description"},
{name:"Song3",type:"User",image:"Empty-Song.png",cash:"Description"},
{name:"Song4",type:"User",image:"Empty-Song.png",cash:"Description"},
{name:"Song5",type:"User",image:"Empty-Song.png",cash:"Description"},
{name:"Song6",type:"User",image:"Empty-Song.png",cash:"Description"},
{name:"Song7",type:"User",image:"Empty-Song.png",cash:"Description"}];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.type.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
}

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>User this song was uploaded by: ${character.type}</p>
                <p1>${character.cash}</p1>
                <img src="${character.image}"></img>
              <input type="button" class = "compare" value="Compare Song To..." onclick]="$()">
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();



        