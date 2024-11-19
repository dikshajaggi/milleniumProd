import { addToCart, removeFromCart } from '../redux/cartSlice';
import { addingToCart, removingFromCart } from '../apis';

export const handleAddToCart = async (_id, dispatch, onLoginRequired) => {
    // First check if the user is logged in
    const token = localStorage.getItem("token")
    if (token) {
        dispatch(addToCart({ id: _id }));
        if (token) {
            await addingToCart(_id, { headers: { token } });
        }
    } else {
        if (onLoginRequired) onLoginRequired();
    }

};

export const handleQtyDec = async (_id, currentQty, dispatch) => {
    const token = localStorage.getItem("token")
    if (currentQty > 0) {
        dispatch(removeFromCart({ id: _id })); // Decrement quantity in the Redux state
        if (token) {
            await removingFromCart(_id, { headers: { token } }); // Sync with backend
        }
    }
};