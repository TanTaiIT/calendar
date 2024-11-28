export interface userInfoType {
  countryCode: string,
  isClientSearchInBranch: boolean,
  language: string,
  lastestLoginDate: string,
  shopId: number,
  solutionId: number,
  useAccountId: number,
  userID: string,
  userRoleCode: string,
  refreshToken: string,
  authToken: string
}

export interface chaniInfoType {
  allowShopProduct: boolean,
  allowShopService: boolean,
  branchNumber: number,
  branchType: number,
  chainId: number,
  shareClient: boolean,
  shareProduct: boolean,
  shareService: boolean
}

export interface shopInfoType {
  address1: string,
  businessTypeCode: string,
  businessTypeName: string,
  chainInfo: chaniInfoType,
  countryCode: string,
  expiryDateTS: number,
  isAllowedClientDownloadData: boolean,
  shopName: string,
  solutionId: number,
  timezone: number
}

export interface userLoginPayload {
  userId: string,
  password: string,
  solutionId: number

}
