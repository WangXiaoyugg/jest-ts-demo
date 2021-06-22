import { myForEach } from "../src/myForEach";

test('should call two', () => {
    const mockCallback = jest.fn()
    myForEach([0,1], mockCallback)
    expect(mockCallback.mock.calls.length).toBe(2)
    expect(mockCallback.mock.calls[0][0]).toBe(0)
    expect(mockCallback.mock.calls[1][0]).toBe(1)
})