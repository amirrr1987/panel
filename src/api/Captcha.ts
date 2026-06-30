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
  ICaptchaGenerateListDataDTO,
  ICaptchaVerifyCreateDataDTO,
  ICaptchaVerifyDtoDTO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Captcha<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Captcha
   * @name CaptchaGenerateList
   * @request GET:/api/Captcha/Generate
   * @secure
   */
  captchaGenerateList = (params: RequestParams = {}) =>
    this.http.request<ICaptchaGenerateListDataDTO, any>({
      path: `/api/Captcha/Generate`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Captcha
   * @name CaptchaVerifyCreate
   * @request POST:/api/Captcha/Verify
   * @secure
   */
  captchaVerifyCreate = (
    data: ICaptchaVerifyDtoDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<ICaptchaVerifyCreateDataDTO, any>({
      path: `/api/Captcha/Verify`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
