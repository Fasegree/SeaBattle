import React from 'react'

export default function ActionsInfo({ shipsReady = false, canShoot = false, ready }) {
    console.log(shipsReady);
    if(!shipsReady){
        return <button className='btn_ready' onClick={ready}>Ships ready</button>
    }
  return (
    <div>
        {canShoot
            ? <p>Shoot</p> : <p>not your shoot</p>
        }
    </div>
  )
}
