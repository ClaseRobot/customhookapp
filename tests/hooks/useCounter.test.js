import { renderHook, act } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'


describe('prueba sobre useCounter', () => {
  test('debe retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter())
    const { counter, increment, decrement, reset } = result.current
    expect(counter).toBe(10)
    expect(typeof increment).toBe('function')
    expect(typeof decrement).toBe('function')
    expect(typeof reset).toBe('function')
  })
})

test('debe generar el counter con el valor de 100', () => {
  const { result } = renderHook(() => useCounter(100))
  const { counter, increment } = result.current
  act(() => {
    increment(2)
  })
  expect(result.current.counter).toBe(100)
})