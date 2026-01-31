import { matchFirst } from '../src';

describe('matchFirst', () => {
  describe('should return first matching value', () => {
    it('when first condition is true', () => {
      const result = matchFirst(
        [
          { condition: true, value: 'first' },
          { condition: true, value: 'second' },
          { condition: true, value: 'third' }
        ],
        'fallback'
      );
      expect(result).toBe('first');
    });

    it('when middle condition is true', () => {
      const result = matchFirst(
        [
          { condition: false, value: 'first' },
          { condition: true, value: 'second' },
          { condition: true, value: 'third' }
        ],
        'fallback'
      );
      expect(result).toBe('second');
    });

    it('when last condition is true', () => {
      const result = matchFirst(
        [
          { condition: false, value: 'first' },
          { condition: false, value: 'second' },
          { condition: true, value: 'third' }
        ],
        'fallback'
      );
      expect(result).toBe('third');
    });
  });

  describe('should return fallback', () => {
    it('when all conditions are false', () => {
      const result = matchFirst(
        [
          { condition: false, value: 'first' },
          { condition: false, value: 'second' },
          { condition: false, value: 'third' }
        ],
        'fallback'
      );
      expect(result).toBe('fallback');
    });

    it('when cases array is empty', () => {
      const result = matchFirst([], 'fallback');
      expect(result).toBe('fallback');
    });
  });

  describe('should work with different value types', () => {
    it('with string values', () => {
      const isHotfix = true;
      const taskType = 'bug';
      const id = '123';

      const result = matchFirst(
        [
          { condition: isHotfix, value: `gfl hotfix ${id}` },
          { condition: taskType === 'bug', value: `gfl bugfix ${id}` }
        ],
        `gfl start ${id}`
      );
      expect(result).toBe('gfl hotfix 123');
    });

    it('with number values', () => {
      const result = matchFirst(
        [
          { condition: 1 > 2, value: 100 },
          { condition: 5 === 5, value: 200 }
        ],
        300
      );
      expect(result).toBe(200);
    });

    it('with object values', () => {
      const obj1 = { name: 'Alice' };
      const obj2 = { name: 'Bob' };
      const fallback = { name: 'Default' };

      const result = matchFirst(
        [
          { condition: false, value: obj1 },
          { condition: true, value: obj2 }
        ],
        fallback
      );
      expect(result).toBe(obj2);
    });

    it('with null fallback', () => {
      const result = matchFirst(
        [
          { condition: false, value: 'value' }
        ],
        null
      );
      expect(result).toBeNull();
    });

    it('with undefined fallback', () => {
      const result = matchFirst(
        [
          { condition: false, value: 'value' }
        ],
        undefined
      );
      expect(result).toBeUndefined();
    });
  });

  describe('edge cases', () => {
    it('should work with complex boolean expressions', () => {
      const x = 5;
      let y = 10;

      const result = matchFirst(
        [
          { condition: x > 10 && y < 5, value: 'case1' },
          { condition: x === 5 || y > 100, value: 'case2' },
          { condition: x + y > 100, value: 'case3' }
        ],
        'default'
      );
      expect(result).toBe('case2');
    });

    it('should work with function call conditions', () => {
      let callCount = 0;
      const checkCondition = () => {
        callCount++;
        return true;
      };

      const result = matchFirst(
        [
          { condition: checkCondition(), value: 'first' },
          { condition: false, value: 'second' }
        ],
        'fallback'
      );
      expect(result).toBe('first');
      expect(callCount).toBe(1);
    });
  });
});
