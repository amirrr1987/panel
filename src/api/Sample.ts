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
  ICreateUserRequestDTO,
  IVSampleCreateUserCreateDataDTO,
  IVSampleCreateUserCreateParamsDTO,
  IVSamplePutMqMessageCreateDataDTO,
  IVSamplePutMqMessageCreateParamsDTO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Sample<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Sample
   * @name VSampleCreateUserCreate
   * @request POST:/api/v{version}/Sample/CreateUser
   * @secure
   */
  vSampleCreateUserCreate = (
    { version }: IVSampleCreateUserCreateParamsDTO,
    data: ICreateUserRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVSampleCreateUserCreateDataDTO, any>({
      path: `/api/v${version}/Sample/CreateUser`,
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
   * @tags Sample
   * @name VSamplePutMqMessageCreate
   * @request POST:/api/v{version}/Sample/PutMqMessage
   * @secure
   */
  vSamplePutMqMessageCreate = (
    { version }: IVSamplePutMqMessageCreateParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVSamplePutMqMessageCreateDataDTO, any>({
      path: `/api/v${version}/Sample/PutMqMessage`,
      method: "POST",
      secure: true,
      ...params,
    });
}
