const z = require('zod');

const signupBodyStudent=z.object({
    username: z.string().email(),
    password: z.string(),
    name: z.string(),
    rollno: z.number(),
    mobileno: z.number()

})

const signinBodyStudent=z.object({
    username: z.string().email(),
    password: z.string()
})

module.exports={
    signupBodyStudent,
    signinBodyStudent
}
