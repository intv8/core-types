/**
 * Test fixtures for the NavigationKeyCode enum.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { NavigationKeyCode } from '../../mod.ts';

export const forwardValidity = [
  [NavigationKeyCode.ArrowLeft, 37],
  [NavigationKeyCode.ArrowUp, 38],
  [NavigationKeyCode.ArrowRight, 39],
  [NavigationKeyCode.ArrowDown, 40],
  [NavigationKeyCode.Home, 36],
  [NavigationKeyCode.End, 35],
  [NavigationKeyCode.PageUp, 33],
  [NavigationKeyCode.PageDown, 34],
] as const;

export const reverseValidity = [
  [NavigationKeyCode[NavigationKeyCode.ArrowLeft], 'ArrowLeft'],
  [NavigationKeyCode[NavigationKeyCode.ArrowUp], 'ArrowUp'],
  [NavigationKeyCode[NavigationKeyCode.ArrowRight], 'ArrowRight'],
  [NavigationKeyCode[NavigationKeyCode.ArrowDown], 'ArrowDown'],
  [NavigationKeyCode[NavigationKeyCode.Home], 'Home'],
  [NavigationKeyCode[NavigationKeyCode.End], 'End'],
  [NavigationKeyCode[NavigationKeyCode.PageUp], 'PageUp'],
  [NavigationKeyCode[NavigationKeyCode.PageDown], 'PageDown'],
] as const;
