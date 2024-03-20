import DashboardCard from "@/app/_lib/components/DashboardCard";
import TextHeader from "@/app/_lib/components/TextHeader";

export default function DashboardPage() {
  return (
    <div>
      <TextHeader text="Dashboard" />
      <div className=" mt-8 gap-3 grid grid-cols-3">
        <DashboardCard title={"User's Count"} counts={"400"} />
        <DashboardCard title="Admin Counts" counts={"500"} />
        <DashboardCard title="Post's per Days" counts="700" />
      </div>
    </div>
  );
}
