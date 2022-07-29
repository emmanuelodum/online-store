import { StyledButton } from '../styles';

function Button({ quantity, handleCart, id }) {
    return (
        <StyledButton>
            {quantity === 0 ? (
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        handleCart(id);
                    }}
                >
                    + Add to cart
                </button>
            ) : (
                <div>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            handleCart(id, false);
                        }}
                    >
                        -
                    </button>
                    <span>{quantity}</span>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            handleCart(id);
                        }}
                    >
                        +
                    </button>
                </div>
            )}
        </StyledButton>
    );
}

export default Button;