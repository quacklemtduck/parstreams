import { add } from '../src'

test('add two numbers', () => {
    const result = add(2, 3)
    expect(result).toBe(5)
})
