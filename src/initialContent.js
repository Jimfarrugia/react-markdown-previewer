const h1 = "# Heading 1";
const h2 = "## Heading 2";
const link = "[Link](https://www.markdownguide.org/)";
const inlineCode = "This `piece of code` is inline.";
const codeBlock = "```\nThis is a block of code.\n```";
const ul = "- Unordered-List Item 1\n- Unordered-List Item 2";
const ol = "1. Ordered-List Item 1\n2. Ordered-List Item 2";
const blockquote = "> This is a blockquote.";
const image = "![Image of a Kitten](https://placekitten.com/100/100)";
const boldText = "Some **bold text**.";

const initialContent =
	h1 +
	"\n\n" +
	h2 +
	"\n\n" +
	link +
	"\n\n" +
	inlineCode +
	"\n\n" +
	codeBlock +
	"\n\n" +
	ul +
	"\n\n" +
	ol +
	"\n\n" +
	blockquote +
	"\n\n" +
	image +
	"\n\n" +
	boldText;

export default initialContent;
