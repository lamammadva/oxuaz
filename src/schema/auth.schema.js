const {z} =  require("zod")
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const authSchema = z.object({
    username:z.string().min(6).max(20),
    password:z.string().min(8).max(30).regex(passwordRegex),
    

})
console.log(authSchema);

module.exports = authSchema