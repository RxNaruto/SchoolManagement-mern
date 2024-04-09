const z = require('zod');

const signupBodyTeacher=z.object({
    username: z.string().email(),
    password: z.string(),
    name: z.string(),
    id: z.number(),
    mobileno: z.number()

})
const signinBodyTeacher=z.object({
    username: z.string().email(),
    password: z.string()
})

module.exports={
    signupBodyTeacher,
    signinBodyTeacher

}
