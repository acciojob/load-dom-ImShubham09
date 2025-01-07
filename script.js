//your JS code here. If required.

// Dynamically move the script to the head to avoid it being a body child
if (document.currentScript) {
    document.head.appendChild(document.currentScript);
}

document.addEventListener("DOMContentLoaded", () => {
    // Create a new text node with the string "DOM load success"
    const textNode = document.createTextNode("DOM load success");

    // Append the text node to the body
    document.body.appendChild(textNode);
});
