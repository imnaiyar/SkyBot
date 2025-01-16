import { PermissionFlagsBits } from "@discordjs/core";
type PermissionFlags = keyof typeof PermissionFlagsBits;
type StringPermissions = string;

export type PermissionsResolvable =
  | bigint
  | PermissionFlags
  | StringPermissions
  | StringPermissions[]
  | bigint[]
  | PermissionFlags[];

export class PermissionsUtil {
  bitfield: bigint;
  flags: (keyof typeof PermissionFlagsBits)[];
  constructor(readonly perms: PermissionsResolvable) {
    this.bitfield = this.resolveBits(perms);
    this.flags = this.resolveFlags(this.bitfield);
  }

  /**
   * Resolves given permission resolvable to bitfield
   *
   * @returns Returns the resolved bitfield
   */
  resolveBits(perms: PermissionsResolvable): bigint {
    if (typeof perms === "bigint" && perms > 0n) return perms;
    if (Array.isArray(perms)) {
      return perms.map(this.resolveBits).reduce((acc, bit) => acc | bit, 0n);
    }
    if (typeof perms === "string") {
      if (!Number.isNaN(perms)) return BigInt(perms);
      if (PermissionFlagsBits[perms as PermissionFlags] !== undefined) {
        return PermissionFlagsBits[perms as PermissionFlags];
      }
    }
    throw new Error("Recieved Unknown Permissions");
  }

  /**
   *
   * @returns Returns string representation of the permissions
   */
  resolveFlags(bits: bigint): PermissionFlags[] {
    const flags: PermissionFlags[] = [];
    for (const [key, value] of Object.entries(PermissionFlagsBits)) {
      if (bits & value) flags.push(key as PermissionFlags);
    }
    return flags;
  }

  /**
   * Check if it contains the given permissions
   *
   */
  has(perms: PermissionsResolvable) {
    const bits = this.resolveBits(perms);
    return (this.bitfield & bits) === bits;
  }

  /**
   * Returns permissions flags of this bitfield
   */
  toArray() {
    return this.flags;
  }
}
