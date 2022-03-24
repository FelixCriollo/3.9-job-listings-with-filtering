export async function getJobs() {
    const response = await fetch("/src/data.json");
    const listsJobs = await response.json();

    // console.log(listsJobs);
    return listsJobs;
}