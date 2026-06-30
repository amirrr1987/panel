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
  IAddClaimToUserRequestDTO,
  IClaimsAddClaimToUserCreateDataDTO,
  IClaimsRemoveClaimFromUserDeleteDataDTO,
  IRemoveClaimFromUserRequestDTO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Claims<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Claims
   * @name ClaimsAddClaimToUserCreate
   * @request POST:/api/Claims/AddClaimToUser
   * @secure
   */
  claimsAddClaimToUserCreate = (
    data: IAddClaimToUserRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IClaimsAddClaimToUserCreateDataDTO, any>({
      path: `/api/Claims/AddClaimToUser`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Claims
   * @name ClaimsRemoveClaimFromUserDelete
   * @request DELETE:/api/Claims/RemoveClaimFromUser
   * @secure
   */
  claimsRemoveClaimFromUserDelete = (
    data: IRemoveClaimFromUserRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IClaimsRemoveClaimFromUserDeleteDataDTO, any>({
      path: `/api/Claims/RemoveClaimFromUser`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
