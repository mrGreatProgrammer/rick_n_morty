// const debouncedOnChange = debounce(
//     (name: filterFormKeys, value: string | string[] | CheckboxValueType[]) => {
//       // console.log("Debounced onChange", name, value);

//       // Your existing onChange logic goes here
//       let r = urlSearchParamsToObj(searchParams);

//       if (value) {
//         // @ts-ignore
//         r[name] = value;
//         setSearchParams(r);
//         // @ts-ignore
//         setValue(name, value);
//         // @ts-ignore
//       } else {
//         // @ts-ignore
//         delete r[name];
//         setSearchParams(r);
//         resetField(name);
//       }
//     },
//     700
//   );
