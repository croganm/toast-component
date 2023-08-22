import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
	const { toastArray, removeToast } =
		React.useContext(ToastContext);


	return (
		<ol
			className={styles.wrapper}
			role="region"
			aria-live="polite"
			aria-label="Notification"
		>
			{toastArray.map((toast) => (
				<li key={toast.id} className={styles.toastWrapper}>
					<Toast
						variant={toast.variant}
						removeToast={removeToast}
						id={toast.id}
					>
						{toast.message}
					</Toast>
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
