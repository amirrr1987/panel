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
  IOtherBankTransferWithdrawalRequestDTO,
  IPayaCommissionRequestDTO,
  IVOtherBankTransferPayaCommissionCreateDataDTO,
  IVOtherBankTransferPayaCommissionCreateParamsDTO,
  IVOtherBankTransferWithdrawalCreateDataDTO,
  IVOtherBankTransferWithdrawalCreateParamsDTO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class OtherBankTransfer<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags OtherBankTransfer
   * @name VOtherBankTransferPayaCommissionCreate
   * @request POST:/api/v{version}/OtherBankTransfer/PayaCommission
   * @secure
   */
  vOtherBankTransferPayaCommissionCreate = (
    { version }: IVOtherBankTransferPayaCommissionCreateParamsDTO,
    data: IPayaCommissionRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVOtherBankTransferPayaCommissionCreateDataDTO, any>({
      path: `/api/v${version}/OtherBankTransfer/PayaCommission`,
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
   * @tags OtherBankTransfer
   * @name VOtherBankTransferWithdrawalCreate
   * @request POST:/api/v{version}/OtherBankTransfer/Withdrawal
   * @secure
   */
  vOtherBankTransferWithdrawalCreate = (
    { version }: IVOtherBankTransferWithdrawalCreateParamsDTO,
    data: IOtherBankTransferWithdrawalRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVOtherBankTransferWithdrawalCreateDataDTO, any>({
      path: `/api/v${version}/OtherBankTransfer/Withdrawal`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
