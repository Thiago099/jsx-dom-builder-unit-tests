

export default function class_test_component()
{

    const data = state({ text: "my-class" })
    
    const main = <div class={data.text}></div>

    return {main, data}
}

