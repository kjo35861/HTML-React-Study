import * as s from './styles';

function TextInput({ title, name, value, onChange, placeholder }) {

    return (
        <div>
            <label css={s.label}>
                <div>{title}</div>
                <input type="text" name={name} value={value} onChange={onChange} placeholder={placeholder} />
            </label>
        </div>
    )
}

export default TextInput;