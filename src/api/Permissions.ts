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
  IPermissionRoleRequestDtoDTO,
  IPermissionUserRequestDtoDTO,
  IPermissionsAddPermissionToRoleCreateDataDTO,
  IPermissionsAddPermissionToUserCreateDataDTO,
  IPermissionsDenyPermissionForUserCreateDataDTO,
  IPermissionsRemovePermissionFromRoleDeleteDataDTO,
  IPermissionsRemovePermissionFromUserDeleteDataDTO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Permissions<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Permissions
   * @name PermissionsAddPermissionToRoleCreate
   * @request POST:/api/Permissions/AddPermissionToRole
   * @secure
   */
  permissionsAddPermissionToRoleCreate = (
    data: IPermissionRoleRequestDtoDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IPermissionsAddPermissionToRoleCreateDataDTO, any>({
      path: `/api/Permissions/AddPermissionToRole`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Permissions
   * @name PermissionsAddPermissionToUserCreate
   * @request POST:/api/Permissions/AddPermissionToUser
   * @secure
   */
  permissionsAddPermissionToUserCreate = (
    data: IPermissionUserRequestDtoDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IPermissionsAddPermissionToUserCreateDataDTO, any>({
      path: `/api/Permissions/AddPermissionToUser`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Permissions
   * @name PermissionsDenyPermissionForUserCreate
   * @request POST:/api/Permissions/DenyPermissionForUser
   * @secure
   */
  permissionsDenyPermissionForUserCreate = (
    data: IPermissionUserRequestDtoDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IPermissionsDenyPermissionForUserCreateDataDTO, any>({
      path: `/api/Permissions/DenyPermissionForUser`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Permissions
   * @name PermissionsRemovePermissionFromRoleDelete
   * @request DELETE:/api/Permissions/RemovePermissionFromRole
   * @secure
   */
  permissionsRemovePermissionFromRoleDelete = (
    data: IPermissionRoleRequestDtoDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IPermissionsRemovePermissionFromRoleDeleteDataDTO, any>({
      path: `/api/Permissions/RemovePermissionFromRole`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Permissions
   * @name PermissionsRemovePermissionFromUserDelete
   * @request DELETE:/api/Permissions/RemovePermissionFromUser
   * @secure
   */
  permissionsRemovePermissionFromUserDelete = (
    data: IPermissionUserRequestDtoDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IPermissionsRemovePermissionFromUserDeleteDataDTO, any>({
      path: `/api/Permissions/RemovePermissionFromUser`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
