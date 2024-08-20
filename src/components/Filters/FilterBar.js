import React from "react";
import ChipsList from "./ChipsList";
import Sorting from "./Sorting";

const FilterBar = () => {
  return (
    <>
      <mdui-container style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "var(--mdui-color-surface-bright)",
      }}>
        <ChipsList />
        <Sorting />
      </mdui-container>
    </>
  );
};

export default FilterBar;
