const bcrypt = require('bcryptjs')
const { UserInputError } = require('apollo-server')
const { User } = require("../models/user")

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
            let { username, email, password, confirmPassword } = args

            try {
             // TODO: Validate data that has been input 
             if(email.trim() === '') 
                errors.email = 'email must not be empty'
             if(username.trim() === '') 
                errors.username = 'username must not be empty'
             if(password.trim() === '') 
                errors.password = 'password must not be empty'
             if(confirmPassword.trim() === '') 
                errors.confirmPassword = 'repeat password must not be empty'

             if(password !== confirmPassword) errors.confirmPassword = 'password must match'

             // TODO: Check if username or email already exist
             const userByUsername = await User.findOne({ where: { username }})
             const userByEmail = await User.findOne({ where: { email }})

             if(userByUsername) errors.username = 'Username is taken'
             if(userByEmail) errors.email = 'Email is taken'

             if(Object.keys(errors).lenght > 0){
                 throw errors
             }


             // TODO: Hash Password
             password = await bcrypt.hash(password, 6)

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
              throw new UserInputError('Bad input', err) 
            }
        }
    }
}

