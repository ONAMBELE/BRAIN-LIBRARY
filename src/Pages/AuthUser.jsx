import { useState } from "react"
import "./AuthUser.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function AuthUser(props) {
    const [errors,setErrors] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()


    function auth() {
        axios.post("http://localhost:3000/api/auth",{
            username: username,
            password: password
        })
        .then(res=>{
            setTimeout(() => {
                navigate("/Home")
            }, 1000);
        })
        .catch(error=>{
            setErrors(error.response.data.message)
        })
    }


    return (
        <div className="AuthUser">
            <form action="" onSubmit={(e)=>{e.preventDefault()}}>
                <h1>User authentication</h1>
                <input type="username" name="username" id="username" placeholder="username" required
                    onChange={(e)=>{
                        setUsername(e.target.value)
                        setErrors("")
                    }}
                />
                <input type="password" name="password" id="password" placeholder="Password" required
                    onChange={(e)=>{
                        setPassword(e.target.value)
                        setErrors("")
                    }}
                />
                <div className="errors">
                    {
                        errors
                    }
                </div>
                <input type="submit" value="Login" className="submit"
                    onClick={e=>{auth()}}
                />
            </form>
        </div>
    )

}