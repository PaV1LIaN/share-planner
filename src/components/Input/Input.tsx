import './Input.css'
import type { InputProp } from './InputProps'

function Input({ placeholder, height, width, value, onChange }: InputProp) {

    return (
        <>
            <input
                className="pixel-ruins-input"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{height: height, width: width}}
            />
        </>
    )
}

export default Input
