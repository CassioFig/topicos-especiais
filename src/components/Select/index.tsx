import { TField } from "../../types";
import './style.css';

type Props = {
    label: string;
    name: string;
    options: TField[];
    defaultValue?: string;
}
const Select = ({ label, name, options, defaultValue }: Props) => {
    return (
        <div className="select-component">
            <label htmlFor={name}><h2>{ label }</h2></label>
            <select id={`select-${name}`} name={name}>
                <option value="">{ defaultValue ? defaultValue : 'Selecione uma opção...' }</option>
                { 
                    options.map((option, index) => (
                        <option key={index} value={option.value}>{ option.text }</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Select;