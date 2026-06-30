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

import {
  ICreateUserRequestDtoDTO,
  IV1UsersCreateUserCreateDataDTO,
  IV1UsersCreateUserCreateParamsDTO,
  IV1UsersFirstInitiateListDataDTO,
  IV1UsersFirstInitiateListParamsDTO,
  IV1UsersGetAllUsersListDataDTO,
  IV1UsersGetAllUsersListParamsDTO,
  IV1UsersGetUserClaimsListDataDTO,
  IV1UsersGetUserClaimsListParamsDTO,
  IV1UsersGetUserPermissionsListDataDTO,
  IV1UsersGetUserPermissionsListParamsDTO,
  IV1UsersGetUserRolesListDataDTO,
  IV1UsersGetUserRolesListParamsDTO,
  IV1UsersIsUserInRoleListDataDTO,
  IV1UsersIsUserInRoleListParamsDTO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Users<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Users
   * @name V1UsersCreateUserCreate
   * @request POST:/api/v1/Users/CreateUser
   * @secure
   */
  v1UsersCreateUserCreate = (
    { version }: IV1UsersCreateUserCreateParamsDTO,
    data: ICreateUserRequestDtoDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IV1UsersCreateUserCreateDataDTO, any>({
      path: `/api/v1/Users/CreateUser`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name V1UsersFirstInitiateList
   * @request GET:/api/v1/Users/FirstInitiate
   * @secure
   */
  v1UsersFirstInitiateList = (
    { version }: IV1UsersFirstInitiateListParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IV1UsersFirstInitiateListDataDTO, any>({
      path: `/api/v1/Users/FirstInitiate`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name V1UsersGetAllUsersList
   * @request GET:/api/v1/Users/GetAllUsers
   * @secure
   */
  v1UsersGetAllUsersList = (
    { version }: IV1UsersGetAllUsersListParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IV1UsersGetAllUsersListDataDTO, any>({
      path: `/api/v1/Users/GetAllUsers`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name V1UsersGetUserClaimsList
   * @request GET:/api/v1/Users/GetUserClaims
   * @secure
   */
  v1UsersGetUserClaimsList = (
    { version, ...query }: IV1UsersGetUserClaimsListParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IV1UsersGetUserClaimsListDataDTO, any>({
      path: `/api/v1/Users/GetUserClaims`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name V1UsersGetUserPermissionsList
   * @request GET:/api/v1/Users/GetUserPermissions
   * @secure
   */
  v1UsersGetUserPermissionsList = (
    { version, ...query }: IV1UsersGetUserPermissionsListParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IV1UsersGetUserPermissionsListDataDTO, any>({
      path: `/api/v1/Users/GetUserPermissions`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name V1UsersGetUserRolesList
   * @request GET:/api/v1/Users/GetUserRoles
   * @secure
   */
  v1UsersGetUserRolesList = (
    { version, ...query }: IV1UsersGetUserRolesListParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IV1UsersGetUserRolesListDataDTO, any>({
      path: `/api/v1/Users/GetUserRoles`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name V1UsersIsUserInRoleList
   * @request GET:/api/v1/Users/IsUserInRole
   * @secure
   */
  v1UsersIsUserInRoleList = (
    { version, ...query }: IV1UsersIsUserInRoleListParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IV1UsersIsUserInRoleListDataDTO, any>({
      path: `/api/v1/Users/IsUserInRole`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
