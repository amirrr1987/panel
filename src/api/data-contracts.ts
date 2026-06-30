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

export interface IAddClaimToUserRequestDTO {
  /**
   * @minLength 1
   * @maxLength 100
   */
  claimType: string;
  /**
   * @minLength 1
   * @maxLength 200
   */
  claimValue: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  username: string;
}

export interface IAddPolicyRequestDTO {
  configurePolicy?: IAuthorizationPolicyBuilderActionDTO;
  policyName?: string | null;
}

export interface IAssemblyDTO {
  /** @deprecated */
  readonly codeBase?: string | null;
  readonly customAttributes?: ICustomAttributeDataDTO[] | null;
  readonly definedTypes?: ITypeInfoDTO[] | null;
  entryPoint?: IMethodInfoDTO;
  /** @deprecated */
  readonly escapedCodeBase?: string | null;
  readonly exportedTypes?: ITypeDTO[] | null;
  readonly fullName?: string | null;
  /** @deprecated */
  readonly globalAssemblyCache?: boolean;
  /** @format int64 */
  readonly hostContext?: number;
  readonly imageRuntimeVersion?: string | null;
  readonly isCollectible?: boolean;
  readonly isDynamic?: boolean;
  readonly isFullyTrusted?: boolean;
  readonly location?: string | null;
  manifestModule?: IModuleDTO;
  readonly modules?: IModuleDTO[] | null;
  readonly reflectionOnly?: boolean;
  securityRuleSet?: ISecurityRuleSetDTO;
}

export interface IAuthorizationPolicyBuilderActionDTO {
  method?: IMethodInfoDTO;
  readonly target?: any | null;
}

/** @format int32 */
export enum ICallingConventionsDTO {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value32 = 32,
  Value64 = 64,
}

export type ICaptchaGenerateListDataDTO = any;

export type ICaptchaVerifyCreateDataDTO = any;

export interface ICaptchaVerifyDtoDTO {
  /** @format uuid */
  captchaId?: string;
  userInput?: string | null;
}

export type IClaimsAddClaimToUserCreateDataDTO = any;

export type IClaimsRemoveClaimFromUserDeleteDataDTO = any;

export interface IConstructorInfoDTO {
  attributes?: IMethodAttributesDTO;
  callingConvention?: ICallingConventionsDTO;
  readonly containsGenericParameters?: boolean;
  readonly customAttributes?: ICustomAttributeDataDTO[] | null;
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
  readonly name?: string | null;
  reflectedType?: ITypeDTO;
}

export interface ICreateProjectDtoDTO {
  activityType?: string | null;
  approvalAuthority?: string | null;
  approvalDate?: string | null;
  /** @format int32 */
  bankBranchCode?: number | null;
  /** @format int64 */
  bankFacilityAmount?: number | null;
  /** @format int64 */
  bankFundAmount?: number | null;
  /** @format int32 */
  bankProvinceCode?: number | null;
  creditLineType?: string | null;
  employmentCount?: string | null;
  /** @format int64 */
  executorCashContribution?: number | null;
  /** @format int64 */
  executorNonCashContribution?: number | null;
  investmentRate?: string | null;
  loanAccountNumber?: string | null;
  projectAddress?: string | null;
  projectCapacity?: string | null;
  projectFileNumber?: string | null;
  projectName?: string | null;
  registeredUser?: string | null;
  sector?: string | null;
  subSector?: string | null;
}

export interface ICreateRoleRequestDtoDTO {
  /**
   * @minLength 1
   * @maxLength 256
   */
  roleName: string;
}

export interface ICreateUserRequestDTO {
  /**
   * ایمیل
   * @format email
   * @minLength 1
   * @maxLength 256
   */
  email: string;
  /**
   * نام
   * @minLength 10
   * @maxLength 100
   */
  firstName: string;
  /**
   * نام خانوادگی
   * @minLength 1
   * @maxLength 100
   */
  lastName: string;
  /**
   * شماره تلفن
   * @minLength 1
   * @pattern ^09\d{9}$
   */
  phoneNumber: string;
}

export interface ICreateUserRequestDtoDTO {
  password?: string | null;
  userName?: string | null;
}

