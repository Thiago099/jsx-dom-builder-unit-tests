

export default function model_test_component()
{

    const data = state({ text: "sample text" })
    
    const main =
    <input type="text" model={data.text} />

    return {main, data}
}

