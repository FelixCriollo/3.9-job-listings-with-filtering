const data = new URL('/data/data.json', import.meta.url).href

export async function getJobs() {
    const response = await fetch(data);
    const listsJobs = await response.json();

    return listsJobs;
}