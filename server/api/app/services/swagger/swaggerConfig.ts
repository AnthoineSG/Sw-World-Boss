export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API SW-WB",
            version: "1.0.0",
            description: "API Summoners war pour avoir des infos sur le World Boss",
            contact: {
                name: "AnthoineSG",
                url: "https://github.com/AnthoineSG/Sw-World-Boss/issues",
            },
            license: {
                name: "License MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
        },
        servers: [
            {
                url: "http://localhost:8080",
                description: "Server de development",
            },
        ],
    },
    apis: ["./api/app/routes/mainRouter.ts"],
};
