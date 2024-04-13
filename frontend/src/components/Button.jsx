export const Button=({label,onClick})=>{
    return <button className="border w-72 h-10 rounded-3xl bg-golden hover:bg-darkgold font-bold" onClick={onClick} type="button">{label}</button>
}