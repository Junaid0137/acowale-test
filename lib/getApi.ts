export async function getCategory(category) {
    const data = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=20&apikey=${process.env.APIKEY}`);
    return data.json();
}

export async function getSearchData(term) {
    const data = await fetch(`https://gnews.io/api/v4/search?q=${term}&lang=en&apikey=${process.env.APIKEY}`);
    return data.json();
}

export async function getMaxCategory(category) {
    const data = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=3&apikey=${process.env.APIKEY}`);
    return data.json();
}

export async function fetchData() {
    try {
        const sdata = await getMaxCategory('sports');
        const edata = await getMaxCategory('entertainment');
        const tdata = await getMaxCategory('technology');

        // Return all fetched data as an object
        return { sdata, edata, tdata };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { sdata: [], edata: [], tdata: [] }; // Return empty data on error
    }
}