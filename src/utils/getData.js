export async function getJobs() {
    const response = await fetch("../data.json");
    const listsJobs = await response.json();

    return listsJobs;
}