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
  ICreateRoleRequestDtoDTO,
  IGetRolePermissionsRequestDtoDTO,
  IRolesAddRoleToUserCreateDataDTO,
  IRolesCreateRoleCreateDataDTO,
  IRolesGetRolePermissionsCreateDataDTO,
  IRolesRemoveRoleFromUserDeleteDataDTO,
  IUserRoleRequestDtoDTO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Roles<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Roles
   * @name RolesAddRoleToUserCreate
   * @request POST:/api/Roles/AddRoleToUser
   * @secure
   */
  rolesAddRoleToUserCreate = (
    data: IUserRoleRequestDtoDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IRolesAddRoleToUserCreateDataDTO, any>({
      path: `/api/Roles/AddRoleToUser`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name RolesCreateRoleCreate
   * @request POST:/api/Roles/CreateRole
   * @secure
   */
  rolesCreateRoleCreate = (
    data: ICreateRoleRequestDtoDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IRolesCreateRoleCreateDataDTO, any>({
      path: `/api/Roles/CreateRole`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name RolesGetRolePermissionsCreate
   * @request POST:/api/Roles/GetRolePermissions
   * @secure
   */
  rolesGetRolePermissionsCreate = (
    data: IGetRolePermissionsRequestDtoDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IRolesGetRolePermissionsCreateDataDTO, any>({
      path: `/api/Roles/GetRolePermissions`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Roles
   * @name RolesRemoveRoleFromUserDelete
   * @request DELETE:/api/Roles/RemoveRoleFromUser
   * @secure
   */
  rolesRemoveRoleFromUserDelete = (
    data: IUserRoleRequestDtoDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IRolesRemoveRoleFromUserDeleteDataDTO, any>({
      path: `/api/Roles/RemoveRoleFromUser`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
