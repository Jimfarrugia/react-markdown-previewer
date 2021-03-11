import Header from "./components/Header";
import Input from "./components/Input";
import Preview from "./components/Preview";
import Footer from "./components/Footer";

function App() {
	return (
		<div class="container">
			<Header title="Markdown Previewer" />
			<div class="grid">
				<Input />
				<Preview />
			</div>
			<Footer />
		</div>
	);
}

export default App;
