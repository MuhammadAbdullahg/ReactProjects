import MenuItem from "./MenuItem";

export default function MenuList({ listItems }) {
  return (
    <ul>
      {listItems ? listItems.map((list) => <MenuItem list={list} />) : null}
    </ul>
  );
}