export interface ICustomAttributeDataDTO {
  attributeType?: ITypeDTO;
  constructor?: IConstructorInfoDTO;
  readonly constructorArguments?: ICustomAttributeTypedArgumentDTO[] | null;
  readonly namedArguments?: ICustomAttributeNamedArgumentDTO[] | null;
}

export interface ICustomAttributeNamedArgumentDTO {
  readonly isField?: boolean;
  memberInfo?: IMemberInfoDTO;
  readonly memberName?: string | null;
  typedValue?: ICustomAttributeTypedArgumentDTO;
}

export interface ICustomAttributeTypedArgumentDTO {
  argumentType?: ITypeDTO;
  value?: any | null;
}

/** @format int32 */
export enum IEventAttributesDTO {
  Value0 = 0,
  Value512 = 512,
  Value1024 = 1024,
}

export interface IEventInfoDTO {
  addMethod?: IMethodInfoDTO;
  attributes?: IEventAttributesDTO;
  readonly customAttributes?: ICustomAttributeDataDTO[] | null;
  declaringType?: ITypeDTO;
  eventHandlerType?: ITypeDTO;
  readonly isCollectible?: boolean;
  readonly isMulticast?: boolean;
  readonly isSpecialName?: boolean;
  memberType?: IMemberTypesDTO;
  /** @format int32 */
  readonly metadataToken?: number;
  module?: IModuleDTO;
  readonly name?: string | null;
  raiseMethod?: IMethodInfoDTO;
  reflectedType?: ITypeDTO;
  removeMethod?: IMethodInfoDTO;
}

/** @format int32 */
export enum IFieldAttributesDTO {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
  Value16 = 16,
  Value32 = 32,
  Value64 = 64,
  Value128 = 128,
  Value256 = 256,
  Value512 = 512,
  Value1024 = 1024,
  Value4096 = 4096,
  Value8192 = 8192,
  Value32768 = 32768,
  Value38144 = 38144,
}

export interface IFieldInfoDTO {
  attributes?: IFieldAttributesDTO;
  readonly customAttributes?: ICustomAttributeDataDTO[] | null;
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
  readonly name?: string | null;
  reflectedType?: ITypeDTO;
}

/** @format int32 */
export enum IGenericParameterAttributesDTO {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value8 = 8,
  Value16 = 16,
  Value28 = 28,
}

export interface IGetRolePermissionsRequestDtoDTO {
  /**
   * @minLength 1
   * @maxLength 256
   */
  roleName: string;
}

export type IICustomAttributeProviderDTO = object;

export type IIntPtrDTO = object;

/** @format int32 */
export enum ILayoutKindDTO {
  Value0 = 0,
  Value2 = 2,
  Value3 = 3,
}

export interface ILoginRequestDTO {
  /** @format uuid */
  captchaId: string;
  captchaInput: string;
  isActiveDirectory: boolean;
  password: string;
  username: string;
}

export interface IMemberInfoDTO {
  readonly customAttributes?: ICustomAttributeDataDTO[] | null;
  declaringType?: ITypeDTO;
  readonly isCollectible?: boolean;
  memberType?: IMemberTypesDTO;
  /** @format int32 */
  readonly metadataToken?: number;
  module?: IModuleDTO;
  readonly name?: string | null;
  reflectedType?: ITypeDTO;
}

/** @format int32 */
export enum IMemberTypesDTO {
  Value1 = 1,
  Value2 = 2,
  Value4 = 4,
  Value8 = 8,
  Value16 = 16,
  Value32 = 32,
  Value64 = 64,
  Value128 = 128,
  Value191 = 191,
}

/** @format int32 */
export enum IMethodAttributesDTO {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
  Value8 = 8,
  Value16 = 16,
  Value32 = 32,
  Value64 = 64,
  Value128 = 128,
  Value256 = 256,
  Value512 = 512,
  Value1024 = 1024,
  Value2048 = 2048,
  Value4096 = 4096,
  Value8192 = 8192,
  Value16384 = 16384,
  Value32768 = 32768,
  Value53248 = 53248,
}

