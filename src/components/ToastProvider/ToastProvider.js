import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toastArray, setToastArray] = React.useState([]);

	function addToast(event, message, variant, setMessage) {
		event.preventDefault();
		if (toastArray.length === 3) {
			removeToast(toastArray[0].id);
		}
		// TODO Add toast to array here
		const id = crypto.randomUUID();
		setToastArray((prev) => [...prev, { id, variant, message }]);
		setMessage("");
	}

	function removeToast(id) {
		// TODO Remove toast from array here
		if (toastArray.length === 0) return;
		setToastArray((prev) => prev.filter((toast) => toast.id !== id));
	}

	const handleEscape = React.useCallback(() => {
		setToastArray([]);
	}, []);

	useEscapeKey(handleEscape);

	return (
		<ToastContext.Provider
			value={{
				toastArray,
				addToast,
				removeToast,
			}}
		>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;
