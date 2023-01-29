

export default function state_test_component()
{

    const data = state({ text: "sample text" })
    
    const main =
    <div>
        {data.text}
    </div>

    return {main, data}
}

