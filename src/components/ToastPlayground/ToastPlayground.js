import React from "react";

import { guidGenerator } from "../../utils";

import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function onChangeValue(event, setter) {
	setter(event.target.value);
}

function ToastPlayground() {
	const [variant, setVariant] = React.useState("notice");
	const [message, setMessage] = React.useState("");
	const [toastArray, setToastArray] = React.useState([
		{
			id: guidGenerator(),
			variant: "notice",
			message: "This is a notice toast!",
		},
		{
			id: guidGenerator(),

			variant: "warning",
			message: "This is a warning toast!",
		},
	]);

	function addToast(event) {
		event.preventDefault();
    if(toastArray.length === 3) {
      removeToast(toastArray[0].id);
    }
		// TODO Add toast to array here
		const id = guidGenerator();
		setToastArray((prev) => [...prev, { id, variant, message }]);
		setMessage("");
	}

	function removeToast(id) {
		// TODO Remove toast from array here
		setToastArray((prev) => prev.filter((toast) => toast.id !== id));
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf toastArray={toastArray} removeToast={removeToast} />

			<form onSubmit={(e) => addToast(e)} className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{ alignSelf: "baseline" }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id="message"
							className={styles.messageInput}
							value={message}
							onChange={(e) => onChangeValue(e, setMessage)}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div
						className={`${styles.inputWrapper} ${styles.radioWrapper}`}
						onChange={(e) => onChangeValue(e, setVariant)}
					>
						{VARIANT_OPTIONS.map((i) => (
							<label
								htmlFor={`variant-${i}`}
								key={`variant-${i}`}
							>
								<input
									id={`variant-${i}`}
									type="radio"
									name="variant"
									value={`${i}`}
									defaultChecked={variant === i}
								/>
								{i}
							</label>
						))}

						{/* TODO Other Variant radio buttons here */}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div
						className={`${styles.inputWrapper} ${styles.radioWrapper}`}
					>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
