import React from "react";

const Preview = ({ content }) => {
	return (
		<div
			id="preview"
			className="preview"
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
};

export default Preview;
