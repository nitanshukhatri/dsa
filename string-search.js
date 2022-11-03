function textSearch(string, query) {
  const boldChars = Array(string.length).fill(false);
  const lowerCaseString = string.toLowerCase();
  const lowerCaseQuery = query.toLowerCase();

  if (query == null || query.length === 0) {
    return string;
  }

  for (let i = 0; i < string.length; i++) {
    console.log(lowerCaseString.substr(i, query.length));
    if (lowerCaseString.substr(i, query.length) === lowerCaseQuery) {
      boldChars.fill(true, i, i + query.length);
      console.log(boldChars);
      // Start from next character if there's a match since one
      // character cannot match the same query more than once.
      i += query.length - 1;
    }
  }

  let highlightedString = "";
  for (let i = 0; i < string.length; i++) {
    // When the current character should be bolded
    // and the previous character should not be bolded,
    // append an opening tag to the final string.
    if (boldChars[i] && !boldChars[i - 1]) {
      highlightedString += "<b>";
    }

    highlightedString += string[i];

    // When the current character should be bolded
    // and the previous character should not be bolded,
    // append a closing tag to the final string.
    if (boldChars[i] && !boldChars[i + 1]) {
      highlightedString += "</b>";
    }
  }

  return highlightedString;
}

console.log(textSearch("aababcac", "ab"));
