/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StatusReport } from '../models/StatusReport';
import { request as __request } from '../core/request';

export class HealthService {

    /**
     * Reports Service Health Status
     * Unsecured endpoint to retrieve a health checks and introspection on the service.
     * @returns StatusReport Successful Response
     * @throws ApiError
     */
    public static async reportsServiceHealthStatusHealthGet(): Promise<StatusReport> {
        const result = await __request({
            method: 'GET',
            path: `/health`,
        });
        return result.body;
    }

}