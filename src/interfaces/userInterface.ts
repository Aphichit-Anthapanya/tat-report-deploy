export interface IUserLogin {
  username: string;
  password: string;
}

// user data from active directory
export interface IAdUser {
  dn: string;
  distinguishedName: string;
  userPrincipalName: string;
  sAMAccountName: string;
  mail: string;
  whenCreated: string;
  pwdLastSet: string;
  userAccountControl: string;
  sn: string;
  givenName: string;
  initials: string;
  cn: string;
  displayName: string;
  description: string;
}

// user data from database
export interface IDbUser {
  userId: string;
  username: string;
  nameTh: string;
  surnameTh: string;
  nameEn: string;
  surnameEn: string;
  status: string;
  credit: number;
  userType: any;
  deptGov: any;
  email: string;
  provinceId: any;
  mobileNo: any;
  contactName: any;
  userDepId: any;
  depId: string;
  depName: string;
  subDepId: any;
  subDepName: any;
  positionId: any;
  positionName: any;
  processStatus: string;
  permission: string;
  isDelete: string;
  recordStatus: string;
  createdBy: string;
  createdDate: any;
  updatedBy: string;
  updatedDate: any;
}

export interface IUserProfile {
  dbUser: IDbUser;
  adUser?: IAdUser;
}

export interface ILoginRes {
  message: string;
  accessToken: string;
}

export interface IAuthState {
  accessToken?: string;
}
