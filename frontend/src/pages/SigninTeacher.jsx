import { useState } from "react"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const SigninTeacher=()=>{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const navigate =useNavigate();
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            
            <div className="bg-lightningblue rounded-xl w-96 p-4 px-4 h-2/4 text-center">
            <Heading label={"Signin"}/>
            <SubHeading label={"Enter your information to create account"} />
            <InputBox onChange={(e)=>{
                setUsername(e.target.value);
                
            }} placeholder= "Jon@email.com" label={"Username"}/>
            <InputBox onChange={(e)=>{
                setPassword(e.target.value);
                
            }} placeholder= "password" label={"Password"}/>
            
            <div className="pt-8 pb-2">
                <Button onClick={
                    async()=>{
                        try{
                            const response = await axios.post("http://localhost:3000/api/v1/teacher/signin",{
                            username:username,
                            password:password
                            
                        
                        })
                        if(response.status===200){
                            localStorage.setItem("token",response.data.token);
                            
                            navigate("/user");
                        }
                        
                        }catch(e){
                            console.log(e);
                        
                        }
                        

                       
                    
                    }
                } label={"Signin"} />
            </div>
            </div>
                
            
           
        </div>
    </div>
}