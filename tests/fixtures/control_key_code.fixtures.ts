/**
 * Test fixtures for the ControlKeyCode enum.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { ControlKeyCode } from '../../mod.ts';

export const forwardValidity = [
  [ControlKeyCode.CapsLock, 20],
  [ControlKeyCode.Escape, 27],
  [ControlKeyCode.ScrollLock, 145],
  [ControlKeyCode.NumLock, 144],
  [ControlKeyCode.PrintScreen, 44],
  [ControlKeyCode.Pause, 19],
  [ControlKeyCode.Insert, 45],
  [ControlKeyCode.Control, 17],
  [ControlKeyCode.Alt, 18],
  [ControlKeyCode.Shift, 16],
  [ControlKeyCode.ContextMenu, 93],
  [ControlKeyCode.Meta, 91],
  [ControlKeyCode.Cancel, 3],
] as const;

export const reverseValidity = [
  [ControlKeyCode[ControlKeyCode.CapsLock], 'CapsLock'],
  [ControlKeyCode[ControlKeyCode.Escape], 'Escape'],
  [ControlKeyCode[ControlKeyCode.ScrollLock], 'ScrollLock'],
  [ControlKeyCode[ControlKeyCode.NumLock], 'NumLock'],
  [ControlKeyCode[ControlKeyCode.PrintScreen], 'PrintScreen'],
  [ControlKeyCode[ControlKeyCode.Pause], 'Pause'],
  [ControlKeyCode[ControlKeyCode.Insert], 'Insert'],
  [ControlKeyCode[ControlKeyCode.Control], 'Control'],
  [ControlKeyCode[ControlKeyCode.Alt], 'Alt'],
  [ControlKeyCode[ControlKeyCode.Shift], 'Shift'],
  [ControlKeyCode[ControlKeyCode.ContextMenu], 'ContextMenu'],
  [ControlKeyCode[ControlKeyCode.Meta], 'Meta'],
  [ControlKeyCode[ControlKeyCode.Cancel], 'Cancel'],
] as const;
