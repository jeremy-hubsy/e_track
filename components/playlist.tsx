import Link from "next/link";

type Playlist = {
  name: string;
  path: string;
};

type Props = {
  data: Playlist[];
};

export default function Playlists(props: Props) {
  return (
    <div>
      <ul>
        {props.data.map((element, i) => {
          return (
            <li className="p-1" key={i}>
              <Link href={element.path}>
                <p>{element.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
