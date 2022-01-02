import React from "react";
import RelatedListEntry from './RelatedListEntry'
import OutfitList from './OutfitList'
import { IconButton } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function RelatedList(props) {
  const [xPos, setXPos] = React.useState(0)
  const [renderLeft, setRenderLeft] = React.useState(0)

  const entry =  props.related.map(product => {
    if (props.selected.id !== product.id) {
      return(
          <RelatedListEntry key={product.id}
            currentItem={product}
            setRenderTable={props.setRenderTable}
            setSelectRelated={props.setSelectRelated}
            renderTable={props.renderTable}
            darkTheme={props.darkTheme}
          />
      )
    }
  })

  function translateX(direction) {
    if (direction === 'right') {
      setRenderLeft(count => count + 1)
      setXPos(x => x - 200)
    } else {
      setRenderLeft(count => count - 1)
      setXPos(x=> x + 200)
    }
  }

  return (
    <div className="carousel-container">
        <div className= "carousel-container-inner" style={{transform: `translateX(${xPos}px)`, width:`${props.width}px`}}>
          {entry}
        </div>
      {(renderLeft >0) && <ArrowBackIosNewIcon className="slide-button-left" onClick={() => translateX('left')}/>}
      <ArrowForwardIosIcon className="slide-button-right" onClick={() => translateX('right')}/>
    </div>
  )
}

//{(renderLeft > 0) &&