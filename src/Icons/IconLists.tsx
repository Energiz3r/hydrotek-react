import React, { useState } from "react";
import { ClickToCopy } from "./ClickToCopy";
import { icons } from "./IconListsGenerated";
import { styles } from "./IconLists.css";

export const IconList = (): JSX.Element => {
  const [searchString, setSearchString] = useState("");

  const IconWrapper = ({
    name,
    file,
    children,
  }: {
    name?: string;
    file?: string;
    children: React.ReactNode;
  }) => {
    //const file = name?.replace("Icon", "");
    const path = `import { ReactComponent as ${name} } from '../Icons/${file}';`;
    return (
      <ClickToCopy content={path}>
        <div className={styles.icon}>{children}</div>
      </ClickToCopy>
    );
  };

  const handleSearch = (event: any) => {
    setSearchString(event.target.value);
  };

  const iconListFiltered =
    searchString !== ""
      ? icons
          .filter((iconObj) =>
            iconObj.iconName.toLowerCase().includes(searchString.toLowerCase())
          )
          .slice(0, 50)
      : icons.slice(0, 50);

  return (
    <div className={styles.container}>
      <div>
        <h4>Search</h4>
        <input type="text" onChange={handleSearch} value={searchString} />
      </div>
      {iconListFiltered.map((iconObj: any, i: number) => {
        const Icon = iconObj.Icon;
        return (
          <IconWrapper name={iconObj.Icon.name} file={iconObj.iconFile} key={i}>
            <Icon />
            <div>{iconObj.iconName}</div>
          </IconWrapper>
        );
      })}
    </div>
  );
};
