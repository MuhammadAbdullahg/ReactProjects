import { useState } from "react";
import MenuList from "./MenuList";

export default function MenuItem({ list }) {
  const [displayCurrentMenu, setDisplayCurrentMenu] = useState({});

  function handleClick(getCurrentLabel) {
    setDisplayCurrentMenu({
      ...displayCurrentMenu,
      [getCurrentLabel]: !displayCurrentMenu[getCurrentLabel],
    });
  }



  return (
    <li>
      <div style={{ display: "flex", gap: "10px" }}>
        <p>{list.label}</p>
        {list && list.children ? (
          <span onClick={() => handleClick(list.label)}>
            {displayCurrentMenu[list.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {list && list.children && displayCurrentMenu[list.label] ? (
        <MenuList listItems={list.children} />
      ) : null}
    </li>
  );
}
