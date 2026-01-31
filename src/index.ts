type ConditionValuePair<T> = {
  condition: boolean;
  value: T;
};

/**
 * 根据条件列表返回第一个满足条件的值，若无匹配则返回 fallback。
 *
 * @example
 * const result = matchFirst([
 *   { condition: isHotfix, value: `gfl hotfix ${id}` },
 *   { condition: taskType === 'bug', value: `gfl bugfix ${id}` }
 * ], `gfl start ${id}`);
 */
export function matchFirst<T>(cases: ConditionValuePair<T>[], fallback: T): T {
  for (const { condition, value } of cases) {
    if (condition) {
      return value;
    }
  }
  return fallback;
}
