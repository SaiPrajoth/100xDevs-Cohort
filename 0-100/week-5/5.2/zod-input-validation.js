const z = require('zod');
const CreateTodo = z.object({
    title:z.string(),
    description:z.string()
})
