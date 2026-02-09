var page_data_url =  "https://raw.githubusercontent.com/dhakiweere/dhakiweere-space/main/data/general_data.json";

export async function loadPageData() {
    const res = await fetch(page_data_url);
    if (!res.ok) throw new Error("Failed to load page data json from github");
    return res.json();
}