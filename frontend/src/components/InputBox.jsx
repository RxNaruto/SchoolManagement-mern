export const InputBox=({label,onChange,placeholder})=>{
    return <div>
        <div className="text-lg font-bold text-left py-1 pl-1 text-white">
            {label}
        </div>
        <input onChange={onChange} placeholder={placeholder} className=" w-72 h-10 px-2 py-2 border rounded-3xl bg-fadegold text-center" />

    </div>

}