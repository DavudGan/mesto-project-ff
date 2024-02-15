export function renderLoading(isLoading, element) {
  if (isLoading) {
    element.textContent = "Сохранение...";
  } else {
    element.textContent = "Сохранить";
  }
}
