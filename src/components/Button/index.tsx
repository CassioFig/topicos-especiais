import './style.css'

type Props = {
    type: 'button' | 'submit' | 'reset';
    children: string;
    className?: string;
}
const Button = ({ children, className, type }: Props) => {
    return (
        <button
            type={type}
            className={'button-component ' + className}
            role='button'
        >
            { children }
        </button>
    )
}

export default Button;