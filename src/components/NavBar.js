import React from 'react'

const NavBar = () => {
  return (
    <mdui-top-app-bar>
      <mdui-button-icon icon="menu">
        {/* <MdMenu /> */}
      </mdui-button-icon>
      <mdui-top-app-bar-title>Mealtime Videos</mdui-top-app-bar-title>
      <div style={{ flex: "1" }}></div>
      <mdui-button-icon variant="tonal" icon="add">
        {/* <MdAdd /> */}
      </mdui-button-icon>
      <div
        style={{
          width: "20%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "var(--mdui-color-surface-bright)",
        }}
      >
        <mdui-text-field
          clearable
          label="Search videos"
          end-icon="search"
          style={{ borderRadius: "var(--mdui-shape-corner-full)" }}
          id="search"
        ></mdui-text-field>
        <mdui-avatar src="https://avatars.githubusercontent.com/u/1024025?v=4"></mdui-avatar>
      </div>
    </mdui-top-app-bar>
  )
}

export default NavBar