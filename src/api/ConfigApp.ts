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
  IConfigRequestDTO,
  IVConfigAppSettingCreateDataDTO,
  IVConfigAppSettingCreateParamsDTO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ConfigApp<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ConfigApp
   * @name VConfigAppSettingCreate
   * @request POST:/api/v{version}/ConfigApp/setting
   * @secure
   */
  vConfigAppSettingCreate = (
    { version }: IVConfigAppSettingCreateParamsDTO,
    data: IConfigRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVConfigAppSettingCreateDataDTO, any>({
      path: `/api/v${version}/ConfigApp/setting`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
