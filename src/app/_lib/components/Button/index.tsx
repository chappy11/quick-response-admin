import { useMemo } from "react";

type Props = {
  text: string;
  onClick?: () => void;
  outline?: boolean;
  disable?: boolean;
  type: any;
};

export default function Button(props: Props) {
  const { outline, onClick, disable, type } = props;
  const design = useMemo(() => {
<<<<<<< Updated upstream
    if(disable){
      return ' w-full px-2 py-3 rounded-md bg-gray-300 text-gray-600'
    }
    if(outline){
      return 'w-full px-2 py-3 rounded-md hover:bg-black hover:text-white border bg-white text-black '
    }

    return 'w-full px-2 py-3 rounded-md hover:border-red-400 hover:border hover:bg-white hover:text-red-400 bg-red-400 text-white'
=======
    if (disable) {
      return " px-2 py-3 rounded-md bg-gray-300 text-gray-600";
    }
    if (outline) {
      return " px-2 py-3 rounded-md hover:bg-black hover:text-white border bg-white text-black ";
    }

    return " px-2 py-3 rounded-md hover:border-red-400 hover:border hover:bg-white hover:text-red-400 bg-red-400 text-white";
  }, [outline, disable]);
>>>>>>> Stashed changes

  return (
    <button
      disabled={disable}
      className={`${design} `}
      onClick={props?.onClick}
      type={type}
    >
      {props.text}
    </button>
  );
}
