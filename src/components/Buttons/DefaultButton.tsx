import './DefaultButton.css'
import type { DefaultButtonProp } from './DefaultButtonProp'

function DefaultButton({content, height, width, onClick, disabled}: DefaultButtonProp) {

    return (
        <>
            <button style={{ height: height, width: width }}
                onClick={onClick}
                disabled={disabled}
                className='pixel-ruins-btn'>
                {content}
            </button>
        </>
    )
}

export default DefaultButton
