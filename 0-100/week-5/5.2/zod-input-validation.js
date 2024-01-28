const z = require('zod');
const CreateTodo = z.object({
    title:z.string(),
    description:z.string()
})

const UpdateTodo = z.object({
    completed:z.string()
})

const response = CreateTodo.safeParse({title:"title",description:"description"}); // validates if the inputs types are as specified
