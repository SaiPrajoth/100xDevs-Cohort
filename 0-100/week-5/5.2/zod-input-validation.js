// Importing the Zod library
const z = require('zod');

// Defining a Zod schema for creating a todo item
const CreateTodo = z.object({
    // 'title' field must be a string
    title: z.string(),
    // 'description' field must be a string
    description: z.string()
})

// Defining a Zod schema for updating a todo item
const UpdateTodo = z.object({
    // 'completed' field must be a string
    completed: z.string()
})

// Attempting to parse an object using the CreateTodo schema
const response = CreateTodo.safeParse({ // validates if the inputs types are as specified
    title: "title",
    description: "description"
});
 
