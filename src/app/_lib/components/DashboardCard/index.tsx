type Props = {
  title: string;
  counts: string;
};

export default function DashboardCard(props: Props) {
  const { title, counts } = props;
  return (
    <div className=" p-3 border rounded bg-red-100 h-32 ">
      <p className=" text-md font-bold text-red-800">{title}</p>
      <div className=" flex flex-1  justify-center items-center w-full h-full">
        <h3 className=" text-3xl text-center text-red-700 font-bold">
          {counts}
        </h3>
      </div>
    </div>
  );
}
