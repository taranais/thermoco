/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Token } from '../models/Token';
import type { User } from '../models/User';
import { request as __request } from '../core/request';

export class AuthorizationService {

    /**
     * Login For Access Token
     * Endpoint grant API access by getting an authorized JSON Web Token (JWT) access token from a login/password.<br>
     * It follows the <a href="https://tools.ietf.org/rfc/rfc6749.txt">OAuth 2.0 Authorization Framework</a> for
     * <a href="https://tools.ietf.org/rfc/rfc6750.txt">bearer</a> token. Remember that the HTTP request entity-header
     * must include the "Content-Type" header field set to "application/x-www-form-urlencoded".<br>
     * <strong>For testing purposes, you can always get an authorized JWT token using as username any string
     * starting with 'test(+)' and password '1234'. A new user will be created with a predefined sensor set.</strong>.
     * @param requestBody
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static async loginForAccessTokenAuthLoginPost(
        requestBody: any,
    ): Promise<Token> {
        const result = await __request({
            method: 'POST',
            path: `/auth/login`,
            body: requestBody,
            errors: {
                422: `Validation Error`,
            },
        });
        return result.body;
    }

    /**
     * Get Authenticated User
     * Endpoint to retrieve the authenticated user.
     * @returns User Successful Response
     * @throws ApiError
     */
    public static async getAuthenticatedUserAuthMeGet(): Promise<User> {
        const result = await __request({
            method: 'GET',
            path: `/auth/me`,
        });
        return result.body;
    }

}