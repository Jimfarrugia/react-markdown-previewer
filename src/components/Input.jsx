const Input = ({ content, setContent }) => {
	return (
		<div className="input">
			<textarea
				id="editor"
				value={content}
				onChange={e => setContent(e.target.value)}
			/>
		</div>
	);
};

export default Input;
