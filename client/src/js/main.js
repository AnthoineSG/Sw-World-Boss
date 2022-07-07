const app = {
    baseUrl: "http://localhost:8080/api",

    init() {
        console.log("Hello");
        app.fetchAllWizard();
    },

    async fetchAllWizard() {
        const urlToFetch = app.baseUrl + "/actualwb";
        const fetchOptions = {
            method: "GET"
        };

        const response = await fetch(urlToFetch, fetchOptions);
        if (response.ok) {
            const toto = await response.json();
            console.log(toto[0].pseudo);
        }
        else {
            return;
        }
    },
};

app.init();