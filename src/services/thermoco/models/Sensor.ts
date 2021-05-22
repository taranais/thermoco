/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Sensor = {
    /**
     * This is the unique ID of a sensor
     */
    id?: number;
    description?: string;
    /**
     * This is the sampling period of a given sensor in seconds
     */
    samplingPeriod?: number;
    isActive: boolean;
}
