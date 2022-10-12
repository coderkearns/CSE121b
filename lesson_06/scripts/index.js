const content = document.getElementById("content")

function renderStory(story) {
    content.replaceChildren() // Clear all content

    for (let paragraph of story?.text || []) {
        const p = document.createElement("p")

        // Using .innerHTML instead of .textContent so bold or italics could be used. If the content was untrusted, this wouldn't be safe because it could contain a <script> element.
        p.innerHTML = paragraph
        content.appendChild(p)
    }

    const buttons = document.createElement("nav")

    for (let option in story?.options || {}) {
        const btn = document.createElement("button")
        btn.innerHTML = option
        btn.addEventListener("click", () => renderStory(story?.options?.[option]) || {})
        buttons.appendChild(btn)
    }

    content.appendChild(buttons)
}

/*
If you examine the <main id="content"> halfway through a story, you will see the current arc appears in a simple format:
<p>story text</p>...
<nav>
    <button>story buttons</button>
    ...
</nav>

This allows anyone to use this code to create their own choose-your-adventure-stories, then to plug in any CSS file that fits the content.
I left this one mostly unstyled aside from the "The End."'s, but it could have all kinds of themes!
*/
