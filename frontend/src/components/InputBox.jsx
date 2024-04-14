export const InputBox=({label,onChange,placeholder,type="text"})=>{
    return <div>
        <div className="text-lg font-bold text-left py-1 pl-5 text-white">
            {label}
        </div>
        <input onChange={onChange} placeholder={placeholder}  type={type} className=" w-11/12 h-10 px-2 py-2 border rounded-3xl bg-fadegold text-center" />

    </div>

}