export interface IMethodBaseDTO {
  attributes?: IMethodAttributesDTO;
  callingConvention?: ICallingConventionsDTO;
  readonly containsGenericParameters?: boolean;
  readonly customAttributes?: ICustomAttributeDataDTO[] | null;
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
  readonly name?: string | null;
  reflectedType?: ITypeDTO;
}

/** @format int32 */
export enum IMethodImplAttributesDTO {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value8 = 8,
  Value16 = 16,
  Value32 = 32,
  Value64 = 64,
  Value128 = 128,
  Value256 = 256,
  Value512 = 512,
  Value4096 = 4096,
  Value65535 = 65535,
}

export interface IMethodInfoDTO {
  attributes?: IMethodAttributesDTO;
  callingConvention?: ICallingConventionsDTO;
  readonly containsGenericParameters?: boolean;
  readonly customAttributes?: ICustomAttributeDataDTO[] | null;
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
  readonly name?: string | null;
  reflectedType?: ITypeDTO;
  returnParameter?: IParameterInfoDTO;
  returnType?: ITypeDTO;
  returnTypeCustomAttributes?: IICustomAttributeProviderDTO;
}

export interface IModuleDTO {
  assembly?: IAssemblyDTO;
  readonly customAttributes?: ICustomAttributeDataDTO[] | null;
  readonly fullyQualifiedName?: string | null;
  /** @format int32 */
  readonly mdStreamVersion?: number;
  /** @format int32 */
  readonly metadataToken?: number;
  moduleHandle?: IModuleHandleDTO;
  /** @format uuid */
  readonly moduleVersionId?: string;
  readonly name?: string | null;
  readonly scopeName?: string | null;
}

export interface IModuleHandleDTO {
  /** @format int32 */
  readonly mdStreamVersion?: number;
}

/** @format int32 */
export enum IParameterAttributesDTO {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value4 = 4,
  Value8 = 8,
  Value16 = 16,
  Value4096 = 4096,
  Value8192 = 8192,
  Value16384 = 16384,
  Value32768 = 32768,
  Value61440 = 61440,
}

export interface IParameterInfoDTO {
  attributes?: IParameterAttributesDTO;
  readonly customAttributes?: ICustomAttributeDataDTO[] | null;
  readonly defaultValue?: any | null;
  readonly hasDefaultValue?: boolean;
  readonly isIn?: boolean;
  readonly isLcid?: boolean;
  readonly isOptional?: boolean;
  readonly isOut?: boolean;
  readonly isRetval?: boolean;
  member?: IMemberInfoDTO;
  /** @format int32 */
  readonly metadataToken?: number;
  readonly name?: string | null;
  parameterType?: ITypeDTO;
  /** @format int32 */
  readonly position?: number;
  readonly rawDefaultValue?: any | null;
}

export interface IPermissionRoleRequestDtoDTO {
  /**
   * @minLength 1
   * @maxLength 200
   */
  permission: string;
  /**
   * @minLength 1
   * @maxLength 256
   */
  roleName: string;
}

export interface IPermissionUserRequestDtoDTO {
  /**
   * @minLength 1
   * @maxLength 200
   */
  permission: string;
  /**
   * @minLength 1
   * @maxLength 256
   */
  username: string;
}

export type IPermissionsAddPermissionToRoleCreateDataDTO = any;

export type IPermissionsAddPermissionToUserCreateDataDTO = any;

export type IPermissionsDenyPermissionForUserCreateDataDTO = any;

export type IPermissionsRemovePermissionFromRoleDeleteDataDTO = any;

export type IPermissionsRemovePermissionFromUserDeleteDataDTO = any;

/** @format int32 */
export enum IPropertyAttributesDTO {
  Value0 = 0,
  Value512 = 512,
  Value1024 = 1024,
  Value4096 = 4096,
  Value8192 = 8192,
  Value16384 = 16384,
  Value32768 = 32768,
  Value62464 = 62464,
}

