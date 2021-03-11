import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Preview from "./components/Preview";
import Footer from "./components/Footer";
import marked from "marked";

const initialContent =
	"# Lorem ipsum dolor sit amet \nconsectetur adipiscing elit. Integer convallis quis est et mollis. Suspendisse potenti. Sed malesuada vehicula rutrum. Curabitur hendrerit odio nec vulputate porta. Aliquam vitae nunc vel felis feugiat vulputate ac in ante. Proin faucibus libero et tempus viverra. Pellentesque et lectus pharetra, dictum justo sed, euismod nulla.";

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
