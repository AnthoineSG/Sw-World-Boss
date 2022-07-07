const homePage = {
    baseUrl: "http://localhost:8080/api",

    init() {
        console.log("Bienvenue sur la homePage");
        document.querySelector(".main__div form").addEventListener("submit", homePage.form);
    },

    async form(event) {
        event.preventDefault();

        const data = new FormData(event.target);

        try {
            if (data.get("pseudo") && data.get("email") && data.get("password")) {

                const urlToFetch = homePage.baseUrl + "/user";
                const fetchOptions = {
                    method: "POST",
                    body: data
                };
                const response = await fetch(urlToFetch, fetchOptions);

                if (response.ok) {
                    const newUser = await response.json();
                    console.log(newUser);
                }
                else {
                    throw new Error("Il y a un probleme en BDD");
                }
            }
            else {
                alert("Il manque des information !\nMerci de les completer !");
                return;
            }
        } catch (error) {
            return console.log(error.message);
        }
    },
};

homePage.init();