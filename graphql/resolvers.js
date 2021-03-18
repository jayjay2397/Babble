const user = require("../models/user")

module.exports = {
    Query: {
        getUsers: async () => {
            try {
                const users = await User.findALL()

                return users
            } catch (err) {
                console.log(err)
            }
        },
    },
    Mutation: {
        register: async (_, args) => {
            const { username, email, password, confirmPassword } = args

            try {
             // TODO: Validate data that has been input 

             // TODO: Check if username or email alreadt exist

             // TODO: Create user
             const user = await User.create({
                username, 
                email, 
                password,
             })

             // TODO: Return user
             return user 
            } catch(err){   
              console.log(err)
              throw err  
            }
        }
    }
}

