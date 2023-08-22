import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function onChangeValue(event, setter) {
	setter(event.target.value);
}

function ToastPlayground() {
	const [variant, setVariant] = React.useState("notice");
	const [message, setMessage] = React.useState("");
	const { addToast } = React.useContext(ToastContext);

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf />

			<form
				onSubmit={(e) => addToast(e, message, variant, setMessage)}
				className={styles.controlsWrapper}
			>
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
