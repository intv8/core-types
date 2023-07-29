/**
 * Test fixtures for the VolumeKeyCode enum.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { VolumeKeyCode } from '../../mod.ts';

export const forwardValidity = [
  [VolumeKeyCode.Mute, 173],
  [VolumeKeyCode.Down, 174],
  [VolumeKeyCode.Up, 175],
] as const;

export const reverseValidity = [
  [VolumeKeyCode[VolumeKeyCode.Mute], 'Mute'],
  [VolumeKeyCode[VolumeKeyCode.Down], 'Down'],
  [VolumeKeyCode[VolumeKeyCode.Up], 'Up'],
] as const;
