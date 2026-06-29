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
  IAddClaimRequestDTO,
  IAddPolicyRequestDTO,
  IAddRoleRequestDTO,
  IGenerateTokenRequestDTO,
  ILoginRequestDTO,
  IRefreshRequestDTO,
  IVAuthAddClaimCreateDataDTO,
  IVAuthAddClaimCreateParamsDTO,
  IVAuthAddPolicyCreateDataDTO,
  IVAuthAddPolicyCreateParamsDTO,
  IVAuthAddRoleCreateDataDTO,
  IVAuthAddRoleCreateParamsDTO,
  IVAuthCreateTokenCreateDataDTO,
  IVAuthCreateTokenCreateParamsDTO,
  IVAuthIsAuthorizedListDataDTO,
  IVAuthIsAuthorizedListParamsDTO,
  IVAuthIsInRoleListDataDTO,
  IVAuthIsInRoleListParamsDTO,
  IVAuthLoginCreateDataDTO,
  IVAuthLoginCreateParamsDTO,
  IVAuthRefreshTokenCreateDataDTO,
  IVAuthRefreshTokenCreateParamsDTO,
  IVAuthValidateTokenCreateDataDTO,
  IVAuthValidateTokenCreateParamsDTO,
  IValidateTokenRequestDTO,
} from "./data-contracts";
import { ContentType, HttpClient,type RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Auth
   * @name VAuthAddClaimCreate
   * @request POST:/api/v{version}/Auth/AddClaim
   * @secure
   */
  vAuthAddClaimCreate = (
    { version }: IVAuthAddClaimCreateParamsDTO,
    data: IAddClaimRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVAuthAddClaimCreateDataDTO, any>({
      path: `/api/v${version}/Auth/AddClaim`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name VAuthAddPolicyCreate
   * @request POST:/api/v{version}/Auth/AddPolicy
   * @secure
   */
  vAuthAddPolicyCreate = (
    { version }: IVAuthAddPolicyCreateParamsDTO,
    data: IAddPolicyRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVAuthAddPolicyCreateDataDTO, any>({
      path: `/api/v${version}/Auth/AddPolicy`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name VAuthAddRoleCreate
   * @request POST:/api/v{version}/Auth/AddRole
   * @secure
   */
  vAuthAddRoleCreate = (
    { version }: IVAuthAddRoleCreateParamsDTO,
    data: IAddRoleRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVAuthAddRoleCreateDataDTO, any>({
      path: `/api/v${version}/Auth/AddRole`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name VAuthCreateTokenCreate
   * @request POST:/api/v{version}/Auth/CreateToken
   * @secure
   */
  vAuthCreateTokenCreate = (
    { version }: IVAuthCreateTokenCreateParamsDTO,
    data: IGenerateTokenRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVAuthCreateTokenCreateDataDTO, any>({
      path: `/api/v${version}/Auth/CreateToken`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name VAuthIsAuthorizedList
   * @request GET:/api/v{version}/Auth/IsAuthorized
   * @secure
   */
  vAuthIsAuthorizedList = (
    { version, ...query }: IVAuthIsAuthorizedListParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVAuthIsAuthorizedListDataDTO, any>({
      path: `/api/v${version}/Auth/IsAuthorized`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name VAuthIsInRoleList
   * @request GET:/api/v{version}/Auth/IsInRole
   * @secure
   */
  vAuthIsInRoleList = (
    { version, ...query }: IVAuthIsInRoleListParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVAuthIsInRoleListDataDTO, any>({
      path: `/api/v${version}/Auth/IsInRole`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name VAuthLoginCreate
   * @request POST:/api/v{version}/Auth/Login
   * @secure
   */
  vAuthLoginCreate = (
    { version }: IVAuthLoginCreateParamsDTO,
    data: ILoginRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVAuthLoginCreateDataDTO, any>({
      path: `/api/v${version}/Auth/Login`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name VAuthRefreshTokenCreate
   * @request POST:/api/v{version}/Auth/RefreshToken
   * @secure
   */
  vAuthRefreshTokenCreate = (
    { version }: IVAuthRefreshTokenCreateParamsDTO,
    data: IRefreshRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVAuthRefreshTokenCreateDataDTO, any>({
      path: `/api/v${version}/Auth/RefreshToken`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name VAuthValidateTokenCreate
   * @request POST:/api/v{version}/Auth/ValidateToken
   * @secure
   */
  vAuthValidateTokenCreate = (
    { version }: IVAuthValidateTokenCreateParamsDTO,
    data: IValidateTokenRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVAuthValidateTokenCreateDataDTO, any>({
      path: `/api/v${version}/Auth/ValidateToken`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