export interface IPropertyInfoDTO {
  attributes?: IPropertyAttributesDTO;
  readonly canRead?: boolean;
  readonly canWrite?: boolean;
  readonly customAttributes?: ICustomAttributeDataDTO[] | null;
  declaringType?: ITypeDTO;
  getMethod?: IMethodInfoDTO;
  readonly isCollectible?: boolean;
  readonly isSpecialName?: boolean;
  memberType?: IMemberTypesDTO;
  /** @format int32 */
  readonly metadataToken?: number;
  module?: IModuleDTO;
  readonly name?: string | null;
  propertyType?: ITypeDTO;
  reflectedType?: ITypeDTO;
  setMethod?: IMethodInfoDTO;
}

export interface IRefreshRequestDTO {
  refreshToken?: string | null;
  token?: string | null;
}

export interface IRemoveClaimFromUserRequestDTO {
  /**
   * @minLength 1
   * @maxLength 100
   */
  claimType: string;
  /**
   * @minLength 1
   * @maxLength 200
   */
  claimValue: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  username: string;
}

export type IRolesAddRoleToUserCreateDataDTO = any;

export type IRolesCreateRoleCreateDataDTO = any;

export type IRolesGetRolePermissionsCreateDataDTO = any;

export type IRolesRemoveRoleFromUserDeleteDataDTO = any;

export interface IRuntimeFieldHandleDTO {
  value?: IIntPtrDTO;
}

export interface IRuntimeMethodHandleDTO {
  value?: IIntPtrDTO;
}

export interface IRuntimeTypeHandleDTO {
  value?: IIntPtrDTO;
}

