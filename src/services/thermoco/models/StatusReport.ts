/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StatusReport = {
    pid: number;
    rss_bytes: number;
    num_connections: number;
    cpu_percent: string;
    db_status_ok: boolean;
    num_users: number;
}
