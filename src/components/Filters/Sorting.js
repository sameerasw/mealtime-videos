import React from 'react'

const Sorting = () => {
  return (
    <mdui-segmented-button-group selects="single" value="top">
      <mdui-segmented-button value="new" icon="fiber_new">New</mdui-segmented-button>
      <mdui-segmented-button value="top" icon="star">Top</mdui-segmented-button>
    </mdui-segmented-button-group>
  )
}

export default Sorting