/** @format int32 */
export enum ISecurityRuleSetDTO {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export interface IStructLayoutAttributeDTO {
  readonly typeId?: any | null;
  value?: ILayoutKindDTO;
}

/** @format int32 */
export enum ITypeAttributesDTO {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
  Value8 = 8,
  Value16 = 16,
  Value24 = 24,
  Value32 = 32,
  Value128 = 128,
  Value256 = 256,
  Value1024 = 1024,
  Value2048 = 2048,
  Value4096 = 4096,
  Value8192 = 8192,
  Value16384 = 16384,
  Value65536 = 65536,
  Value131072 = 131072,
  Value196608 = 196608,
  Value262144 = 262144,
  Value264192 = 264192,
  Value1048576 = 1048576,
  Value12582912 = 12582912,
}

export interface ITypeDTO {
  assembly?: IAssemblyDTO;
  readonly assemblyQualifiedName?: string | null;
  attributes?: ITypeAttributesDTO;
  baseType?: ITypeDTO;
  readonly containsGenericParameters?: boolean;
  readonly customAttributes?: ICustomAttributeDataDTO[] | null;
  declaringMethod?: IMethodBaseDTO;
  declaringType?: ITypeDTO;
  readonly fullName?: string | null;
  genericParameterAttributes?: IGenericParameterAttributesDTO;
  /** @format int32 */
  readonly genericParameterPosition?: number;
  readonly genericTypeArguments?: ITypeDTO[] | null;
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
  readonly name?: string | null;
  readonly namespace?: string | null;
  reflectedType?: ITypeDTO;
  structLayoutAttribute?: IStructLayoutAttributeDTO;
  typeHandle?: IRuntimeTypeHandleDTO;
  typeInitializer?: IConstructorInfoDTO;
  underlyingSystemType?: ITypeDTO;
}

export interface ITypeInfoDTO {
  assembly?: IAssemblyDTO;
  readonly assemblyQualifiedName?: string | null;
  attributes?: ITypeAttributesDTO;
  baseType?: ITypeDTO;
  readonly containsGenericParameters?: boolean;
  readonly customAttributes?: ICustomAttributeDataDTO[] | null;
  readonly declaredConstructors?: IConstructorInfoDTO[] | null;
  readonly declaredEvents?: IEventInfoDTO[] | null;
  readonly declaredFields?: IFieldInfoDTO[] | null;
  readonly declaredMembers?: IMemberInfoDTO[] | null;
  readonly declaredMethods?: IMethodInfoDTO[] | null;
  readonly declaredNestedTypes?: ITypeInfoDTO[] | null;
  readonly declaredProperties?: IPropertyInfoDTO[] | null;
  declaringMethod?: IMethodBaseDTO;
  declaringType?: ITypeDTO;
  readonly fullName?: string | null;
  genericParameterAttributes?: IGenericParameterAttributesDTO;
  /** @format int32 */
  readonly genericParameterPosition?: number;
  readonly genericTypeArguments?: ITypeDTO[] | null;
  readonly genericTypeParameters?: ITypeDTO[] | null;
  /** @format uuid */
  readonly guid?: string;
  readonly hasElementType?: boolean;
  readonly implementedInterfaces?: ITypeDTO[] | null;
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
  readonly name?: string | null;
  readonly namespace?: string | null;
  reflectedType?: ITypeDTO;
  structLayoutAttribute?: IStructLayoutAttributeDTO;
  typeHandle?: IRuntimeTypeHandleDTO;
  typeInitializer?: IConstructorInfoDTO;
  underlyingSystemType?: ITypeDTO;
}

export interface IUserRoleRequestDtoDTO {
  /**
   * @minLength 1
   * @maxLength 256
   */
  roleName: string;
  /**
   * @minLength 1
   * @maxLength 256
   */
  username: string;
}

export type IV1AuthAddPolicyCreateDataDTO = any;

export interface IV1AuthAddPolicyCreateParamsDTO {
  version: string;
}

export type IV1AuthIsAuthorizedListDataDTO = any;

export interface IV1AuthIsAuthorizedListParamsDTO {
  policyName?: string;
  userId?: string;
  version: string;
}

export type IV1AuthIsInRoleListDataDTO = any;

export interface IV1AuthIsInRoleListParamsDTO {
  roleName?: string;
  userId?: string;
  version: string;
}

export type IV1AuthLoginCreateDataDTO = any;

export interface IV1AuthLoginCreateParamsDTO {
  version: string;
}

export type IV1AuthRefreshTokenCreateDataDTO = any;

export interface IV1AuthRefreshTokenCreateParamsDTO {
  version: string;
}

export type IV1AuthValidateTokenCreateDataDTO = any;

export interface IV1AuthValidateTokenCreateParamsDTO {
  version: string;
}

export type IV1ProjectsCreateCreateDataDTO = any;

export interface IV1ProjectsCreateCreateParamsDTO {
  version: string;
}

export type IV1ProjectsGetByFileNumberListDataDTO = any;

export interface IV1ProjectsGetByFileNumberListParamsDTO {
  id?: string;
  version: string;
}

export type IV1SampleCreateUserCreateDataDTO = any;

export interface IV1SampleCreateUserCreateParamsDTO {
  version: string;
}

export type IV1SampleGetCaptchaListDataDTO = any;

export interface IV1SampleGetCaptchaListParamsDTO {
  version: string;
}

export type IV1UsersCreateUserCreateDataDTO = any;

export interface IV1UsersCreateUserCreateParamsDTO {
  version: string;
}

export type IV1UsersFirstInitiateListDataDTO = any;

export interface IV1UsersFirstInitiateListParamsDTO {
  version: string;
}

export type IV1UsersGetAllUsersListDataDTO = any;

export interface IV1UsersGetAllUsersListParamsDTO {
  version: string;
}

export type IV1UsersGetUserClaimsListDataDTO = any;

export interface IV1UsersGetUserClaimsListParamsDTO {
  /**
   * @minLength 1
   * @maxLength 256
   */
  Username: string;
  version: string;
}

export type IV1UsersGetUserPermissionsListDataDTO = any;

export interface IV1UsersGetUserPermissionsListParamsDTO {
  Username?: string;
  version: string;
}

export type IV1UsersGetUserRolesListDataDTO = any;

export interface IV1UsersGetUserRolesListParamsDTO {
  Username?: string;
  version: string;
}

export type IV1UsersIsUserInRoleListDataDTO = any;

export interface IV1UsersIsUserInRoleListParamsDTO {
  /**
   * @minLength 1
   * @maxLength 256
   */
  RoleName: string;
  /**
   * @minLength 1
   * @maxLength 256
   */
  Username: string;
  version: string;
}

export interface IValidateTokenRequestDTO {
  token?: string | null;
}
