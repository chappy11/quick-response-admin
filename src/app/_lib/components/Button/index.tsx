import { useMemo } from "react";

type Props = {
    text:string;
    onClick:()=>void;
    outline?:boolean;
    disable?:boolean;
  }


export default function Button(props:Props) {
  const {outline,onClick,disable} = props;
  const design = useMemo(() => {
    if(disable){
      return ' px-2 py-3 rounded-md bg-gray-300 text-gray-600'
    }
    if(outline){
      return ' px-2 py-3 rounded-md hover:bg-black hover:text-white border bg-white text-black '
    }

    return ' px-2 py-3 rounded-md hover:border-red-400 hover:border hover:bg-white hover:text-red-400 bg-red-400 text-white'

  }, [outline,disable])
  
  return (
    <button disabled={disable} className={`${design} `} onClick={()=>onClick()} >
        {props.text}
    </button>
  )
}