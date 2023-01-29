import { describe, expect, test } from 'vitest'

import state_test_component from "./state_test_component.jsx"


describe('suite name', () => {

  
  test('first definition', () => {

    const {main, data} = state_test_component()
    
    expect(main.textContent).toBe("sample text")

  })
  
  test('edit the definition', () => {

    const {main, data} = state_test_component()
    
    data.text = "new text"
    expect(main.textContent).toBe("new text")

  })
})