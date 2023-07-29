/**
 * This file exports the bUriComponent enum.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

/** Specifies the bitwise components of a URI. */
export enum bUriComponent {
  /** Bitwise scheme. */
  Scheme = 1,

  /** Bitwise user info. */
  UserInfo = 2,

  /** Bitwise host. */
  Host = 4,

  /** Bitwise port. */
  Port = 8,

  /** Bitwise path. */
  Path = 16,

  /** Bitwise query. */
  Query = 32,

  /** Bitwise fragment. */
  Fragment = 64,

  /** Bitwise absolute path. `Scheme`, `UserInfo`, `Host`, `Port`, `Path`, `Query`, and `Fragment`. */
  Absolute = 127,

  /** Bitwise service path. `Scheme`, `Host`, and `Port`. */
  Service = 13,

  /** Identifies a path query URI. */
  PathQuery = 48,
}
