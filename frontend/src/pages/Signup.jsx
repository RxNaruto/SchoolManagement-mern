import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signup=()=>{
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            
            <div className="bg-lightningblue rounded-xl w-96 p-4 px-4 h-max text-center">
            <Heading label={"Signup"}/>
            <SubHeading label={"Enter your information to create account"} />
            <InputBox  placeholder= "Jon@email.com" label={"Username"}/>
            <InputBox  placeholder= "password" label={"Password"}/>
            <InputBox  placeholder= "Jon Doe" label={"Name"}/>
            <InputBox  placeholder= "1232" label={"Roll no."}/>
            <InputBox  placeholder= "9873232323" label={"Mobile No."}/>
            <div className="pt-8 pb-2">
                <Button label={"Signup"} />
            </div>
            </div>
                
            
           
        </div>
    </div>
}