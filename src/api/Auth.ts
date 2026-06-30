/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import type{
  IAddPolicyRequestDTO,
  ILoginRequestDTO,
  IRefreshRequestDTO,
  IV1AuthAddPolicyCreateDataDTO,
  IV1AuthAddPolicyCreateParamsDTO,
  IV1AuthIsAuthorizedListDataDTO,
  IV1AuthIsAuthorizedListParamsDTO,
  IV1AuthIsInRoleListDataDTO,
  IV1AuthIsInRoleListParamsDTO,
  IV1AuthLoginCreateDataDTO,
  IV1AuthLoginCreateParamsDTO,
  IV1AuthRefreshTokenCreateDataDTO,
  IV1AuthRefreshTokenCreateParamsDTO,
  IV1AuthValidateTokenCreateDataDTO,
  IV1AuthValidateTokenCreateParamsDTO,
  IValidateTokenRequestDTO,
} from "./data-contracts";
import { ContentType, HttpClient, type RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Auth
   * @name V1AuthAddPolicyCreate
   * @request POST:/api/v1/Auth/AddPolicy
   * @secure
   */
  v1AuthAddPolicyCreate = (
    { version }: IV1AuthAddPolicyCreateParamsDTO,
    data: IAddPolicyRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IV1AuthAddPolicyCreateDataDTO, any>({
      path: `/api/v1/Auth/AddPolicy`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name V1AuthIsAuthorizedList
   * @request GET:/api/v1/Auth/IsAuthorized
   * @secure
   */
  v1AuthIsAuthorizedList = (
    { version, ...query }: IV1AuthIsAuthorizedListParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IV1AuthIsAuthorizedListDataDTO, any>({
      path: `/api/v1/Auth/IsAuthorized`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name V1AuthIsInRoleList
   * @request GET:/api/v1/Auth/IsInRole
   * @secure
   */
  v1AuthIsInRoleList = (
    { version, ...query }: IV1AuthIsInRoleListParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IV1AuthIsInRoleListDataDTO, any>({
      path: `/api/v1/Auth/IsInRole`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name V1AuthLoginCreate
   * @request POST:/api/v1/Auth/Login
   * @secure
   */
  v1AuthLoginCreate = (
    { version }: IV1AuthLoginCreateParamsDTO,
    data: ILoginRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IV1AuthLoginCreateDataDTO, any>({
      path: `/api/v1/Auth/Login`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name V1AuthRefreshTokenCreate
   * @request POST:/api/v1/Auth/RefreshToken
   * @secure
   */
  v1AuthRefreshTokenCreate = (
    { version }: IV1AuthRefreshTokenCreateParamsDTO,
    data: IRefreshRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IV1AuthRefreshTokenCreateDataDTO, any>({
      path: `/api/v1/Auth/RefreshToken`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name V1AuthValidateTokenCreate
   * @request POST:/api/v1/Auth/ValidateToken
   * @secure
   */
  v1AuthValidateTokenCreate = (
    { version }: IV1AuthValidateTokenCreateParamsDTO,
    data: IValidateTokenRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IV1AuthValidateTokenCreateDataDTO, any>({
      path: `/api/v1/Auth/ValidateToken`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
