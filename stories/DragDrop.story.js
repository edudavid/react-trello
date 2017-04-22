import React from 'react'
import {storiesOf} from '@kadira/storybook'

import {Board} from '../src'

const data = require('./data.json')

storiesOf('react-trello', module)

  .addWithInfo('Drag-n-Drop',
    'A demonstration of onDragStart and onDragEnd hooks',
    () => {
      const handleDragStart = (cardId, laneId) => {
        console.log('drag started')
        console.log(`cardId: ${cardId}`)
        console.log(`laneId: ${laneId}`)
      }

      const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
        console.log('drag ended')
        console.log(`cardId: ${cardId}`)
        console.log(`sourceLaneId: ${sourceLaneId}`)
        console.log(`targetLaneId: ${targetLaneId}`)
      }

      const shouldReceiveNewData = (nextData) => {
        console.log('data has changed')
        console.log(nextData)
      }

      const laneStyle = 'background-color: #E3E3E3;' +
      'border-radius: 3px;' +
      'margin: 4px;' +
      'width: 20%;' +
      'padding: 5px;' +
      'height: 95%;' +
      'overflow-y: auto;'

      return <Board
        data={data}
        draggable
        onDataChange={shouldReceiveNewData}
        handleDragStart={handleDragStart}
        handleDragEnd={handleDragEnd}
        laneStyle={laneStyle}
      />
    }
  )
