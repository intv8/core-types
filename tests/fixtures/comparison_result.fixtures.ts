/**
 * Test fixtures for the ComparisonResult enum.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { ComparisonResult } from '../../mod.ts';

export const forwardValidity = [
  [ComparisonResult.Equal, 0],
  [ComparisonResult.Greater, 1],
  [ComparisonResult.Lesser, -1],
] as const;

export const reverseValidity = [
  [ComparisonResult[ComparisonResult.Equal], 'Equal'],
  [ComparisonResult[ComparisonResult.Greater], 'Greater'],
  [ComparisonResult[ComparisonResult.Lesser], 'Lesser'],
] as const;
