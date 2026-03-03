export default function truncateWords(text, limit) {
    const words = text.trim().split(/\s+/)

    if (words.length <= limit) return text

    return words.slice(0, limit).join(' ') + '...'
}