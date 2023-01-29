import { describe, expect, test } from 'vitest'

import model_test_component from "./model_test_component.jsx"


describe('suite name', () => {

  
  test('first definition', () => {
    
    const {main, data} = model_test_component()

    expect(main.value).toBe("sample text")

  })
  
  test('value to input', () => {

    const {main, data} = model_test_component()

    
    data.text = "new text"
    expect(main.value).toBe("new text")

  })

  test('input to value', () => {

    const {main, data} = model_test_component()

    main.value = "new text"
    main.__element.dispatchEvent(new Event("input", { bubbles: true }));
    expect(data.text).toBe("new text")

  })
})