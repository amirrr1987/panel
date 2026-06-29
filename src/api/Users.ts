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
  IBooleanResultDTO,
  IChangePasswordRequestDTO,
  IChangeUserInfoRequestDTO,
  ICreateUserDtoDTO,
  IResetPasswordUserRequestDTO,
  IVUsersAddClaimToUserCreateDataDTO,
  IVUsersAddClaimToUserCreateParamsDTO,
  IVUsersAddRoleToUserCreateDataDTO,
  IVUsersAddRoleToUserCreateParamsDTO,
  IVUsersChangePasswordCreateDataDTO,
  IVUsersChangePasswordCreateParamsDTO,
  IVUsersChangeUserInfoCreateDataDTO,
  IVUsersChangeUserInfoCreateParamsDTO,
  IVUsersCreateRoleCreateDataDTO,
  IVUsersCreateRoleCreateParamsDTO,
  IVUsersCreateUserCreateDataDTO,
  IVUsersCreateUserCreateParamsDTO,
  IVUsersFirstInitiateListDataDTO,
  IVUsersFirstInitiateListParamsDTO,
  IVUsersGetAllUsersListDataDTO,
  IVUsersGetAllUsersListParamsDTO,
  IVUsersGetUserClaimsListDataDTO,
  IVUsersGetUserClaimsListParamsDTO,
  IVUsersGetUserRolesListDataDTO,
  IVUsersGetUserRolesListParamsDTO,
  IVUsersIsUserInRoleListDataDTO,
  IVUsersIsUserInRoleListParamsDTO,
  IVUsersRemoveClaimFromUserDeleteDataDTO,
  IVUsersRemoveClaimFromUserDeleteParamsDTO,
  IVUsersRemoveRoleFromUserDeleteDataDTO,
  IVUsersRemoveRoleFromUserDeleteParamsDTO,
  IVUsersResetPasswordUserCreateDataDTO,
  IVUsersResetPasswordUserCreateParamsDTO,
  IVUsersUsersFromTelmCreateDataDTO,
  IVUsersUsersFromTelmCreateParamsDTO,
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
   * @name VUsersAddClaimToUserCreate
   * @request POST:/api/v{version}/Users/AddClaimToUser
   * @secure
   */
  vUsersAddClaimToUserCreate = (
    { version, ...query }: IVUsersAddClaimToUserCreateParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVUsersAddClaimToUserCreateDataDTO, any>({
      path: `/api/v${version}/Users/AddClaimToUser`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name VUsersAddRoleToUserCreate
   * @request POST:/api/v{version}/Users/AddRoleToUser
   * @secure
   */
  vUsersAddRoleToUserCreate = (
    { version, ...query }: IVUsersAddRoleToUserCreateParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVUsersAddRoleToUserCreateDataDTO, any>({
      path: `/api/v${version}/Users/AddRoleToUser`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name VUsersChangePasswordCreate
   * @request POST:/api/v{version}/Users/ChangePassword
   * @secure
   */
  vUsersChangePasswordCreate = (
    { version }: IVUsersChangePasswordCreateParamsDTO,
    data: IChangePasswordRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVUsersChangePasswordCreateDataDTO, any>({
      path: `/api/v${version}/Users/ChangePassword`,
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
   * @tags Users
   * @name VUsersChangeUserInfoCreate
   * @request POST:/api/v{version}/Users/ChangeUserInfo
   * @secure
   */
  vUsersChangeUserInfoCreate = (
    { version }: IVUsersChangeUserInfoCreateParamsDTO,
    data: IChangeUserInfoRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVUsersChangeUserInfoCreateDataDTO, IBooleanResultDTO>({
      path: `/api/v${version}/Users/ChangeUserInfo`,
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
   * @tags Users
   * @name VUsersCreateRoleCreate
   * @request POST:/api/v{version}/Users/CreateRole
   * @secure
   */
  vUsersCreateRoleCreate = (
    { version, ...query }: IVUsersCreateRoleCreateParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVUsersCreateRoleCreateDataDTO, any>({
      path: `/api/v${version}/Users/CreateRole`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name VUsersCreateUserCreate
   * @request POST:/api/v{version}/Users/CreateUser
   * @secure
   */
  vUsersCreateUserCreate = (
    { version }: IVUsersCreateUserCreateParamsDTO,
    data: ICreateUserDtoDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVUsersCreateUserCreateDataDTO, any>({
      path: `/api/v${version}/Users/CreateUser`,
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
   * @tags Users
   * @name VUsersFirstInitiateList
   * @request GET:/api/v{version}/Users/FirstInitiate
   * @secure
   */
  vUsersFirstInitiateList = (
    { version }: IVUsersFirstInitiateListParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVUsersFirstInitiateListDataDTO, string>({
      path: `/api/v${version}/Users/FirstInitiate`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name VUsersGetAllUsersList
   * @request GET:/api/v{version}/Users/GetAllUsers
   * @secure
   */
  vUsersGetAllUsersList = (
    { version }: IVUsersGetAllUsersListParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVUsersGetAllUsersListDataDTO, any>({
      path: `/api/v${version}/Users/GetAllUsers`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name VUsersGetUserClaimsList
   * @request GET:/api/v{version}/Users/GetUserClaims
   * @secure
   */
  vUsersGetUserClaimsList = (
    { version, ...query }: IVUsersGetUserClaimsListParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVUsersGetUserClaimsListDataDTO, any>({
      path: `/api/v${version}/Users/GetUserClaims`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name VUsersGetUserRolesList
   * @request GET:/api/v{version}/Users/GetUserRoles
   * @secure
   */
  vUsersGetUserRolesList = (
    { version, ...query }: IVUsersGetUserRolesListParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVUsersGetUserRolesListDataDTO, any>({
      path: `/api/v${version}/Users/GetUserRoles`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name VUsersIsUserInRoleList
   * @request GET:/api/v{version}/Users/IsUserInRole
   * @secure
   */
  vUsersIsUserInRoleList = (
    { version, ...query }: IVUsersIsUserInRoleListParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVUsersIsUserInRoleListDataDTO, any>({
      path: `/api/v${version}/Users/IsUserInRole`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name VUsersRemoveClaimFromUserDelete
   * @request DELETE:/api/v{version}/Users/RemoveClaimFromUser
   * @secure
   */
  vUsersRemoveClaimFromUserDelete = (
    { version, ...query }: IVUsersRemoveClaimFromUserDeleteParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVUsersRemoveClaimFromUserDeleteDataDTO, any>({
      path: `/api/v${version}/Users/RemoveClaimFromUser`,
      method: "DELETE",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name VUsersRemoveRoleFromUserDelete
   * @request DELETE:/api/v{version}/Users/RemoveRoleFromUser
   * @secure
   */
  vUsersRemoveRoleFromUserDelete = (
    { version, ...query }: IVUsersRemoveRoleFromUserDeleteParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVUsersRemoveRoleFromUserDeleteDataDTO, any>({
      path: `/api/v${version}/Users/RemoveRoleFromUser`,
      method: "DELETE",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name VUsersResetPasswordUserCreate
   * @request POST:/api/v{version}/Users/ResetPasswordUser
   * @secure
   */
  vUsersResetPasswordUserCreate = (
    { version }: IVUsersResetPasswordUserCreateParamsDTO,
    data: IResetPasswordUserRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVUsersResetPasswordUserCreateDataDTO, IBooleanResultDTO>(
      {
        path: `/api/v${version}/Users/ResetPasswordUser`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * No description
   *
   * @tags Users
   * @name VUsersUsersFromTelmCreate
   * @request POST:/api/v{version}/Users/UsersFromTelm
   * @secure
   */
  vUsersUsersFromTelmCreate = (
    { version }: IVUsersUsersFromTelmCreateParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVUsersUsersFromTelmCreateDataDTO, any>({
      path: `/api/v${version}/Users/UsersFromTelm`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
}
