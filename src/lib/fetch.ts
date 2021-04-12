export default async function fetchAsync(...args: any) {
    const res = await fetch(`https://swapi.dev/api/starships/`);
    return await res.json();
  }