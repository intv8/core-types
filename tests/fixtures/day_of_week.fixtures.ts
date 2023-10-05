/**
 * Test fixtures for the DayOfWeek enum.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { DayOfWeek } from '../../mod.ts';

export const forwardValidity = [
  [DayOfWeek.Sunday, 0],
  [DayOfWeek.Monday, 1],
  [DayOfWeek.Tuesday, 2],
  [DayOfWeek.Wednesday, 3],
  [DayOfWeek.Thursday, 4],
  [DayOfWeek.Friday, 5],
  [DayOfWeek.Saturday, 6],
] as const;

export const reverseValidity = [
  [DayOfWeek[DayOfWeek.Sunday], 'Sunday'],
  [DayOfWeek[DayOfWeek.Monday], 'Monday'],
  [DayOfWeek[DayOfWeek.Tuesday], 'Tuesday'],
  [DayOfWeek[DayOfWeek.Wednesday], 'Wednesday'],
  [DayOfWeek[DayOfWeek.Thursday], 'Thursday'],
  [DayOfWeek[DayOfWeek.Friday], 'Friday'],
  [DayOfWeek[DayOfWeek.Saturday], 'Saturday'],
] as const;
