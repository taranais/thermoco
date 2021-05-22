import {
  SensorsService,
  Sensor
} from '../thermoco'

const {
  getAllSensorsApiV1SensorsGet
} = SensorsService

export const GetAllSensors = async (): Promise<Array<Sensor>> => {
  const sensors = await getAllSensorsApiV1SensorsGet()
  return sensors
}
