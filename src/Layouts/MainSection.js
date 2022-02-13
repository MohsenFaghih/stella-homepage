import React from 'react'

const MainSection = (props) => {
  return (
    <div className='MainSectionRoot'>
        {props.children.search}
        {props.children.featured}
        {props.children.mobile}
        {props.children.gallery}
    </div>
  )
}

export default MainSection