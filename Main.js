class Hero {
  #powerCount = 10;
  //   błąd, nie powinno tutaj tego być, właściwe miejsce - w kontruktorze klasy//
  constructor(name) {
    this.name = name;
    //     góra tu jest okej, dodałym tu "contructor(name, powerCount) i dalej.... this.powerCount = powerCount"
  }
  getCurrentPowerCount() {
    return this.#powerCount;

    //     tu jest okej
  }
  train() {
    this.#powerCount + 1;
    //źle zapisana inkrementacja. Powinno być this.#powerCount++ bądź #this.powerCount +=1
  }
}

let heroCount = 0;
// Counter jest okej//

const heroes = [];

// Tablica- to jest okej//

let hero = getHero("hulk");
let geralt = getHero("geralt");

heroes.push(hero);
heroes.push(geralt);

print_hall_of_fame();

function getHero() {
  heroCount++;
  let hero = new Hero("hulk");
  //Do tworzenia nowych instacji obiektu po pierwsze należałoby użyć const zamiast let. Po drugie powyższa funkcja nic nie zwraca. Należałoby użyć insturkcji return. Po drugie, do "new Hero " mamy na stałe przypisany argument "Hulk". Biorąc pod uwagę zapisy wcześniejszych linii kodu, należy stwierdzićze podawane tam argumennty nie mają żadnego zastosowania. Dodatkowo, jako iż nic nie jest zwracane to też nc do tabliicy "heroes" nie zostane wepchnięte. Tablica pozostanie pusta
}

const print_hall_of_fame = () => {
  //złe miejsce zadeklarowania funkcjii. W tym wypadku powinno być nad wywołaniiem funkcji, zły sposób zapisania funkcji - powinno być camelCase: "printHallOfFame"//

  let spiderman = getHero(spider);

  //czym jest tu podany w argumencie spider ? nie jest określone. Przypisanie do let - błąd.//

  heroes.push(spiderman);

  //nic nie zostanie wypchnięte do tablicy - nic nie zostanie zwróćone//
  const heroesContainer = document.querySelector("#div");
  //zły queryselector. Powinno być wyszukiwanie po klasie np "querySelector(".heroesSelector").

  heroes.map((x,i,arr) => {
            //brak destrukturyzacji przy argumencie//
            const heroElement = document.createElement("div");
            //tu jest okej//
            const [name] = x;
            //źle, powinno być {}//

            heroElement.innerHTML = "<p>${name}</p>${x.powercount}</p>";

            //zapisano dwa znaczniki zamykające </p>przy tylko jednym znaczniku otwierającym - dojdzie tu do błędu//

            heroesContainer.append(heroElement)
            //użyta zła metoda, element nie zostanie doodany ponieważ, jest źle zapisany//
  })
};
