import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin=()=>{
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            
            <div className="bg-lightningblue rounded-xl w-96 p-4 px-4 h-2/4 text-center">
            <Heading label={"Signin"}/>
            <SubHeading label={"Enter your information to create account"} />
            <InputBox  placeholder= "Jon@email.com" label={"Username"}/>
            <InputBox  placeholder= "password" label={"Password"}/>
            
            <div className="pt-8 pb-2">
                <Button label={"Signin"} />
            </div>
            </div>
                
            
           
        </div>
    </div>
}