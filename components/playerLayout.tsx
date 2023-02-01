import Image from "next/image";
import Sidebar from "./sidebar";

export default function PlayerLayout({ children }: any) {
  return (
    <div className="w-screen h-screen">
      <div className="w-60 absolute">
        <Sidebar />
      </div>
      <div className="ml-60 h-screen ">{children}</div>
      <div className="bottom-0 absolute">Player</div>
    </div>
  );
}
