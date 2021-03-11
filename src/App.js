function App() {
	return (
		<div class="container">
			<header>
				<h1>Markdown Previewer</h1>
			</header>
			<div class="grid">
				<div class="input">
					<textarea>
						## Preview your Markdown Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Integer convallis quis est et mollis. Suspendisse
						potenti. Sed malesuada vehicula rutrum. Curabitur hendrerit odio nec
						vulputate porta. Aliquam vitae nunc vel felis feugiat vulputate ac
						in ante. Proin faucibus libero et tempus viverra. Pellentesque et
						lectus pharetra, dictum justo sed, euismod nulla.
					</textarea>
				</div>
				<div class="preview">
					<h2>Preview your Markdown</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
						convallis quis est et mollis. Suspendisse potenti. Sed malesuada
						vehicula rutrum.
					</p>
					<p>
						Curabitur hendrerit odio nec vulputate porta. Aliquam vitae nunc vel
						felis feugiat vulputate ac in ante. Proin faucibus libero et tempus
						viverra. Pellentesque et lectus pharetra, dictum justo sed, euismod
						nulla.
					</p>
				</div>
			</div>
			<footer>
				<ul>
					<li>
						<a href="#">Markdown Reference</a>
					</li>
					<li>
						<a href="#">Source Code</a>
					</li>
					<li>
						<a href="#">Jim Farrugia</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}

export default App;
