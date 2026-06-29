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
  IIntraBankTransferRequestDTO,
  IVIntraBankTransferIntraTransferCreateDataDTO,
  IVIntraBankTransferIntraTransferCreateParamsDTO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class IntraBankTransfer<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags IntraBankTransfer
   * @name VIntraBankTransferIntraTransferCreate
   * @request POST:/api/v{version}/IntraBankTransfer/IntraTransfer
   * @secure
   */
  vIntraBankTransferIntraTransferCreate = (
    { version }: IVIntraBankTransferIntraTransferCreateParamsDTO,
    data: IIntraBankTransferRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVIntraBankTransferIntraTransferCreateDataDTO, any>({
      path: `/api/v${version}/IntraBankTransfer/IntraTransfer`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
