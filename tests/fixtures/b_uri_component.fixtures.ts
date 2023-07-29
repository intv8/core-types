/**
 * Test fixtures for the bUriComponent enum.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { bUriComponent } from '../../mod.ts';

export const forwardValidity = [
  [bUriComponent.Scheme, 1],
  [bUriComponent.UserInfo, 2],
  [bUriComponent.Host, 4],
  [bUriComponent.Port, 8],
  [bUriComponent.Path, 16],
  [bUriComponent.Query, 32],
  [bUriComponent.Fragment, 64],
  [bUriComponent.Absolute, 127],
  [bUriComponent.Service, 13],
  [bUriComponent.PathQuery, 48],
] as const;

export const reverseValidity = [
  [bUriComponent[bUriComponent.Scheme], 'Scheme'],
  [bUriComponent[bUriComponent.UserInfo], 'UserInfo'],
  [bUriComponent[bUriComponent.Host], 'Host'],
  [bUriComponent[bUriComponent.Port], 'Port'],
  [bUriComponent[bUriComponent.Path], 'Path'],
  [bUriComponent[bUriComponent.Query], 'Query'],
  [bUriComponent[bUriComponent.Fragment], 'Fragment'],
  [bUriComponent[bUriComponent.Absolute], 'Absolute'],
  [bUriComponent[bUriComponent.Service], 'Service'],
  [bUriComponent[bUriComponent.PathQuery], 'PathQuery'],
] as const;

export const oredValueValidity = [
  [
    bUriComponent.Scheme | bUriComponent.UserInfo | bUriComponent.Host |
    bUriComponent.Port | bUriComponent.Path | bUriComponent.Query |
    bUriComponent.Fragment,
    bUriComponent.Absolute,
  ],
  [
    bUriComponent.Scheme | bUriComponent.Host | bUriComponent.Port,
    bUriComponent.Service,
  ],
  [bUriComponent.Path | bUriComponent.Query, bUriComponent.PathQuery],
] as const;

export const andChecks = [
  [bUriComponent.Service, bUriComponent.Scheme, true],
  [bUriComponent.Service, bUriComponent.UserInfo, false],
  [bUriComponent.Service, bUriComponent.Host, true],
  [bUriComponent.Service, bUriComponent.Port, true],
  [bUriComponent.Service, bUriComponent.Path, false],
  [bUriComponent.Service, bUriComponent.Query, false],
  [bUriComponent.Service, bUriComponent.Fragment, false],
  [bUriComponent.Service, bUriComponent.Absolute, true],
  [bUriComponent.Service, bUriComponent.Service, true],
  [bUriComponent.Service, bUriComponent.PathQuery, false],
  [bUriComponent.PathQuery, bUriComponent.Scheme, false],
  [bUriComponent.PathQuery, bUriComponent.UserInfo, false],
  [bUriComponent.PathQuery, bUriComponent.Host, false],
  [bUriComponent.PathQuery, bUriComponent.Port, false],
  [bUriComponent.PathQuery, bUriComponent.Path, true],
  [bUriComponent.PathQuery, bUriComponent.Query, true],
  [bUriComponent.PathQuery, bUriComponent.Fragment, false],
  [bUriComponent.PathQuery, bUriComponent.Absolute, true],
  [bUriComponent.PathQuery, bUriComponent.Service, false],
  [bUriComponent.PathQuery, bUriComponent.PathQuery, true],
  [bUriComponent.Absolute, bUriComponent.Scheme, true],
  [bUriComponent.Absolute, bUriComponent.UserInfo, true],
  [bUriComponent.Absolute, bUriComponent.Host, true],
  [bUriComponent.Absolute, bUriComponent.Port, true],
  [bUriComponent.Absolute, bUriComponent.Path, true],
  [bUriComponent.Absolute, bUriComponent.Query, true],
  [bUriComponent.Absolute, bUriComponent.Fragment, true],
  [bUriComponent.Absolute, bUriComponent.Absolute, true],
  [bUriComponent.Absolute, bUriComponent.Service, true],
  [bUriComponent.Absolute, bUriComponent.PathQuery, true],
] as const;

export const orChecks = [
  [bUriComponent.Service, bUriComponent.Scheme, true],
  [bUriComponent.Service, bUriComponent.UserInfo, false],
  [bUriComponent.Service, bUriComponent.Host, true],
  [bUriComponent.Service, bUriComponent.Port, true],
  [bUriComponent.Service, bUriComponent.Path, false],
  [bUriComponent.Service, bUriComponent.Query, false],
  [bUriComponent.Service, bUriComponent.Fragment, false],
  [bUriComponent.Service, bUriComponent.Absolute, false],
  [bUriComponent.Service, bUriComponent.Service, true],
  [bUriComponent.Service, bUriComponent.PathQuery, false],
  [bUriComponent.PathQuery, bUriComponent.Scheme, false],
  [bUriComponent.PathQuery, bUriComponent.UserInfo, false],
  [bUriComponent.PathQuery, bUriComponent.Host, false],
  [bUriComponent.PathQuery, bUriComponent.Port, false],
  [bUriComponent.PathQuery, bUriComponent.Path, true],
  [bUriComponent.PathQuery, bUriComponent.Query, true],
  [bUriComponent.PathQuery, bUriComponent.Fragment, false],
  [bUriComponent.PathQuery, bUriComponent.Absolute, false],
  [bUriComponent.PathQuery, bUriComponent.Service, false],
  [bUriComponent.PathQuery, bUriComponent.PathQuery, true],
  [bUriComponent.Absolute, bUriComponent.Scheme, true],
  [bUriComponent.Absolute, bUriComponent.UserInfo, true],
  [bUriComponent.Absolute, bUriComponent.Host, true],
  [bUriComponent.Absolute, bUriComponent.Port, true],
  [bUriComponent.Absolute, bUriComponent.Path, true],
  [bUriComponent.Absolute, bUriComponent.Query, true],
  [bUriComponent.Absolute, bUriComponent.Fragment, true],
  [bUriComponent.Absolute, bUriComponent.Absolute, true],
  [bUriComponent.Absolute, bUriComponent.Service, true],
  [bUriComponent.Absolute, bUriComponent.PathQuery, true],
  [
    bUriComponent.Scheme | bUriComponent.Host | bUriComponent.Port,
    bUriComponent.Scheme | bUriComponent.Port,
    true,
  ],
  [
    bUriComponent.Scheme | bUriComponent.Host | bUriComponent.Port,
    bUriComponent.Scheme | bUriComponent.Path,
    false,
  ],
] as const;
