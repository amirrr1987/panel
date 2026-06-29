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
  IAccountBalanceRequestDTO,
  IAccountInfoRequestDTO,
  ICustomerAccountDetailsRequestDTO,
  ICustomerAccountsRequestDTO,
  ICustomerInfoRequestDTO,
  IDailyOperationsRequestDTO,
  IGectStatementRequestDTO,
  IGldmAccountBalanceRequestDTO,
  IInctStatementRequestDTO,
  IOperationSummaryRequestDTO,
  ITellerCashBalanceRequestDTO,
  IVReportAccountBalanceCreateDataDTO,
  IVReportAccountBalanceCreateParamsDTO,
  IVReportAccountInfoCreateDataDTO,
  IVReportAccountInfoCreateParamsDTO,
  IVReportCustomerAccountDetailsCreateDataDTO,
  IVReportCustomerAccountDetailsCreateParamsDTO,
  IVReportCustomerAccountsCreateDataDTO,
  IVReportCustomerAccountsCreateParamsDTO,
  IVReportCustomerInfoCreateDataDTO,
  IVReportCustomerInfoCreateParamsDTO,
  IVReportDailyOperationsCreateDataDTO,
  IVReportDailyOperationsCreateParamsDTO,
  IVReportGectStatementCreateDataDTO,
  IVReportGectStatementCreateParamsDTO,
  IVReportGldmAccountBalanceCreateDataDTO,
  IVReportGldmAccountBalanceCreateParamsDTO,
  IVReportInctStatementCreateDataDTO,
  IVReportInctStatementCreateParamsDTO,
  IVReportOperationSummaryCreateDataDTO,
  IVReportOperationSummaryCreateParamsDTO,
  IVReportTellerCashBalanceCreateDataDTO,
  IVReportTellerCashBalanceCreateParamsDTO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Report<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Report
   * @name VReportAccountBalanceCreate
   * @request POST:/api/v{version}/Report/AccountBalance
   * @secure
   */
  vReportAccountBalanceCreate = (
    { version }: IVReportAccountBalanceCreateParamsDTO,
    data: IAccountBalanceRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVReportAccountBalanceCreateDataDTO, any>({
      path: `/api/v${version}/Report/AccountBalance`,
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
   * @tags Report
   * @name VReportAccountInfoCreate
   * @request POST:/api/v{version}/Report/AccountInfo
   * @secure
   */
  vReportAccountInfoCreate = (
    { version }: IVReportAccountInfoCreateParamsDTO,
    data: IAccountInfoRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVReportAccountInfoCreateDataDTO, any>({
      path: `/api/v${version}/Report/AccountInfo`,
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
   * @tags Report
   * @name VReportCustomerAccountDetailsCreate
   * @request POST:/api/v{version}/Report/CustomerAccountDetails
   * @secure
   */
  vReportCustomerAccountDetailsCreate = (
    { version }: IVReportCustomerAccountDetailsCreateParamsDTO,
    data: ICustomerAccountDetailsRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVReportCustomerAccountDetailsCreateDataDTO, any>({
      path: `/api/v${version}/Report/CustomerAccountDetails`,
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
   * @tags Report
   * @name VReportCustomerAccountsCreate
   * @request POST:/api/v{version}/Report/CustomerAccounts
   * @secure
   */
  vReportCustomerAccountsCreate = (
    { version }: IVReportCustomerAccountsCreateParamsDTO,
    data: ICustomerAccountsRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVReportCustomerAccountsCreateDataDTO, any>({
      path: `/api/v${version}/Report/CustomerAccounts`,
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
   * @tags Report
   * @name VReportCustomerInfoCreate
   * @request POST:/api/v{version}/Report/CustomerInfo
   * @secure
   */
  vReportCustomerInfoCreate = (
    { version }: IVReportCustomerInfoCreateParamsDTO,
    data: ICustomerInfoRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVReportCustomerInfoCreateDataDTO, any>({
      path: `/api/v${version}/Report/CustomerInfo`,
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
   * @tags Report
   * @name VReportDailyOperationsCreate
   * @request POST:/api/v{version}/Report/DailyOperations
   * @secure
   */
  vReportDailyOperationsCreate = (
    { version }: IVReportDailyOperationsCreateParamsDTO,
    data: IDailyOperationsRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVReportDailyOperationsCreateDataDTO, any>({
      path: `/api/v${version}/Report/DailyOperations`,
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
   * @tags Report
   * @name VReportGectStatementCreate
   * @request POST:/api/v{version}/Report/GectStatement
   * @secure
   */
  vReportGectStatementCreate = (
    { version }: IVReportGectStatementCreateParamsDTO,
    data: IGectStatementRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVReportGectStatementCreateDataDTO, any>({
      path: `/api/v${version}/Report/GectStatement`,
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
   * @tags Report
   * @name VReportGldmAccountBalanceCreate
   * @request POST:/api/v{version}/Report/GldmAccountBalance
   * @secure
   */
  vReportGldmAccountBalanceCreate = (
    { version }: IVReportGldmAccountBalanceCreateParamsDTO,
    data: IGldmAccountBalanceRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVReportGldmAccountBalanceCreateDataDTO, any>({
      path: `/api/v${version}/Report/GldmAccountBalance`,
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
   * @tags Report
   * @name VReportInctStatementCreate
   * @request POST:/api/v{version}/Report/InctStatement
   * @secure
   */
  vReportInctStatementCreate = (
    { version }: IVReportInctStatementCreateParamsDTO,
    data: IInctStatementRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVReportInctStatementCreateDataDTO, any>({
      path: `/api/v${version}/Report/InctStatement`,
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
   * @tags Report
   * @name VReportOperationSummaryCreate
   * @request POST:/api/v{version}/Report/OperationSummary
   * @secure
   */
  vReportOperationSummaryCreate = (
    { version }: IVReportOperationSummaryCreateParamsDTO,
    data: IOperationSummaryRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVReportOperationSummaryCreateDataDTO, any>({
      path: `/api/v${version}/Report/OperationSummary`,
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
   * @tags Report
   * @name VReportTellerCashBalanceCreate
   * @request POST:/api/v{version}/Report/TellerCashBalance
   * @secure
   */
  vReportTellerCashBalanceCreate = (
    { version }: IVReportTellerCashBalanceCreateParamsDTO,
    data: ITellerCashBalanceRequestDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<IVReportTellerCashBalanceCreateDataDTO, any>({
      path: `/api/v${version}/Report/TellerCashBalance`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
