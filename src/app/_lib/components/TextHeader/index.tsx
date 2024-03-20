type Props = {
  text: string;
};

export default function TextHeader(props: Props) {
  return <h1 className=" text-lg text-gray-500 font-bold">{props.text}</h1>;
}
