export const firstLast = (items) => {
  if (items.length === 0) {
    return `No items!`
  }

  else if (items.length === 1) {
    return `Only item: ${items[0]}`
  }

  else {
    let first = items[0]
    let last = items[items.length - 1];

    return `First: ${first}, Last: ${last}`
  }

} 