

import  type { ButtonInterface } from "./config"
const variants={
    primary:"bg-[#e1e7fe] text-[#5146e5] hover:bg-violet-200",
    secondry:"bg-[#5146e5] text-white hover:bg-blue-600",
    signUp:'bg-violet-500 text-white hover:bg-violet-600'
}

const btnSize={
  "sm": 'h-12 w-58 px-4 py-2 text-sm',
  "md": 'px-6 py-3 text-base', 
  "lg": 'px-8 py-4 text-lg h-12 w-72'
}

const Default='rounded-md'

export default function Button(props:ButtonInterface){
    return (
        <button onClick={props.onClick} className= {`flex items-center justify-center gap-1 ${variants[props.variant]} cursor-pointer ${variants[props.variant]} ${btnSize[props.size]} ${Default}`}>{props.icon} {props.text}</button>
    )
}