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

export interface IAccountBalanceDtoDTO {
  /**
   * مانده حساب
   * @format double
   */
  accountBalance?: number;
  /** وضعیت حساب */
  accountStatus?: string;
  /** شرح وضعیت حساب */
  accountStatusDescription?: string;
  /** نوع حساب */
  accountType?: string;
  /**
   * مانده در دسترس
   * @format double
   */
  availableBalance?: number;
  /** نام شعبه */
  branchName?: string;
  /** کد شعبه */
  branchNo?: string;
  /** نام صاحب حساب */
  customerFullName?: string;
  /**
   * شماره مشتری
   * @format int64
   */
  customerNo?: number;
  /** وضعیت مشتری */
  customerStatus?: string;
  /** شرح وضعیت مشتری */
  customerStatusDescription?: string;
  /**
   * مبلغ بلوکه
   * @format double
   */
  holdValue?: number;
  /**
   * تعداد بلوکه
   * @format double
   */
  numberOfHolds?: number;
  /**
   * تعداد مسدودی
   * @format double
   */
  numberOfStops?: number;
  /**
   * تعداد صاحبین حساب
   * @format double
   */
  ownershipFlag?: number;
}

export interface IAccountBalanceDtoResultDTO {
  data?: IAccountBalanceDtoDTO;
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export interface IAccountBalanceRequestDTO {
  /**
   * شماره حساب مشتری
   * @minLength 2
   */
  accountNo: string;
}

export interface IAccountInfoRequestDTO {
  /**
   * شماره حساب مشتری
   * @minLength 2
   */
  accountNo: string;
}

export enum IAccountTypeDTO {
  CashBranchBox = "CashBranchBox",
  CashTellerBox = "CashTellerBox",
  BranchIntermediaryAccount = "BranchIntermediaryAccount",
  PayaIntermediaryAccount = "PayaIntermediaryAccount",
}

export interface IAddClaimRequestDTO {
  claimType?: string;
  claimValue?: string;
  /** @format int64 */
  userId?: number;
}

export interface IAddPolicyRequestDTO {
  configurePolicy?: IAuthorizationPolicyBuilderActionDTO;
  policyName?: string;
}

export interface IAddRoleRequestDTO {
  roleName?: string;
  /** @format int64 */
  userId?: number;
}

export interface IAssemblyDTO {
  /** @deprecated */
  readonly codeBase?: string;
  readonly customAttributes?: ICustomAttributeDataDTO[];
  readonly definedTypes?: ITypeInfoDTO[];
  entryPoint?: IMethodInfoDTO;
  /** @deprecated */
  readonly escapedCodeBase?: string;
  readonly exportedTypes?: ITypeDTO[];
  readonly fullName?: string;
  /** @deprecated */
  readonly globalAssemblyCache?: boolean;
  /** @format int64 */
  readonly hostContext?: number;
  readonly imageRuntimeVersion?: string;
  readonly isCollectible?: boolean;
  readonly isDynamic?: boolean;
  readonly isFullyTrusted?: boolean;
  readonly location?: string;
  manifestModule?: IModuleDTO;
  readonly modules?: IModuleDTO[];
  readonly reflectionOnly?: boolean;
  securityRuleSet?: ISecurityRuleSetDTO;
}

export interface IAuthorizationPolicyBuilderActionDTO {
  method?: IMethodInfoDTO;
  readonly target?: any;
}

export interface IBooleanResultDTO {
  data?: boolean;
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export enum ICallingConventionsDTO {
  Standard = "Standard",
  VarArgs = "VarArgs",
  Any = "Any",
  HasThis = "HasThis",
  ExplicitThis = "ExplicitThis",
}

export interface ICashDepositRequestDTO {
  /**
   * مبلغ
   * @format double
   * @min 1
   * @exclusiveMin true
   * @max 9999999999999
   */
  amount: number;
  /**
   * شرح سند
   * @minLength 5
   * @maxLength 50
   */
  remarks: string;
  /**
   * شماره حساب مشتری
   * @minLength 2
   */
  toAccountNo: string;
}

export interface ICashWithdrawalRequestDTO {
  /**
   * مبلغ برداشتی
   * @format double
   * @min 1
   * @exclusiveMin true
   * @max 9999999999999
   */
  amount: number;
  /**
   * شماره حساب مشتری
   * @minLength 2
   */
  fromAccountNo: string;
  /**
   * شرح سند
   * @minLength 5
   * @maxLength 50
   */
  remarks: string;
}

export interface IChangePasswordRequestDTO {
  /** @minLength 1 */
  currentPassword: string;
  /** @minLength 1 */
  newPassword: string;
}

export interface IChangeUserInfoRequestDTO {
  branchNo?: string;
  idNumber?: string;
  tellerName?: string;
  userStatus?: string;
  userType?: string;
  /** @minLength 1 */
  username: string;
}

export interface IChargeRequestDTO {
  /**
   * مبلغ
   * @format double
   * @min 1
   * @exclusiveMin true
   */
  amount: number;
  /**
   * شرح سند
   * @minLength 5
   * @maxLength 100
   */
  remarks: string;
}

export interface IClaimDTO {
  readonly issuer?: string;
  readonly originalIssuer?: string;
  readonly properties?: Record<string, string>;
  subject?: IClaimsIdentityDTO;
  readonly type?: string;
  readonly value?: string;
  readonly valueType?: string;
}

export interface IClaimIEnumerableResultDTO {
  data?: IClaimDTO[];
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export interface IClaimsIdentityDTO {
  actor?: IClaimsIdentityDTO;
  readonly authenticationType?: string;
  bootstrapContext?: any;
  readonly claims?: IClaimDTO[];
  readonly isAuthenticated?: boolean;
  label?: string;
  readonly name?: string;
  readonly nameClaimType?: string;
  readonly roleClaimType?: string;
}

export interface IConfigDtoDTO {
  loginTwoFactor?: boolean;
  withdrawalByOTP?: boolean;
}

export interface IConfigDtoResultDTO {
  data?: IConfigDtoDTO;
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export interface IConfigRequestDTO {
  loginWithOTP?: boolean;
  withdrawalByOTP?: boolean;
}

export interface IConstructorInfoDTO {
  attributes?: IMethodAttributesDTO;
  callingConvention?: ICallingConventionsDTO;
  readonly containsGenericParameters?: boolean;
  readonly customAttributes?: ICustomAttributeDataDTO[];
  declaringType?: ITypeDTO;
  readonly isAbstract?: boolean;
  readonly isAssembly?: boolean;
  readonly isCollectible?: boolean;
  readonly isConstructedGenericMethod?: boolean;
  readonly isConstructor?: boolean;
  readonly isFamily?: boolean;
  readonly isFamilyAndAssembly?: boolean;
  readonly isFamilyOrAssembly?: boolean;
  readonly isFinal?: boolean;
  readonly isGenericMethod?: boolean;
  readonly isGenericMethodDefinition?: boolean;
  readonly isHideBySig?: boolean;
  readonly isPrivate?: boolean;
  readonly isPublic?: boolean;
  readonly isSecurityCritical?: boolean;
  readonly isSecuritySafeCritical?: boolean;
  readonly isSecurityTransparent?: boolean;
  readonly isSpecialName?: boolean;
  readonly isStatic?: boolean;
  readonly isVirtual?: boolean;
  memberType?: IMemberTypesDTO;
  /** @format int32 */
  readonly metadataToken?: number;
  methodHandle?: IRuntimeMethodHandleDTO;
  methodImplementationFlags?: IMethodImplAttributesDTO;
  module?: IModuleDTO;
  readonly name?: string;
  reflectedType?: ITypeDTO;
}

export interface ICreateUserDtoDTO {
  branchNo?: string;
  idNumber?: string;
  /**
   * @minLength 6
   * @maxLength 100
   * @pattern ^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$
   */
  password: string;
  tellerName?: string;
  /**
   * @minLength 3
   * @maxLength 100
   */
  userName: string;
  userType?: string;
}

export interface ICreateUserRequestDTO {
  email?: string;
  /**
   * @minLength 2
   * @maxLength 50
   * @pattern ^[آ-یa-zA-Z\s]+$
   */
  firstName: string;
  /**
   * @format uuid
   * @minLength 1
   */
  id: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @pattern ^[آ-یa-zA-Z\s]+$
   */
  lastName: string;
  phoneNumber?: string;
}

export interface ICreateUserResponseDTO {
  /** @format date-time */
  createdAt?: string;
  email?: string;
  fullName?: string;
  /** @format uuid */
  id?: string;
}

export interface ICreateUserResponseResultDTO {
  data?: ICreateUserResponseDTO;
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export interface ICustomAttributeDataDTO {
  attributeType?: ITypeDTO;
  constructor?: IConstructorInfoDTO;
  readonly constructorArguments?: ICustomAttributeTypedArgumentDTO[];
  readonly namedArguments?: ICustomAttributeNamedArgumentDTO[];
}

export interface ICustomAttributeNamedArgumentDTO {
  readonly isField?: boolean;
  memberInfo?: IMemberInfoDTO;
  readonly memberName?: string;
  typedValue?: ICustomAttributeTypedArgumentDTO;
}

export interface ICustomAttributeTypedArgumentDTO {
  argumentType?: ITypeDTO;
  value?: any;
}

export interface ICustomerAccountDetailsDtoDTO {
  /**
   * مانده حساب
   * @format double
   */
  accountBalance?: number;
  /** وضعیت حساب */
  accountStatus?: string;
  /** شرح وضعیت حساب */
  accountStatusDescription?: string;
  /** نوع حساب */
  accountType?: string;
  /**
   * مانده در دسترس
   * @format double
   */
  availableBalance?: number;
  /** نام صاحب حساب */
  customerFullName?: string;
  /**
   * شماره مشتری
   * @format int64
   */
  customerNo?: number;
  /** وضعیت مشتری */
  customerStatus?: string;
  /** شرح وضعیت مشتری */
  customerStatusDescription?: string;
  /** شماره شناسایی */
  idNumber?: string;
  /**
   * تعداد صاحبین حساب
   * @format double
   */
  ownershipFlag?: number;
}

export interface ICustomerAccountDetailsDtoResultDTO {
  data?: ICustomerAccountDetailsDtoDTO;
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export interface ICustomerAccountDetailsRequestDTO {
  /**
   * شماره حساب مشتری
   * @minLength 2
   */
  accountNo: string;
}

export interface ICustomerAccountDtoDTO {
  /**
   * مانده حساب
   * @format double
   */
  accountBalance?: number;
  /**
   * شماره حساب
   * @format int64
   */
  accountNo?: number;
  /** تاریخ افتتاح حساب */
  accountOpenDate?: string;
  /** وضعیت حساب */
  accountStatus?: string;
  /** شرح وضعیت حساب */
  accountStatusDescription?: string;
  /** نوع حساب */
  accountType?: string;
  /**
   * مانده در دسترس
   * @format double
   */
  availableBalance?: number;
  /** نام شعبه */
  branchName?: string;
  /** کد شعبه */
  branchNo?: string;
  /** نام صاحب حساب */
  customerFullName?: string;
  /**
   * شماره مشتری
   * @format int64
   */
  customerNo?: number;
  /** وضعیت مشتری */
  customerStatus?: string;
  /** شرح وضعیت مشتری */
  customerStatusDescription?: string;
  /**
   * مبلغ بلوکه
   * @format double
   */
  holdValue?: number;
  /** زیر محصول */
  intCat?: string;
  /**
   * تعداد بلوکه
   * @format double
   */
  numberOfHolds?: number;
  /**
   * تعداد مسدودی
   * @format double
   */
  numberOfStops?: number;
  /**
   * تعداد صاحبین حساب
   * @format double
   */
  ownershipFlag?: number;
  /**
   * تاریخ آخرین ویرایش
   * @format date-time
   */
  updatedAt?: string;
  /**
   * مسدودی برداشت
   * @format int32
   */
  withdrawalNumberStops?: number;
}

export interface ICustomerAccountDtoListResultDTO {
  data?: ICustomerAccountDtoDTO[];
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export interface ICustomerAccountsRequestDTO {
  /**
   * شماره مشتری
   * @minLength 1
   */
  customerNo: string;
}

export interface ICustomerInfoDtoDTO {
  /** تاریخ تولد */
  birthDate?: string;
  /** محل تولد */
  birthPlace?: string;
  /** کد شعبه */
  branchNo?: string;
  /** شماره شرکت */
  companyNo?: string;
  /** نام صاحب حساب */
  customerFullName?: string;
  /**
   * شماره مشتری
   * @format int64
   */
  customerNo?: number;
  /** وضعیت مشتری */
  customerStatus?: string;
  /** شرح وضعیت مشتری */
  customerStatusDescription?: string;
  /** نام پدر */
  fatherName?: string;
  /** آدرس */
  fullAddress?: string;
  /** شماره شبا */
  iban?: string;
  /** تاریخ ثبت */
  idIssueDate?: string;
  /** محل ثبت */
  idIssuePlace?: string;
  /** شماره شناسایی */
  idNumber?: string;
  /** مدرک شناسایی */
  idType?: string;
  /** شرح مدرک شناسایی */
  idTypeDescription?: string;
  /** شماره موبایل */
  phoneNumber?: string;
  /** کدپستی */
  postCode?: string;
  /** شماره شهاب */
  shahabNumber?: string;
  /**
   * تاریخ آخرین ویرایش
   * @format date-time
   */
  updatedAt?: string;
}

export interface ICustomerInfoDtoResultDTO {
  data?: ICustomerInfoDtoDTO;
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export interface ICustomerInfoRequestDTO {
  /**
   * شماره شناسایی
   * @minLength 1
   */
  idNumber: string;
  /**
   * نوع مدرک شناسایی
   * @minLength 1
   */
  idType: string;
}

export interface IDailyOperationsDtoDTO {
  /**
   * مانده حساب
   * @format double
   */
  accountBalance?: number;
  /** شماره حساب */
  accountNo?: string;
  /**
   * مبلغ
   * @format double
   */
  amount?: number;
  /** کد شعبه */
  branchNo?: string;
  /**
   * تاریخ ایجاد
   * @format date-time
   */
  createdAt?: string;
  /** نوع عملیات */
  operationSource?: string;
  /** شرح نوع عملیات */
  operationSourceDesc?: string;
  /** شرح سند */
  remarks?: string;
  /** کد کاربر */
  tellerNo?: string;
  /** شماره پیگیری */
  trackingCode?: string;
  /** کد تراکنش */
  tranNo?: string;
}

export interface IDailyOperationsDtoPagedResultDTO {
  data?: IDailyOperationsDtoDTO[];
  /** @format int32 */
  pageIndex?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
}

export interface IDailyOperationsDtoPagedResultResultDTO {
  data?: IDailyOperationsDtoPagedResultDTO;
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export interface IDailyOperationsRequestDTO {
  /**
   * نوع عملیات
   * @format int32
   */
  accountScope?: number;
  /** کد شعبه */
  branchNo: string;
  /**
   * تاریخ شروع
   * @format int32
   */
  fromDate?: number;
  /** فیلتر با کد کاربر؟ */
  isFilterByTeller: boolean;
  /**
   * شماره صفحه
   * @format int32
   */
  pageIndex: number;
  /**
   * تعداد آیتم هر صفحه
   * @format int32
   */
  pageSize: number;
  /** کد کاربر */
  tellerNo: string;
  /**
   * تاریخ پایان
   * @format int32
   */
  toDate?: number;
}

export enum IEventAttributesDTO {
  None = "None",
  SpecialName = "SpecialName",
  RTSpecialName = "RTSpecialName",
  ReservedMask = "ReservedMask",
}

export interface IEventInfoDTO {
  addMethod?: IMethodInfoDTO;
  attributes?: IEventAttributesDTO;
  readonly customAttributes?: ICustomAttributeDataDTO[];
  declaringType?: ITypeDTO;
  eventHandlerType?: ITypeDTO;
  readonly isCollectible?: boolean;
  readonly isMulticast?: boolean;
  readonly isSpecialName?: boolean;
  memberType?: IMemberTypesDTO;
  /** @format int32 */
  readonly metadataToken?: number;
  module?: IModuleDTO;
  readonly name?: string;
  raiseMethod?: IMethodInfoDTO;
  reflectedType?: ITypeDTO;
  removeMethod?: IMethodInfoDTO;
}

export enum IFieldAttributesDTO {
  PrivateScope = "PrivateScope",
  Private = "Private",
  FamANDAssem = "FamANDAssem",
  Assembly = "Assembly",
  Family = "Family",
  FamORAssem = "FamORAssem",
  Public = "Public",
  FieldAccessMask = "FieldAccessMask",
  Static = "Static",
  InitOnly = "InitOnly",
  Literal = "Literal",
  NotSerialized = "NotSerialized",
  HasFieldRVA = "HasFieldRVA",
  SpecialName = "SpecialName",
  RTSpecialName = "RTSpecialName",
  HasFieldMarshal = "HasFieldMarshal",
  PinvokeImpl = "PinvokeImpl",
  HasDefault = "HasDefault",
  ReservedMask = "ReservedMask",
}

export interface IFieldInfoDTO {
  attributes?: IFieldAttributesDTO;
  readonly customAttributes?: ICustomAttributeDataDTO[];
  declaringType?: ITypeDTO;
  fieldHandle?: IRuntimeFieldHandleDTO;
  fieldType?: ITypeDTO;
  readonly isAssembly?: boolean;
  readonly isCollectible?: boolean;
  readonly isFamily?: boolean;
  readonly isFamilyAndAssembly?: boolean;
  readonly isFamilyOrAssembly?: boolean;
  readonly isInitOnly?: boolean;
  readonly isLiteral?: boolean;
  /** @deprecated */
  readonly isNotSerialized?: boolean;
  readonly isPinvokeImpl?: boolean;
  readonly isPrivate?: boolean;
  readonly isPublic?: boolean;
  readonly isSecurityCritical?: boolean;
  readonly isSecuritySafeCritical?: boolean;
  readonly isSecurityTransparent?: boolean;
  readonly isSpecialName?: boolean;
  readonly isStatic?: boolean;
  memberType?: IMemberTypesDTO;
  /** @format int32 */
  readonly metadataToken?: number;
  module?: IModuleDTO;
  readonly name?: string;
  reflectedType?: ITypeDTO;
}

export interface IGectStatementDtoDTO {
  /**
   * مانده حساب
   * @format double
   */
  accountBalance?: number;
  /** شرح طرف حساب */
  accountSideDescription?: string;
  /**
   * طرف حساب
   * @format int32
   */
  accountSideId?: number;
  /** شرح نوع حساب */
  accountTypeDescription?: string;
  /**
   * نوع حساب
   * @format int32
   */
  accountTypeId?: number;
  /**
   * مبلغ
   * @format double
   */
  amount?: number;
  /** کد شعبه */
  branchNo?: string;
  /**
   * تاریخ ایجاد
   * @format date-time
   */
  createdAt?: string;
  /** شماره شبا مقصد */
  destinationIban?: string;
  /** کد ملی صاحب حساب مقصد */
  destinationNationalCode?: string;
  /** شرح بابت */
  reasonDescription?: string;
  /**
   * بابت
   * @format int32
   */
  reasonId?: number;
  /** شرح سند */
  remarks?: string;
  /** کد کاربر */
  tellerNo?: string;
  /** شماره پیگیری */
  trackingCode?: string;
  /** کد تراکنش */
  tranNo?: string;
  /** شرح نوع انتقال */
  transferByTypeDescription?: string;
  /**
   * نوع انتقال
   * @format int32
   */
  transferByTypeId?: number;
}

export interface IGectStatementDtoPagedResultDTO {
  data?: IGectStatementDtoDTO[];
  /** @format int32 */
  pageIndex?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
}

export interface IGectStatementDtoPagedResultResultDTO {
  data?: IGectStatementDtoPagedResultDTO;
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export interface IGectStatementRequestDTO {
  accountType?: IAccountTypeDTO;
  /** کد شعبه */
  branchNo: string;
  /**
   * تاریخ شروع
   * @format int32
   */
  fromDate?: number;
  /** فیلتر با کد کاربر؟ */
  isFilterByTeller: boolean;
  /**
   * شماره صفحه
   * @format int32
   */
  pageIndex: number;
  /**
   * تعداد آیتم هر صفحه
   * @format int32
   */
  pageSize: number;
  /** کد کاربر */
  tellerNo: string;
  /**
   * تاریخ پایان
   * @format int32
   */
  toDate?: number;
}

export interface IGenerateTokenRequestDTO {
  roles?: string[];
  /** @format int64 */
  userId?: number;
}

export enum IGenericParameterAttributesDTO {
  None = "None",
  Covariant = "Covariant",
  Contravariant = "Contravariant",
  VarianceMask = "VarianceMask",
  ReferenceTypeConstraint = "ReferenceTypeConstraint",
  NotNullableValueTypeConstraint = "NotNullableValueTypeConstraint",
  DefaultConstructorConstraint = "DefaultConstructorConstraint",
  SpecialConstraintMask = "SpecialConstraintMask",
}

export interface IGldmAccountBalanceDtoDTO {
  /**
   * مانده حساب
   * @format double
   */
  accountBalance?: number;
  /** شماره حساب */
  accountNo?: string;
  /** شرح نوع حساب */
  accountTypeDescription?: string;
  /**
   * نوع حساب
   * @format int32
   */
  accountTypeId?: number;
  /** نام شعبه */
  branchName?: string;
  /** کد شعبه */
  branchNo?: string;
  /**
   * تاریخ آخرین ویریش
   * @format date-time
   */
  updatedAt?: string;
}

export interface IGldmAccountBalanceDtoResultDTO {
  data?: IGldmAccountBalanceDtoDTO;
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export interface IGldmAccountBalanceRequestDTO {
  accountType: IAccountTypeDTO;
  /** کد شعبه */
  branchNo: string;
}

export type IICustomAttributeProviderDTO = object;

export interface IInctStatementDtoDTO {
  /**
   * مانده حساب
   * @format double
   */
  accountBalance?: number;
  /** شرح طرف حساب */
  accountSideDescription?: string;
  /**
   * طرف حساب
   * @format int32
   */
  accountSideId?: number;
  /**
   * مبلغ
   * @format double
   */
  amount?: number;
  /** کد شعبه */
  branchNo?: string;
  /**
   * تاریخ ایجاد
   * @format date-time
   */
  createdAt?: string;
  /** شماره شبا مقصد */
  destinationIban?: string;
  /** کد ملی صاحب حساب مقصد */
  destinationNationalCode?: string;
  /** شرح نوع تراکنش */
  operationTypeDescription?: string;
  /**
   * نوع تراکنش
   * @format int32
   */
  operationTypeId?: number;
  /** شرح بابت */
  reasonDescription?: string;
  /**
   * بابت
   * @format int32
   */
  reasonId?: number;
  /** شرح سند */
  remarks?: string;
  /** کد کاربر */
  tellerNo?: string;
  /** کد تراکنش */
  tranNo?: string;
  /** شرح نوع حساب مقابل حساب مشتری */
  transactionCounterpartyTypeDescription?: string;
  /**
   * نوع حساب مقابل حساب مشتری
   * @format int32
   */
  transactionCounterpartyTypeId?: number;
  /** شرح نوع انتقال */
  transferByTypeDescription?: string;
  /**
   * نوع انتقال
   * @format int32
   */
  transferByTypeId?: number;
}

export interface IInctStatementDtoPagedResultDTO {
  data?: IInctStatementDtoDTO[];
  /** @format int32 */
  pageIndex?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
}

export interface IInctStatementDtoPagedResultResultDTO {
  data?: IInctStatementDtoPagedResultDTO;
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export interface IInctStatementRequestDTO {
  /**
   * شماره حساب
   * @minLength 2
   */
  accountNo: string;
  /** کد شعبه */
  branchNo: string;
  /**
   * تاریخ شروع
   * @format int32
   */
  fromDate?: number;
  /** فیلتر با کد کاربر؟ */
  isFilterByTeller: boolean;
  /**
   * شماره صفحه
   * @format int32
   * @min 1
   */
  pageIndex: number;
  /**
   * تعداد آیتم هر صفحه
   * @format int32
   * @min 1
   */
  pageSize: number;
  /** کد کاربر */
  tellerNo: string;
  /**
   * تاریخ پایان
   * @format int32
   */
  toDate?: number;
}

export type IIntPtrDTO = object;

export interface IIntraBankTransferRequestDTO {
  /**
   * مبلغ انتقال
   * @format double
   * @min 0
   * @exclusiveMin true
   */
  amount: number;
  /**
   * شماره حساب مبدا
   * @minLength 2
   */
  fromAccountNo: string;
  /**
   * شرح سند
   * @minLength 5
   * @maxLength 50
   */
  remarks: string;
  /**
   * شماره حساب مقصد
   * @minLength 2
   */
  toAccountNo: string;
}

export interface IInvmAccountInfoDtoDTO {
  /**
   * مانده حساب
   * @format double
   */
  accountBalance?: number;
  /** تاریخ افتتاح حساب */
  accountOpenDate?: string;
  /** وضعیت حساب */
  accountStatus?: string;
  /** شرح وضعیت حساب */
  accountStatusDescription?: string;
  /** نوع حساب */
  accountType?: string;
  /**
   * مانده در دسترس
   * @format double
   */
  availableBalance?: number;
  /** نام شعبه */
  branchName?: string;
  /** کد شعبه */
  branchNo?: string;
  /**
   * شماره مشتری
   * @format int64
   */
  customerNo?: number;
  /**
   * مبلغ بلوکه
   * @format double
   */
  holdValue?: number;
  /** زیر محصول */
  intCat?: string;
  /**
   * تعداد بلوکه
   * @format double
   */
  numberOfHolds?: number;
  /**
   * تعداد مسدودی
   * @format double
   */
  numberOfStops?: number;
  /**
   * تعداد صاحبین حساب
   * @format double
   */
  ownershipFlag?: number;
  /**
   * تاریخ آخرین ویرایش
   * @format date-time
   */
  updatedAt?: string;
  /**
   * مسدودی برداشت
   * @format int32
   */
  withdrawalNumberStops?: number;
}

export interface IInvmAccountInfoDtoResultDTO {
  data?: IInvmAccountInfoDtoDTO;
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export enum ILayoutKindDTO {
  Sequential = "Sequential",
  Explicit = "Explicit",
  Auto = "Auto",
}

export interface ILoginRequestDTO {
  /**
   * @title Branch Code
   * @description کد شعبه (Branch Code)
   * کد شعبه
   * @example "101"
   * @swagger
   *   branchCode:
   *     type: string
   *     description: "کد شعبه"
   *     example: "101"
   */
  branchCode: string;
  /**
   * رمز عبور
   * @minLength 6
   * @maxLength 100
   */
  password: string;
  /**
   * نام کاربری
   * @minLength 5
   * @maxLength 100
   */
  username: string;
}

export interface ILoginResponseDTO {
  /** @format int32 */
  "not-before-policy"?: number;
  access_token?: string;
  expires_in?: string;
  id_token?: string;
  refresh_expires_in?: string;
  refresh_token?: string;
  scope?: string;
  session_state?: string;
  token_type?: string;
}

export interface ILoginResponseResultDTO {
  data?: ILoginResponseDTO;
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export interface IMemberInfoDTO {
  readonly customAttributes?: ICustomAttributeDataDTO[];
  declaringType?: ITypeDTO;
  readonly isCollectible?: boolean;
  memberType?: IMemberTypesDTO;
  /** @format int32 */
  readonly metadataToken?: number;
  module?: IModuleDTO;
  readonly name?: string;
  reflectedType?: ITypeDTO;
}

export enum IMemberTypesDTO {
  Constructor = "Constructor",
  Event = "Event",
  Field = "Field",
  Method = "Method",
  Property = "Property",
  TypeInfo = "TypeInfo",
  Custom = "Custom",
  NestedType = "NestedType",
  All = "All",
}

export enum IMethodAttributesDTO {
  PrivateScope = "PrivateScope",
  ReuseSlot = "ReuseSlot",
  Private = "Private",
  FamANDAssem = "FamANDAssem",
  Assembly = "Assembly",
  Family = "Family",
  FamORAssem = "FamORAssem",
  Public = "Public",
  MemberAccessMask = "MemberAccessMask",
  UnmanagedExport = "UnmanagedExport",
  Static = "Static",
  Final = "Final",
  Virtual = "Virtual",
  HideBySig = "HideBySig",
  NewSlot = "NewSlot",
  VtableLayoutMask = "VtableLayoutMask",
  CheckAccessOnOverride = "CheckAccessOnOverride",
  Abstract = "Abstract",
  SpecialName = "SpecialName",
  RTSpecialName = "RTSpecialName",
  PinvokeImpl = "PinvokeImpl",
  HasSecurity = "HasSecurity",
  RequireSecObject = "RequireSecObject",
  ReservedMask = "ReservedMask",
}

export interface IMethodBaseDTO {
  attributes?: IMethodAttributesDTO;
  callingConvention?: ICallingConventionsDTO;
  readonly containsGenericParameters?: boolean;
  readonly customAttributes?: ICustomAttributeDataDTO[];
  declaringType?: ITypeDTO;
  readonly isAbstract?: boolean;
  readonly isAssembly?: boolean;
  readonly isCollectible?: boolean;
  readonly isConstructedGenericMethod?: boolean;
  readonly isConstructor?: boolean;
  readonly isFamily?: boolean;
  readonly isFamilyAndAssembly?: boolean;
  readonly isFamilyOrAssembly?: boolean;
  readonly isFinal?: boolean;
  readonly isGenericMethod?: boolean;
  readonly isGenericMethodDefinition?: boolean;
  readonly isHideBySig?: boolean;
  readonly isPrivate?: boolean;
  readonly isPublic?: boolean;
  readonly isSecurityCritical?: boolean;
  readonly isSecuritySafeCritical?: boolean;
  readonly isSecurityTransparent?: boolean;
  readonly isSpecialName?: boolean;
  readonly isStatic?: boolean;
  readonly isVirtual?: boolean;
  memberType?: IMemberTypesDTO;
  /** @format int32 */
  readonly metadataToken?: number;
  methodHandle?: IRuntimeMethodHandleDTO;
  methodImplementationFlags?: IMethodImplAttributesDTO;
  module?: IModuleDTO;
  readonly name?: string;
  reflectedType?: ITypeDTO;
}

export enum IMethodImplAttributesDTO {
  IL = "IL",
  Managed = "Managed",
  Native = "Native",
  OPTIL = "OPTIL",
  CodeTypeMask = "CodeTypeMask",
  Runtime = "Runtime",
  ManagedMask = "ManagedMask",
  Unmanaged = "Unmanaged",
  NoInlining = "NoInlining",
  ForwardRef = "ForwardRef",
  Synchronized = "Synchronized",
  NoOptimization = "NoOptimization",
  PreserveSig = "PreserveSig",
  AggressiveInlining = "AggressiveInlining",
  AggressiveOptimization = "AggressiveOptimization",
  InternalCall = "InternalCall",
  MaxMethodImplVal = "MaxMethodImplVal",
}

export interface IMethodInfoDTO {
  attributes?: IMethodAttributesDTO;
  callingConvention?: ICallingConventionsDTO;
  readonly containsGenericParameters?: boolean;
  readonly customAttributes?: ICustomAttributeDataDTO[];
  declaringType?: ITypeDTO;
  readonly isAbstract?: boolean;
  readonly isAssembly?: boolean;
  readonly isCollectible?: boolean;
  readonly isConstructedGenericMethod?: boolean;
  readonly isConstructor?: boolean;
  readonly isFamily?: boolean;
  readonly isFamilyAndAssembly?: boolean;
  readonly isFamilyOrAssembly?: boolean;
  readonly isFinal?: boolean;
  readonly isGenericMethod?: boolean;
  readonly isGenericMethodDefinition?: boolean;
  readonly isHideBySig?: boolean;
  readonly isPrivate?: boolean;
  readonly isPublic?: boolean;
  readonly isSecurityCritical?: boolean;
  readonly isSecuritySafeCritical?: boolean;
  readonly isSecurityTransparent?: boolean;
  readonly isSpecialName?: boolean;
  readonly isStatic?: boolean;
  readonly isVirtual?: boolean;
  memberType?: IMemberTypesDTO;
  /** @format int32 */
  readonly metadataToken?: number;
  methodHandle?: IRuntimeMethodHandleDTO;
  methodImplementationFlags?: IMethodImplAttributesDTO;
  module?: IModuleDTO;
  readonly name?: string;
  reflectedType?: ITypeDTO;
  returnParameter?: IParameterInfoDTO;
  returnType?: ITypeDTO;
  returnTypeCustomAttributes?: IICustomAttributeProviderDTO;
}

export interface IModuleDTO {
  assembly?: IAssemblyDTO;
  readonly customAttributes?: ICustomAttributeDataDTO[];
  readonly fullyQualifiedName?: string;
  /** @format int32 */
  readonly mdStreamVersion?: number;
  /** @format int32 */
  readonly metadataToken?: number;
  moduleHandle?: IModuleHandleDTO;
  /** @format uuid */
  readonly moduleVersionId?: string;
  readonly name?: string;
  readonly scopeName?: string;
}

export interface IModuleHandleDTO {
  /** @format int32 */
  readonly mdStreamVersion?: number;
}

export interface IOperationSummaryRequestDTO {
  /** کد شعبه */
  branchNo: string;
  /** فیلتر با کد کاربر؟ */
  isFilterByTeller: boolean;
  /** کد کاربر */
  tellerNo: string;
}

export interface IOtherBankTransferDtoDTO {
  /**
   * مبلغ
   * @format double
   */
  amount?: number;
  /** کد شعبه */
  branchNo?: string;
  /**
   * مبلغ کارمزد
   * @format double
   */
  commission?: number;
  /** تاریخ تراکنش */
  createdAt?: string;
  /** شماره شبای مقصد */
  destinationIban?: string;
  /** کد ملی صاحب حساب مقصد */
  destinationNationalCode?: string;
  /** شماره حساب مبدا */
  fromAccountNo?: string;
  /** شرح شماره حساب مبدا */
  fromAccountNoDesc?: string;
  /** شرح نوع تراکنش */
  operationTypeDescription?: string;
  /**
   * نوع تراکنش
   * @format int32
   */
  operationTypeId?: number;
  reason?: IReasonDTO;
  /** شرح بابت */
  reasonDescription?: string;
  /** شرح سند */
  remarks?: string;
  /** کد کاربر */
  tellerNo?: string;
  /** شماره حساب مقصد */
  toAccountNo?: string;
  /** شرح شماره حساب مقصد */
  toAccountNoDesc?: string;
  /** شماره پیگیری */
  trackingCode?: string;
  /** کد تراکنش */
  tranNo?: string;
  /** شرح نوع انتقال */
  transferByTypeDescription?: string;
  transferByTypeId?: ITransferByTypeDTO;
}

export interface IOtherBankTransferDtoResultDTO {
  data?: IOtherBankTransferDtoDTO;
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export interface IOtherBankTransferWithdrawalRequestDTO {
  /**
   * مبلغ انتقال وجه
   * @format double
   * @min 1
   * @exclusiveMin true
   */
  amount: number;
  /** شماره شبای مقصد */
  destinationIban: string;
  /** کد ملی صاحب حساب مقصد */
  destinationNationalCode: string;
  /**
   * شماره حساب مبدا
   * @minLength 2
   */
  fromAccountNo: string;
  reason: IReasonDTO;
  /**
   * شرح سند
   * @minLength 5
   * @maxLength 50
   */
  remarks: string;
  transferByType: ITransferByTypeDTO;
}

export enum IParameterAttributesDTO {
  None = "None",
  In = "In",
  Out = "Out",
  Lcid = "Lcid",
  Retval = "Retval",
  Optional = "Optional",
  HasDefault = "HasDefault",
  HasFieldMarshal = "HasFieldMarshal",
  Reserved3 = "Reserved3",
  Reserved4 = "Reserved4",
  ReservedMask = "ReservedMask",
}

export interface IParameterInfoDTO {
  attributes?: IParameterAttributesDTO;
  readonly customAttributes?: ICustomAttributeDataDTO[];
  readonly defaultValue?: any;
  readonly hasDefaultValue?: boolean;
  readonly isIn?: boolean;
  readonly isLcid?: boolean;
  readonly isOptional?: boolean;
  readonly isOut?: boolean;
  readonly isRetval?: boolean;
  member?: IMemberInfoDTO;
  /** @format int32 */
  readonly metadataToken?: number;
  readonly name?: string;
  parameterType?: ITypeDTO;
  /** @format int32 */
  readonly position?: number;
  readonly rawDefaultValue?: any;
}

export interface IPayaCommissionRequestDTO {
  /**
   * مبلغ پایا
   * @format double
   * @min 1
   * @exclusiveMin true
   */
  amount: number;
}

export enum IPropertyAttributesDTO {
  None = "None",
  SpecialName = "SpecialName",
  RTSpecialName = "RTSpecialName",
  HasDefault = "HasDefault",
  Reserved2 = "Reserved2",
  Reserved3 = "Reserved3",
  Reserved4 = "Reserved4",
  ReservedMask = "ReservedMask",
}

export interface IPropertyInfoDTO {
  attributes?: IPropertyAttributesDTO;
  readonly canRead?: boolean;
  readonly canWrite?: boolean;
  readonly customAttributes?: ICustomAttributeDataDTO[];
  declaringType?: ITypeDTO;
  getMethod?: IMethodInfoDTO;
  readonly isCollectible?: boolean;
  readonly isSpecialName?: boolean;
  memberType?: IMemberTypesDTO;
  /** @format int32 */
  readonly metadataToken?: number;
  module?: IModuleDTO;
  readonly name?: string;
  propertyType?: ITypeDTO;
  reflectedType?: ITypeDTO;
  setMethod?: IMethodInfoDTO;
}

export enum IReasonDTO {
  POSA = "POSA",
  IOSP = "IOSP",
  HIPA = "HIPA",
  ISAP = "ISAP",
  FXAP = "FXAP",
  DRPA = "DRPA",
  RTAP = "RTAP",
  MPTP = "MPTP",
  IMPT = "IMPT",
  LMAP = "LMAP",
  CDAP = "CDAP",
  TCAP = "TCAP",
  GEAC = "GEAC",
  LRPA = "LRPA",
  CCPA = "CCPA",
  GPAC = "GPAC",
  CPAC = "CPAC",
  GPPC = "GPPC",
  SPAC = "SPAC",
}

export interface IRefreshRequestDTO {
  refreshToken: string;
  token: string;
}

export interface IResetPasswordUserRequestDTO {
  /** @minLength 1 */
  username: string;
}

export interface IRuntimeFieldHandleDTO {
  value?: IIntPtrDTO;
}

export interface IRuntimeMethodHandleDTO {
  value?: IIntPtrDTO;
}

export interface IRuntimeTypeHandleDTO {
  value?: IIntPtrDTO;
}

export enum ISecurityRuleSetDTO {
  None = "None",
  Level1 = "Level1",
  Level2 = "Level2",
}

export interface IStringIEnumerableResultDTO {
  data?: string[];
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export interface IStructLayoutAttributeDTO {
  readonly typeId?: any;
  value?: ILayoutKindDTO;
}

export interface ITellerCashBalanceDtoDTO {
  /**
   * موجودی صندوق کاربر
   * @format double
   */
  tellerCashBalance?: number;
}

export interface ITellerCashBalanceDtoResultDTO {
  data?: ITellerCashBalanceDtoDTO;
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export interface ITellerCashBalanceRequestDTO {
  /** کد شعبه */
  branchNo: string;
  /** کد کاربر */
  tellerNo: string;
}

export interface ITellerOperationSummaryDtoDTO {
  /**
   * تعداد تراکنش‌های نقدی پرداختی
   * @format int32
   */
  countCashPayment?: number;
  /**
   * تعداد تراکنش‌های نقدی دریافتی
   * @format int32
   */
  countCashReceive?: number;
  /**
   * تعداد تراکنش‌های انتقالی پرداختی
   * @format int32
   */
  countTransferPayment?: number;
  /**
   * تعداد تراکنش‌های انتقالی دریافتی
   * @format int32
   */
  countTransferReceive?: number;
  /**
   * موجودی صندوق کاربر
   * @format double
   */
  tellerCashBalance?: number;
  /**
   * جمع مبلغ تراکنش‌های نقدی پرداختی
   * @format double
   */
  totalAmountCashPayment?: number;
  /**
   * جمع مبلغ تراکنش‌های نقدی دریافتی
   * @format double
   */
  totalAmountCashReceive?: number;
  /**
   * جمع مبلغ تراکنش‌های انتقالی پرداختی
   * @format double
   */
  totalAmountTransferPayment?: number;
  /**
   * جمع مبلغ تراکنش‌های انتقالی دریافتی
   * @format double
   */
  totalAmountTransferReceive?: number;
}

export interface ITellerOperationSummaryDtoResultDTO {
  data?: ITellerOperationSummaryDtoDTO;
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export interface ITransactionDtoDTO {
  /**
   * مبلغ
   * @format double
   */
  amount?: number;
  /** کد شعبه */
  branchNo?: string;
  /** تاریخ تراکنش */
  createdAt?: string;
  /** شماره حساب مبدا */
  fromAccountNo?: string;
  /** شرح شماره حساب مبدا */
  fromAccountNoDesc?: string;
  /** شرح نوع تراکنش */
  operationTypeDescription?: string;
  /**
   * نوع تراکنش
   * @format int32
   */
  operationTypeId?: number;
  /** شرح سند */
  remarks?: string;
  /** کد کاربر */
  tellerNo?: string;
  /** شماره حساب مقصد */
  toAccountNo?: string;
  /** شرح شماره حساب مقصد */
  toAccountNoDesc?: string;
  /** شماره پیگیری */
  trackingCode?: string;
  /** کد تراکنش */
  tranNo?: string;
}

export interface ITransactionDtoResultDTO {
  data?: ITransactionDtoDTO;
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export enum ITransferByTypeDTO {
  Paya = "Paya",
  Satna = "Satna",
}

export enum ITypeAttributesDTO {
  NotPublic = "NotPublic",
  AutoLayout = "AutoLayout",
  AnsiClass = "AnsiClass",
  Class = "Class",
  Public = "Public",
  NestedPublic = "NestedPublic",
  NestedPrivate = "NestedPrivate",
  NestedFamily = "NestedFamily",
  NestedAssembly = "NestedAssembly",
  NestedFamANDAssem = "NestedFamANDAssem",
  VisibilityMask = "VisibilityMask",
  NestedFamORAssem = "NestedFamORAssem",
  SequentialLayout = "SequentialLayout",
  ExplicitLayout = "ExplicitLayout",
  LayoutMask = "LayoutMask",
  Interface = "Interface",
  ClassSemanticsMask = "ClassSemanticsMask",
  Abstract = "Abstract",
  Sealed = "Sealed",
  SpecialName = "SpecialName",
  RTSpecialName = "RTSpecialName",
  Import = "Import",
  Serializable = "Serializable",
  WindowsRuntime = "WindowsRuntime",
  UnicodeClass = "UnicodeClass",
  AutoClass = "AutoClass",
  StringFormatMask = "StringFormatMask",
  CustomFormatClass = "CustomFormatClass",
  HasSecurity = "HasSecurity",
  ReservedMask = "ReservedMask",
  BeforeFieldInit = "BeforeFieldInit",
  CustomFormatMask = "CustomFormatMask",
}

export interface ITypeDTO {
  assembly?: IAssemblyDTO;
  readonly assemblyQualifiedName?: string;
  attributes?: ITypeAttributesDTO;
  baseType?: ITypeDTO;
  readonly containsGenericParameters?: boolean;
  readonly customAttributes?: ICustomAttributeDataDTO[];
  declaringMethod?: IMethodBaseDTO;
  declaringType?: ITypeDTO;
  readonly fullName?: string;
  genericParameterAttributes?: IGenericParameterAttributesDTO;
  /** @format int32 */
  readonly genericParameterPosition?: number;
  readonly genericTypeArguments?: ITypeDTO[];
  /** @format uuid */
  readonly guid?: string;
  readonly hasElementType?: boolean;
  readonly isAbstract?: boolean;
  readonly isAnsiClass?: boolean;
  readonly isArray?: boolean;
  readonly isAutoClass?: boolean;
  readonly isAutoLayout?: boolean;
  readonly isByRef?: boolean;
  readonly isByRefLike?: boolean;
  readonly isCOMObject?: boolean;
  readonly isClass?: boolean;
  readonly isCollectible?: boolean;
  readonly isConstructedGenericType?: boolean;
  readonly isContextful?: boolean;
  readonly isEnum?: boolean;
  readonly isExplicitLayout?: boolean;
  readonly isFunctionPointer?: boolean;
  readonly isGenericMethodParameter?: boolean;
  readonly isGenericParameter?: boolean;
  readonly isGenericType?: boolean;
  readonly isGenericTypeDefinition?: boolean;
  readonly isGenericTypeParameter?: boolean;
  readonly isImport?: boolean;
  readonly isInterface?: boolean;
  readonly isLayoutSequential?: boolean;
  readonly isMarshalByRef?: boolean;
  readonly isNested?: boolean;
  readonly isNestedAssembly?: boolean;
  readonly isNestedFamANDAssem?: boolean;
  readonly isNestedFamORAssem?: boolean;
  readonly isNestedFamily?: boolean;
  readonly isNestedPrivate?: boolean;
  readonly isNestedPublic?: boolean;
  readonly isNotPublic?: boolean;
  readonly isPointer?: boolean;
  readonly isPrimitive?: boolean;
  readonly isPublic?: boolean;
  readonly isSZArray?: boolean;
  readonly isSealed?: boolean;
  readonly isSecurityCritical?: boolean;
  readonly isSecuritySafeCritical?: boolean;
  readonly isSecurityTransparent?: boolean;
  /** @deprecated */
  readonly isSerializable?: boolean;
  readonly isSignatureType?: boolean;
  readonly isSpecialName?: boolean;
  readonly isTypeDefinition?: boolean;
  readonly isUnicodeClass?: boolean;
  readonly isUnmanagedFunctionPointer?: boolean;
  readonly isValueType?: boolean;
  readonly isVariableBoundArray?: boolean;
  readonly isVisible?: boolean;
  memberType?: IMemberTypesDTO;
  /** @format int32 */
  readonly metadataToken?: number;
  module?: IModuleDTO;
  readonly name?: string;
  readonly namespace?: string;
  reflectedType?: ITypeDTO;
  structLayoutAttribute?: IStructLayoutAttributeDTO;
  typeHandle?: IRuntimeTypeHandleDTO;
  typeInitializer?: IConstructorInfoDTO;
  underlyingSystemType?: ITypeDTO;
}

export interface ITypeInfoDTO {
  assembly?: IAssemblyDTO;
  readonly assemblyQualifiedName?: string;
  attributes?: ITypeAttributesDTO;
  baseType?: ITypeDTO;
  readonly containsGenericParameters?: boolean;
  readonly customAttributes?: ICustomAttributeDataDTO[];
  readonly declaredConstructors?: IConstructorInfoDTO[];
  readonly declaredEvents?: IEventInfoDTO[];
  readonly declaredFields?: IFieldInfoDTO[];
  readonly declaredMembers?: IMemberInfoDTO[];
  readonly declaredMethods?: IMethodInfoDTO[];
  readonly declaredNestedTypes?: ITypeInfoDTO[];
  readonly declaredProperties?: IPropertyInfoDTO[];
  declaringMethod?: IMethodBaseDTO;
  declaringType?: ITypeDTO;
  readonly fullName?: string;
  genericParameterAttributes?: IGenericParameterAttributesDTO;
  /** @format int32 */
  readonly genericParameterPosition?: number;
  readonly genericTypeArguments?: ITypeDTO[];
  readonly genericTypeParameters?: ITypeDTO[];
  /** @format uuid */
  readonly guid?: string;
  readonly hasElementType?: boolean;
  readonly implementedInterfaces?: ITypeDTO[];
  readonly isAbstract?: boolean;
  readonly isAnsiClass?: boolean;
  readonly isArray?: boolean;
  readonly isAutoClass?: boolean;
  readonly isAutoLayout?: boolean;
  readonly isByRef?: boolean;
  readonly isByRefLike?: boolean;
  readonly isCOMObject?: boolean;
  readonly isClass?: boolean;
  readonly isCollectible?: boolean;
  readonly isConstructedGenericType?: boolean;
  readonly isContextful?: boolean;
  readonly isEnum?: boolean;
  readonly isExplicitLayout?: boolean;
  readonly isFunctionPointer?: boolean;
  readonly isGenericMethodParameter?: boolean;
  readonly isGenericParameter?: boolean;
  readonly isGenericType?: boolean;
  readonly isGenericTypeDefinition?: boolean;
  readonly isGenericTypeParameter?: boolean;
  readonly isImport?: boolean;
  readonly isInterface?: boolean;
  readonly isLayoutSequential?: boolean;
  readonly isMarshalByRef?: boolean;
  readonly isNested?: boolean;
  readonly isNestedAssembly?: boolean;
  readonly isNestedFamANDAssem?: boolean;
  readonly isNestedFamORAssem?: boolean;
  readonly isNestedFamily?: boolean;
  readonly isNestedPrivate?: boolean;
  readonly isNestedPublic?: boolean;
  readonly isNotPublic?: boolean;
  readonly isPointer?: boolean;
  readonly isPrimitive?: boolean;
  readonly isPublic?: boolean;
  readonly isSZArray?: boolean;
  readonly isSealed?: boolean;
  readonly isSecurityCritical?: boolean;
  readonly isSecuritySafeCritical?: boolean;
  readonly isSecurityTransparent?: boolean;
  /** @deprecated */
  readonly isSerializable?: boolean;
  readonly isSignatureType?: boolean;
  readonly isSpecialName?: boolean;
  readonly isTypeDefinition?: boolean;
  readonly isUnicodeClass?: boolean;
  readonly isUnmanagedFunctionPointer?: boolean;
  readonly isValueType?: boolean;
  readonly isVariableBoundArray?: boolean;
  readonly isVisible?: boolean;
  memberType?: IMemberTypesDTO;
  /** @format int32 */
  readonly metadataToken?: number;
  module?: IModuleDTO;
  readonly name?: string;
  readonly namespace?: string;
  reflectedType?: ITypeDTO;
  structLayoutAttribute?: IStructLayoutAttributeDTO;
  typeHandle?: IRuntimeTypeHandleDTO;
  typeInitializer?: IConstructorInfoDTO;
  underlyingSystemType?: ITypeDTO;
}

export interface IUserDtoDTO {
  claims?: IClaimDTO[];
  /** @format int64 */
  id?: number;
  roles?: string[];
  username?: string;
}

export interface IUserDtoIEnumerableResultDTO {
  data?: IUserDtoDTO[];
  isSuccess?: boolean;
  message?: string;
  /** @format int64 */
  statusCode?: number;
  statusDesc?: string;
}

export type IVAuthAddClaimCreateDataDTO = IBooleanResultDTO;

export interface IVAuthAddClaimCreateParamsDTO {
  version: string;
}

export type IVAuthAddPolicyCreateDataDTO = IBooleanResultDTO;

export interface IVAuthAddPolicyCreateParamsDTO {
  version: string;
}

export type IVAuthAddRoleCreateDataDTO = IBooleanResultDTO;

export interface IVAuthAddRoleCreateParamsDTO {
  version: string;
}

export type IVAuthCreateTokenCreateDataDTO = ILoginResponseResultDTO;

export interface IVAuthCreateTokenCreateParamsDTO {
  version: string;
}

export type IVAuthIsAuthorizedListDataDTO = IBooleanResultDTO;

export interface IVAuthIsAuthorizedListParamsDTO {
  policyName?: string;
  /** @format int64 */
  userId?: number;
  version: string;
}

export type IVAuthIsInRoleListDataDTO = IBooleanResultDTO;

export interface IVAuthIsInRoleListParamsDTO {
  roleName?: string;
  /** @format int64 */
  userId?: number;
  version: string;
}

export type IVAuthLoginCreateDataDTO = ILoginResponseResultDTO;

export interface IVAuthLoginCreateParamsDTO {
  version: string;
}

export type IVAuthRefreshTokenCreateDataDTO = ILoginResponseResultDTO;

export interface IVAuthRefreshTokenCreateParamsDTO {
  version: string;
}

export type IVAuthValidateTokenCreateDataDTO = IBooleanResultDTO;

export interface IVAuthValidateTokenCreateParamsDTO {
  version: string;
}

export type IVCashTransactionChargeCashBranchCreateDataDTO =
  ITransactionDtoResultDTO;

export interface IVCashTransactionChargeCashBranchCreateParamsDTO {
  version: string;
}

export type IVCashTransactionChargeCashTellerCreateDataDTO =
  ITransactionDtoResultDTO;

export interface IVCashTransactionChargeCashTellerCreateParamsDTO {
  version: string;
}

export type IVCashTransactionDepositCreateDataDTO = ITransactionDtoResultDTO;

export interface IVCashTransactionDepositCreateParamsDTO {
  version: string;
}

export type IVCashTransactionDisChargeCashBranchCreateDataDTO =
  ITransactionDtoResultDTO;

export interface IVCashTransactionDisChargeCashBranchCreateParamsDTO {
  version: string;
}

export type IVCashTransactionDisChargeCashTellerCreateDataDTO =
  ITransactionDtoResultDTO;

export interface IVCashTransactionDisChargeCashTellerCreateParamsDTO {
  version: string;
}

export type IVCashTransactionWithdrawalCreateDataDTO = ITransactionDtoResultDTO;

export interface IVCashTransactionWithdrawalCreateParamsDTO {
  version: string;
}

export type IVConfigAppSettingCreateDataDTO = IConfigDtoResultDTO;

export interface IVConfigAppSettingCreateParamsDTO {
  version: string;
}

export type IVIntraBankTransferIntraTransferCreateDataDTO =
  ITransactionDtoResultDTO;

export interface IVIntraBankTransferIntraTransferCreateParamsDTO {
  version: string;
}

export type IVOtherBankTransferPayaCommissionCreateDataDTO =
  ITransactionDtoResultDTO;

export interface IVOtherBankTransferPayaCommissionCreateParamsDTO {
  version: string;
}

export type IVOtherBankTransferWithdrawalCreateDataDTO =
  IOtherBankTransferDtoResultDTO;

export interface IVOtherBankTransferWithdrawalCreateParamsDTO {
  version: string;
}

export type IVReportAccountBalanceCreateDataDTO = IAccountBalanceDtoResultDTO;

export interface IVReportAccountBalanceCreateParamsDTO {
  version: string;
}

export type IVReportAccountInfoCreateDataDTO = IInvmAccountInfoDtoResultDTO;

export interface IVReportAccountInfoCreateParamsDTO {
  version: string;
}

export type IVReportCustomerAccountDetailsCreateDataDTO =
  ICustomerAccountDetailsDtoResultDTO;

export interface IVReportCustomerAccountDetailsCreateParamsDTO {
  version: string;
}

export type IVReportCustomerAccountsCreateDataDTO =
  ICustomerAccountDtoListResultDTO;

export interface IVReportCustomerAccountsCreateParamsDTO {
  version: string;
}

export type IVReportCustomerInfoCreateDataDTO = ICustomerInfoDtoResultDTO;

export interface IVReportCustomerInfoCreateParamsDTO {
  version: string;
}

export type IVReportDailyOperationsCreateDataDTO =
  IDailyOperationsDtoPagedResultResultDTO;

export interface IVReportDailyOperationsCreateParamsDTO {
  version: string;
}

export type IVReportGectStatementCreateDataDTO =
  IGectStatementDtoPagedResultResultDTO;

export interface IVReportGectStatementCreateParamsDTO {
  version: string;
}

export type IVReportGldmAccountBalanceCreateDataDTO =
  IGldmAccountBalanceDtoResultDTO;

export interface IVReportGldmAccountBalanceCreateParamsDTO {
  version: string;
}

export type IVReportInctStatementCreateDataDTO =
  IInctStatementDtoPagedResultResultDTO;

export interface IVReportInctStatementCreateParamsDTO {
  version: string;
}

export type IVReportOperationSummaryCreateDataDTO =
  ITellerOperationSummaryDtoResultDTO;

export interface IVReportOperationSummaryCreateParamsDTO {
  version: string;
}

export type IVReportTellerCashBalanceCreateDataDTO =
  ITellerCashBalanceDtoResultDTO;

export interface IVReportTellerCashBalanceCreateParamsDTO {
  version: string;
}

export type IVSampleCreateUserCreateDataDTO = ICreateUserResponseResultDTO;

export interface IVSampleCreateUserCreateParamsDTO {
  version: string;
}

export type IVSamplePutMqMessageCreateDataDTO = any;

export interface IVSamplePutMqMessageCreateParamsDTO {
  version: string;
}

export type IVUsersAddClaimToUserCreateDataDTO = IBooleanResultDTO;

export interface IVUsersAddClaimToUserCreateParamsDTO {
  claimType?: string;
  claimValue?: string;
  username?: string;
  version: string;
}

export type IVUsersAddRoleToUserCreateDataDTO = IBooleanResultDTO;

export interface IVUsersAddRoleToUserCreateParamsDTO {
  roleName?: string;
  username?: string;
  version: string;
}

export type IVUsersChangePasswordCreateDataDTO = IBooleanResultDTO;

export interface IVUsersChangePasswordCreateParamsDTO {
  version: string;
}

export type IVUsersChangeUserInfoCreateDataDTO = IBooleanResultDTO;

export interface IVUsersChangeUserInfoCreateParamsDTO {
  version: string;
}

export type IVUsersCreateRoleCreateDataDTO = IBooleanResultDTO;

export interface IVUsersCreateRoleCreateParamsDTO {
  roleName?: string;
  version: string;
}

export type IVUsersCreateUserCreateDataDTO = IBooleanResultDTO;

export interface IVUsersCreateUserCreateParamsDTO {
  version: string;
}

export type IVUsersFirstInitiateListDataDTO = string;

export interface IVUsersFirstInitiateListParamsDTO {
  version: string;
}

export type IVUsersGetAllUsersListDataDTO = IUserDtoIEnumerableResultDTO;

export interface IVUsersGetAllUsersListParamsDTO {
  version: string;
}

export type IVUsersGetUserClaimsListDataDTO = IClaimIEnumerableResultDTO;

export interface IVUsersGetUserClaimsListParamsDTO {
  username?: string;
  version: string;
}

export type IVUsersGetUserRolesListDataDTO = IStringIEnumerableResultDTO;

export interface IVUsersGetUserRolesListParamsDTO {
  username?: string;
  version: string;
}

export type IVUsersIsUserInRoleListDataDTO = IBooleanResultDTO;

export interface IVUsersIsUserInRoleListParamsDTO {
  roleName?: string;
  username?: string;
  version: string;
}

export type IVUsersRemoveClaimFromUserDeleteDataDTO = IBooleanResultDTO;

export interface IVUsersRemoveClaimFromUserDeleteParamsDTO {
  claimType?: string;
  claimValue?: string;
  username?: string;
  version: string;
}

export type IVUsersRemoveRoleFromUserDeleteDataDTO = IBooleanResultDTO;

export interface IVUsersRemoveRoleFromUserDeleteParamsDTO {
  roleName?: string;
  username?: string;
  version: string;
}

export type IVUsersResetPasswordUserCreateDataDTO = IBooleanResultDTO;

export interface IVUsersResetPasswordUserCreateParamsDTO {
  version: string;
}

export type IVUsersUsersFromTelmCreateDataDTO = IBooleanResultDTO;

export interface IVUsersUsersFromTelmCreateParamsDTO {
  version: string;
}

export interface IValidateTokenRequestDTO {
  token: string;
}
