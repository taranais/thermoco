// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'

import { GetAllSensors } from '../../services/api/Sensors'
import { Sensor } from '../../services/thermoco/models/Sensor'

function ListSensors () {
  const arr = [] as Sensor[]
  const [sensors, setSensors] = useState(arr)
  useEffect(() => {
    async function getSensors () {
      const sensorsRetrived = await GetAllSensors()
      setSensors(sensorsRetrived)
    }
    getSensors()
  }, [])
  return (
    <ul>
      { sensors.map(sensor => (
        <li key={sensor.id}>{sensor.id}</li>
      ))}
    </ul>
  )
}

export default ListSensors
