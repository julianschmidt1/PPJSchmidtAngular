export interface UserModel {
    username: string,
    password: string,
    role: RoleModel
}

export enum RoleModel {
    Administrator = 1,
    User = 2,
}