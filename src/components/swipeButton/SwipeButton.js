import React from 'react'
import './SwipeButton.css'
import IconButton from '@material-ui/core/IconButton'
import  ReplayIcon  from '@material-ui/icons/Replay'
import { Close, Favorite, FlashOn, StarRate } from '@material-ui/icons'

function SwipeButton() {
  return (
    <div className='swipeButtons'>
        <IconButton className='swipeButtons__repeat'>
            <ReplayIcon fontSize="large" />
        </IconButton>
        
        <IconButton className='swipeButtons__left'>
            <Close fontSize="large" />
        </IconButton>

        <IconButton className='swipeButtons__star'>
            <StarRate fontSize="large" />
        </IconButton>
        <IconButton className='swipeButtons__right'>
            <Favorite fontSize="large" />
        </IconButton>
        <IconButton className='swipeButtons__lightning'>
            <FlashOn fontSize="large" />
        </IconButton>
    </div>
  )
}

export default SwipeButton