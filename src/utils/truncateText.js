export default function truncateText(text, maxWords, maxChars) {
    if (!text) return "";

    const words = text.split(/\s+/);

    let truncated = words.slice(0, maxWords).join(" ");

    if (truncated.length > maxChars) {
        truncated = truncated.slice(0, maxChars);
    }

    if (truncated.length < text.length) {
        truncated = truncated.trimEnd() + "...";
    }

    return truncated;
}
