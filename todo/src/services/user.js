import axios from "axios";

export const register = async({fname,phoneNumber,email,password}) => {
    try {
        console.log({fname,phoneNumber,email,password})
        const data = await axios.post("/api/user/register",{
            fname,phoneNumber,email,password
        })
        console.log(data)
    } catch (error) {
        console.log("error in user.js file")
    }
}