const app = {
    baseUrl: "http://localhost:8080/api",

    init() {
        console.log("Bienvenue sur la page de world boss actuel");
        app.fetchAllWizard();
    },

    async fetchAllWizard() {
        const urlToFetch = app.baseUrl + "/actualwb";
        const fetchOptions = {
            method: "GET"
        };

        const response = await fetch(urlToFetch, fetchOptions);
        if (response.ok) {
            const actualwb = await response.json();
            app.makeInDom(actualwb);
        }
        else {
            return;
        }
    },

    makeInDom(actual) {
        const pseudo = document.querySelector(".header__div-pseudo");
        pseudo.textContent = actual[0].pseudo;

        const level = document.querySelector(".header__div-level");
        level.textContent = actual[0].level;
    },
};

app.init();