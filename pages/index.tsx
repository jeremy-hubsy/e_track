import Image from "next/image";
import MyDivider from "../components/atoms/myDivider";

export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-80px)] bg-gradient-to-b from-zinc-900 to to-black">
      <div className="h-2/6 flex items-center p-10">
        <Image
          src="/artist.png"
          width={120}
          height={20}
          className="rounded-full"
          alt="profile picture"
        />
        <div className="m-5 text-white">
          <p>Profile</p>
          <p>Scott Moss</p>
          <p>10 public playlists</p>
        </div>
      </div>
      <div className="h-4/6 bg-black text-white p-5">
        <div className="p-10">
          <p>Top artists this month</p>
          <p>Only visible to you</p>
        </div>
        <div className="p-10">
          <Image
            src="/artist.png"
            width={120}
            height={20}
            className="rounded-full"
            alt="artist picture"
          />
          <p>The Weeknd</p>
          <p>Artist</p>
        </div>
      </div>
    </div>
  );
}
