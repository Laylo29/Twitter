

const Input = ({classList, placeholder, type}) => {
  return <input type={type} className={`${classList} w-[450px] h-[70px] border-[#00000033] border-2  rounded-md px-[20px]`} placeholder={placeholder}/>
  
}

export default Input