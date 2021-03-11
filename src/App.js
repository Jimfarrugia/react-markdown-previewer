import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Preview from "./components/Preview";
import Footer from "./components/Footer";
import marked from "marked";
import initialContent from "./initialContent";

function App() {
	const [content, setContent] = useState(initialContent);

	return (
		<div className="container">
			<Header title="Markdown Previewer" />
			<div className="grid">
				<Input content={content} setContent={setContent} />
				<Preview content={marked(content)} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
