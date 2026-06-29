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
  ICashDepositRequestDTO,
  ICashWithdrawalRequestDTO,
  IChargeRequestDTO,
  IVCashTransactionChargeCashBranchCreateDataDTO,
  IVCashTransactionChargeCashBranchCreateParamsDTO,
  IVCashTransactionChargeCashTellerCreateDataDTO,
  IVCashTransactionChargeCashTellerCreateParamsDTO,
  IVCashTransactionDepositCreateDataDTO,
  IVCashTransactionDepositCreateParamsDTO,
  IVCashTransactionDisChargeCashBranchCreateDataDTO,
  IVCashTransactionDisChargeCashBranchCreateParamsDTO,
  IVCashTransactionDisChargeCashTellerCreateDataDTO,
  IVCashTransactionDisChargeCashTellerCreateParamsDTO,
  IVCashTransactionWithdrawalCreateDataDTO,
  IVCashTransactionWithdrawalCreateParamsDTO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class CashTransaction<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags CashTransaction
   * @name VCashTransactionChargeCashBranchCreate
   * @request POST:/api/v{version}/CashTransaction/ChargeCashBranch
   * @secure
   */
  vCashTransactionChargeCashBranchCreate = (
    { version }: IVCashTransactionChargeCashBranchCreateParamsDTO,
    data: IChargeRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVCashTransactionChargeCashBranchCreateDataDTO, any>({
      path: `/api/v${version}/CashTransaction/ChargeCashBranch`,
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
   * @tags CashTransaction
   * @name VCashTransactionChargeCashTellerCreate
   * @request POST:/api/v{version}/CashTransaction/ChargeCashTeller
   * @secure
   */
  vCashTransactionChargeCashTellerCreate = (
    { version }: IVCashTransactionChargeCashTellerCreateParamsDTO,
    data: IChargeRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVCashTransactionChargeCashTellerCreateDataDTO, any>({
      path: `/api/v${version}/CashTransaction/ChargeCashTeller`,
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
   * @tags CashTransaction
   * @name VCashTransactionDepositCreate
   * @request POST:/api/v{version}/CashTransaction/Deposit
   * @secure
   */
  vCashTransactionDepositCreate = (
    { version }: IVCashTransactionDepositCreateParamsDTO,
    data: ICashDepositRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVCashTransactionDepositCreateDataDTO, any>({
      path: `/api/v${version}/CashTransaction/Deposit`,
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
   * @tags CashTransaction
   * @name VCashTransactionDisChargeCashBranchCreate
   * @request POST:/api/v{version}/CashTransaction/DisChargeCashBranch
   * @secure
   */
  vCashTransactionDisChargeCashBranchCreate = (
    { version }: IVCashTransactionDisChargeCashBranchCreateParamsDTO,
    data: IChargeRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVCashTransactionDisChargeCashBranchCreateDataDTO, any>({
      path: `/api/v${version}/CashTransaction/DisChargeCashBranch`,
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
   * @tags CashTransaction
   * @name VCashTransactionDisChargeCashTellerCreate
   * @request POST:/api/v{version}/CashTransaction/DisChargeCashTeller
   * @secure
   */
  vCashTransactionDisChargeCashTellerCreate = (
    { version }: IVCashTransactionDisChargeCashTellerCreateParamsDTO,
    data: IChargeRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVCashTransactionDisChargeCashTellerCreateDataDTO, any>({
      path: `/api/v${version}/CashTransaction/DisChargeCashTeller`,
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
   * @tags CashTransaction
   * @name VCashTransactionWithdrawalCreate
   * @request POST:/api/v{version}/CashTransaction/Withdrawal
   * @secure
   */
  vCashTransactionWithdrawalCreate = (
    { version }: IVCashTransactionWithdrawalCreateParamsDTO,
    data: ICashWithdrawalRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVCashTransactionWithdrawalCreateDataDTO, any>({
      path: `/api/v${version}/CashTransaction/Withdrawal`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
