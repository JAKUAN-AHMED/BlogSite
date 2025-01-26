import { z } from "zod";

const createUserValidation = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(4),
})

const updateUserValidation = createUserValidation.partial();
export const UserSchemaValidation={
    createUserValidation,
    updateUserValidation
}