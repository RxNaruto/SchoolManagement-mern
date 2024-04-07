const z = require('zod');

const signupBody=z.object({
    username: z.string().email(),
    password: z.string(),
    name: z.string(),
    rollno: z.number(),
    mobileno: z.number()

})

module.exports={
    signupBody
}
