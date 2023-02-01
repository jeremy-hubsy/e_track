import Image from "next/image";
import Link from "next/link";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdLibraryAdd,
  MdFavorite,
} from "react-icons/md";
import MyDivider from "./atoms/myDivider";
import MenuItem from "./menuItem";
import Playlists from "./playlist";

const navMenu = [
  { name: "Home", icon: MdHome, path: "/" },
  { name: "Search", icon: MdSearch, path: "/" },
  { name: "Your Library", icon: MdLibraryMusic, path: "/" },
];

const musicMenu = [
  { name: "Create Playlist", icon: MdLibraryAdd, path: "/" },
  { name: "Liked Songs", icon: MdFavorite, path: "/" },
];

const playlists = [
  { name: "Playlist #1", path: "/" },
  { name: "Playlist #2", path: "/" },
];

export default function Sidebar() {
  return (
    <div className="w-full h-[calc(100vh-80px)] bg-black text-gray-500">
      <div className="p-5">
        <Image width={120} height={10} src="/logo.png" alt="logo of etrack" />
      </div>
      <div className="p-5">
        <MenuItem data={navMenu} />
      </div>
      <div className="pl-5">
        <MenuItem data={musicMenu} />
      </div>
      <div className="flex justify-center py-2">
        <MyDivider />
      </div>
      <div className="pl-5">
        <Playlists data={playlists} />
      </div>
    </div>
  );
}
