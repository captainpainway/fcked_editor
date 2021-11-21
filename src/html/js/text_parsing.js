export function getSelection(editor) {
    const selectionStart = editor.selectionStart;
    const selectionEnd = editor.selectionEnd;
    const before = editor.value.substring(0, selectionStart);
    const selectedText = editor.value.substring(selectionStart, selectionEnd);
    const after = editor.value.substring(selectionEnd);
    return {
        start: selectionStart,
        end: selectionEnd,
        text: selectedText,
        before: before,
        after: after
    };
}

export function refresh(editor) {
    const event = new Event('update_preview');
    editor.dispatchEvent(event);
}
