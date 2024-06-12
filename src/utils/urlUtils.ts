const result = {};
export function urlSearchParamsToObj(/*searchParams: URLSearchParams*/) {
  const searchParams = new URLSearchParams(window.location.search);
  console.log("######", searchParams);
  // @ts-ignore
  for (const [key, value] of searchParams.entries()) {
    // @ts-ignore
    result[key] = value.includes("%5B")
      ? JSON.parse(decodeURIComponent(value))
      : value;
  }
  // console.log("@@@@@@", r)
  return result;
}

export function updateURL(obj: any) {
  // Создаем новый экземпляр URLSearchParams на основе текущего URL
  const searchParams = new URLSearchParams(window.location.search);
  console.log("ada", Object.entries(obj));
  // Устанавливаем значения pageSize и currentPage
  //   searchParams.set('pageSize', pageSize);
  // @ts-ignore
  for (const [key, value] of Object.entries(obj)) {
    // console.log("eeee", )

    // // @ts-ignore
    // result[key] = value.includes("%5B") ? JSON.parse(decodeURIComponent(value)) : value;
    // @ts-ignore
    searchParams.set(key, value);
  }

  // Обновляем URL без перезагрузки страницы
  window.history.pushState(
    {},
    "",
    `${window.location.pathname}?${searchParams}`
  );
}
