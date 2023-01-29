import { describe, expect, test } from 'vitest'

import class_test_component from "./class_test_component.jsx"


describe('suite name', () => {

  
  test('first definition', () => {

    const {main, data} = class_test_component()
    expect(main.classList[0]).toBe("my-class")

  })
  
  test('edit the definition', () => {

    const {main, data} = class_test_component()
    
    data.text = "new-class"
    expect(main.classList[0]).toBe("new-class")

  })
})