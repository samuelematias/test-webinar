const { PUBLIC_URL } = process.env;

export const fetchItems = async () => {
  const { items } = await fetch(`${PUBLIC_URL}/data.json`).then(data => data.json());

  return items;
}