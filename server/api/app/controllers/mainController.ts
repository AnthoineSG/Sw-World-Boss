interface result {
    title: string,
    content: string
}

export const mainController = {
    async home(req: Request, res) {
        const result: result = {
            title: "hello",
            content: "world"
        };

        res.json(result);
    },

};

