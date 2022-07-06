# Pour use swagger-jsdoc et swagger-ui-express

- [Exemple](https://github.com/FaztWeb/typescript-swagger-lowdb)

- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)

- [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)

- [Repo des boss de Cassini](https://github.com/Megafredo/swagger-docs)

- [Article version simple](https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do)

## Pour utilise ses modules

Dans le server.ts

```js
import * as swaggerUI from "swagger-ui-express";
import * as swaggerJsDoc from "swagger-jsdoc";
import { options } from "./app/services/swaggerConfig";

const specs = swaggerJsDoc(options);
app.use("/apidocs", swaggerUI.serve, swaggerUI.setup(specs));
```

## Pour les options

Dans un fichier a part pour bien ranger

```js
export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API SW-WB",
            version: "1.0.0",
            description: "API Summoners war pour avoir des infos sur le World Boss",
        },
    },
    apis: ["./app/routes/mainRouter.ts"], // A preciser a partir du package.json
};
```

## Pour faire des schema

Dans le router

```js
/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of task
 *        name:
 *          type: string
 *          description: the name of the task
 *        description:
 *          type: string
 *          description: the description of the task
 *      required:
 *        - name
 *        - description
 *      example:
 *        id: gQBOyGbxcQy6tEp0aZ78X
 *        name: My first Task
 *        description: I have to do Something
 *    TaskNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found task
 *      example:
 *        msg: Task was not found
 *
 *  parameters:
 *    taskId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the task id
 */

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 */
```

## Pour faire une description de route

````js
/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Get a task by Id
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: the total number of tasks
 *        content:
 *          text/plain:
 *            schema:
 *              type: integer
 *              example: 15
 *
 */
router.get("/tasks/count", count);

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: create a new task
 *    tags: [Tasks]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: the tasks was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      500:
 *        description: Some server error
 *
 */
router.post("/tasks", createTask);

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: Update a task by id
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: The updated task 
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: the task was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskNotFound'
 *
 */
router.put("/tasks/:id", updateTask);

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: delete a task by id
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    responses:
 *      200:
 *        description: the task was deleted
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: the task was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskNotFound'
 *
 */
router.delete("/tasks/:id", deleteTask);
```
