import Header from "./components/Header";
import Input from "./components/Input";
import Preview from "./components/Preview";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="container">
			<Header title="Markdown Previewer" />
			<div className="grid">
				<Input />
				<Preview />
			</div>
			<Footer />
		</div>
	);
}

export default App;
