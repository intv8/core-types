/**
 * Test fixtures for the MediaKeyCode enum.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { MediaKeyCode } from '../../mod.ts';

export const forwardValidity = [
  [MediaKeyCode.Stop, 178],
  [MediaKeyCode.PlayPause, 179],
  [MediaKeyCode.PreviousTrack, 177],
  [MediaKeyCode.NextTrack, 176],
] as const;

export const reverseValidity = [
  [MediaKeyCode[MediaKeyCode.Stop], 'Stop'],
  [MediaKeyCode[MediaKeyCode.PlayPause], 'PlayPause'],
  [MediaKeyCode[MediaKeyCode.PreviousTrack], 'PreviousTrack'],
  [MediaKeyCode[MediaKeyCode.NextTrack], 'NextTrack'],
] as const;
