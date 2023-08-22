import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
		function escapeFunction(e) {
			if (e.key === "Escape") {
				callback(e)
			}
		}

		window.addEventListener("keydown", escapeFunction);
		return () => window.removeEventListener("keydown", escapeFunction);
	}, [callback]);
}

export default useEscapeKey;
