async function loadEvent() {
    const rootElement = document.getElementById('root');
    
    const res = await fetch("https://restcountries.com/v3.1/name/peru");
    const peru = await res.json();

    // console.log(`peru's length: `,peru.length);
    // console.log(typeof peru);
    // console.log(peru[0].name.official);

    const peruO = peru[0];
    console.log(peruO);

    //ITERATING OVER LANGUAGES
    let firstLang = `first language`;
    for (let language in peru[0].languages) {
        firstLang = peru[0].languages[language];
        break;
      }

    //LANDLOCKED OR NOT
    if (peruO.landlocked === true) {
        isLandlockedText = `Peru is a landlocked country`;
    } else {
        isLandlockedText = `Peru is not a landlocked country`;
    }

    const peruHTML = `
        <section class="independent">
            <img src="${peruO.flags.png}" alt="flag">
            <h1>${peruO.name.official}</h1>
            <h2>${peruO.capital}</h2>
            <ul>
                <li>First language: ${firstLang}</li>
            </ul>
            <h5>${isLandlockedText}</h5>
        </section>
    `;

    console.log(rootElement);

    rootElement.insertAdjacentHTML('beforeend', peruHTML);
}

window.addEventListener("load", loadEvent);
