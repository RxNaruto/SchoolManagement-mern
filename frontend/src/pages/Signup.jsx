import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"

export const Signup=()=>{
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            
            <div className="bg-white rounded w-80 p-4 px-4 h-max text-center">
            <Heading label={"Signup"}/>
            <SubHeading label={"Enter your information to create account"} />
            </div>
                
            
           
        </div>
    </div>
}