import type { MetaArgs } from "react-router";
import { ButtonGroup } from "~/buttonGroup/buttonGroup";

export const meta = ({}: MetaArgs) => {
  return [
    { title: "Button" },
    { name: "description", content: "A simple button component" },
  ];
};
export default function Button() {
  return <ButtonGroup />;
}
