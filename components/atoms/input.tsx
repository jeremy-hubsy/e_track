import clsx from "clsx";
import { Dispatch, ReactNode, SetStateAction } from "react";

type InputType = "text" | "email" | "password";

type Props = {
  type: InputType;
  placeholder: string;
  name?: string;
  size?: string;
};

export default function Input(props: Props) {
  const { name, placeholder, size = "regular", type = "text", ...rest } = props;

  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      className={clsx(
        size === "regular" && "p-2 w-96 h-12 rounded",
        size === "medium" && "p-2 w-96 h-12 rounded",
        "bg-zinc-900 border border-zinc-600"
      )}
    />
  );
}
