export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API SW-WB",
            version: "1.0.0",
            description: "API Summoners war pour avoir des infos sur le World Boss",
        },
    },
    apis: ["./api/app/routes/mainRouter.ts"],
};
