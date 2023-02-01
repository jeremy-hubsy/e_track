import Link from "next/link";
import { IconType } from "react-icons";

type Data = {
  name: string;
  icon: IconType;
  path: string;
};

type Props = {
  data: Data[];
};

export default function MenuItem(props: Props) {
  return (
    <div>
      <ul>
        {props.data.map((element, i) => {
          return (
            <li key={i}>
              <Link className="flex flex-row items-center" href="/">
                <element.icon size={25} />
                <p className="p-2">{element.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
