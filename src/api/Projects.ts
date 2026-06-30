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
  ICreateProjectDtoDTO,
  IV1ProjectsCreateCreateDataDTO,
  IV1ProjectsCreateCreateParamsDTO,
  IV1ProjectsGetByFileNumberListDataDTO,
  IV1ProjectsGetByFileNumberListParamsDTO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Projects<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Projects
   * @name V1ProjectsCreateCreate
   * @request POST:/api/v1/Projects/Create
   * @secure
   */
  v1ProjectsCreateCreate = (
    { version }: IV1ProjectsCreateCreateParamsDTO,
    data: ICreateProjectDtoDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IV1ProjectsCreateCreateDataDTO, any>({
      path: `/api/v1/Projects/Create`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Projects
   * @name V1ProjectsGetByFileNumberList
   * @request GET:/api/v1/Projects/GetByFileNumber
   * @secure
   */
  v1ProjectsGetByFileNumberList = (
    { version, ...query }: IV1ProjectsGetByFileNumberListParamsDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IV1ProjectsGetByFileNumberListDataDTO, any>({
      path: `/api/v1/Projects/GetByFileNumber`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
