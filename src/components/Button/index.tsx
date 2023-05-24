import './style.css'

type Props = {
    type: 'button' | 'submit' | 'reset';
    children: string;
    className?: string;
    onClick?: () => void;
}
const Button = ({ children, className, type, onClick }: Props) => {
    return (
        <button
            type={type}
            className={'button-component ' + className}
            role='button'
            onClick={onClick}
        >
            { children }
        </button>
    )
}

export default Button;