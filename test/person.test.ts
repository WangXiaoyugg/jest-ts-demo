import { Person } from '../src/person'
test('test person', () => {
    const person = new Person('garen', 100)
    expect(person).toBeInstanceOf(Person)
    expect(person).not.toEqual({
        name: 'bob'
    })
})