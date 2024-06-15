export enum RolesEnum {
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",
    EMPLOYER = "EMPLOYER",
    VIEWER = "VIEWER",
    MANAGER = "MANAGER",
}

/** Default system role */
export const SYSTEM_DEFAULT_ROLES = [
	RolesEnum.SUPER_ADMIN,
	RolesEnum.ADMIN,
	RolesEnum.VIEWER,
    RolesEnum.MANAGER
];