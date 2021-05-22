/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Sensor } from '../models/Sensor';
import { request as __request } from '../core/request';

export class SensorsService {

    /**
     * Get All Sensors
     * Endpoint to retrieve all defined sensors for the authenticated user.
     * @returns Sensor Successful Response
     * @throws ApiError
     */
    public static async getAllSensorsApiV1SensorsGet(): Promise<Array<Sensor>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/sensors/`,
        });
        return result.body;
    }

    /**
     * Create Sensor
     * Endpoint to declare a new temperature sensors.
     * @param requestBody
     * @returns Sensor Successful Response
     * @throws ApiError
     */
    public static async createSensorApiV1SensorsPost(
        requestBody: Sensor,
    ): Promise<Sensor> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/sensors/`,
            body: requestBody,
            errors: {
                422: `Validation Error`,
            },
        });
        return result.body;
    }

    /**
     * Get Sensor
     * Endpoint to retrieve data from a given sensor of the authenticated user.
     * @param sensorId
     * @returns Sensor Successful Response
     * @throws ApiError
     */
    public static async getSensorApiV1SensorsSensorIdGet(
        sensorId: number,
    ): Promise<Sensor> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/sensors/${sensorId}`,
            errors: {
                404: `Not Found`,
                422: `Validation Error`,
            },
        });
        return result.body;
    }

    /**
     * Update Sensor
     * Endpoint to replace all sensor settings.
     * @param sensorId
     * @param requestBody
     * @returns Sensor Successful Response
     * @throws ApiError
     */
    public static async updateSensorApiV1SensorsSensorIdPut(
        sensorId: number,
        requestBody: Sensor,
    ): Promise<Sensor> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/sensors/${sensorId}`,
            body: requestBody,
            errors: {
                404: `Not Found`,
                422: `Validation Error`,
            },
        });
        return result.body;
    }

    /**
     * Delete Sensor
     * Endpoint to delete a sensor.
     * @param sensorId
     * @returns void
     * @throws ApiError
     */
    public static async deleteSensorApiV1SensorsSensorIdDelete(
        sensorId: number,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/sensors/${sensorId}`,
            errors: {
                422: `Validation Error`,
            },
        });
        return result.body;
    }

    /**
     * Partially Update Sensor
     * Endpoint to partially replace some sensor settings.
     * @param sensorId
     * @param requestBody
     * @returns Sensor Successful Response
     * @throws ApiError
     */
    public static async partiallyUpdateSensorApiV1SensorsSensorIdPatch(
        sensorId: number,
        requestBody: Sensor,
    ): Promise<Sensor> {
        const result = await __request({
            method: 'PATCH',
            path: `/api/v1/sensors/${sensorId}`,
            body: requestBody,
            errors: {
                404: `Not Found`,
                422: `Validation Error`,
            },
        });
        return result.body;
    }

}