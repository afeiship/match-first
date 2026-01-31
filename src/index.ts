/**
 * A condition-value pair used for pattern matching.
 * AI: https://chat.qwen.ai/c/0bd59e31-a69c-4543-912c-8bd1ec61af9f
 * @template T - The type of the value to be returned if the condition is true
 */
export type ConditionValuePair<T> = {
  /** The condition to evaluate. If true, the associated value is returned. */
  condition: boolean;
  /** The value to return when the condition is true. */
  value: T;
};

/**
 * Returns the first value whose condition evaluates to true.
 *
 * This function iterates through an array of condition-value pairs and returns
 * the value of the first pair where the condition is true. If no conditions
 * are met, the fallback value is returned.
 *
 * @template T - The type of values being matched
 * @param cases - An array of condition-value pairs to evaluate in order
 * @param fallback - The value to return if no conditions match
 * @returns The first matching value, or the fallback if none match
 *
 * @example
 * ```ts
 * import matchFirst from '@jswork/match-first';
 *
 * const isHotfix = true;
 * const taskType = 'bug';
 * const id = '123';
 *
 * const result = matchFirst(
 *   [
 *     { condition: isHotfix, value: `hotfix ${id}` },
 *     { condition: taskType === 'bug', value: `bugfix ${id}` }
 *   ],
 *   `start ${id}`
 * );
 *
 * console.log(result); // "hotfix 123"
 * ```
 *
 * @example
 * ```ts
 * import matchFirst from '@jswork/match-first';
 *
 * // Conditional branching with fallback
 * const size = matchFirst(
 *   [
 *     { condition: x > 10, value: 'large' },
 *     { condition: x > 5, value: 'medium' }
 *   ],
 *   'small'
 * );
 *
 * console.log(size); // "small" when x <= 5
 * ```
 *
 * @example
 * ```ts
 * import matchFirst from '@jswork/match-first';
 *
 * // Works with any type
 * const config = matchFirst(
 *   [
 *     { condition: env === 'prod', value: { apiUrl: 'https://api.prod.com' } },
 *     { condition: env === 'staging', value: { apiUrl: 'https://api.staging.com' } }
 *   ],
 *   { apiUrl: 'http://localhost:3000' }
 * );
 * ```
 */
export default function matchFirst<T>(cases: ConditionValuePair<T>[], fallback: T): T {
  for (const { condition, value } of cases) {
    if (condition) {
      return value;
    }
  }
  return fallback;
}
