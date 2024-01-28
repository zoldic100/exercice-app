const apiUrl = 'https://wger.de/api/v2/exercise/?format=json';
const apiKey = '45c0e3ebe337f8f1f265d9b0640653f58a466abb';
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'Authorization': `Token ${apiKey}`,
    'Content-Type': 'application/json',
  },
}
export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fb046b0100msh1359d25703f1b68p1c2a15jsn7c9a765a6518',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};
export const fetchData = async (url,options)=>{

    const response = await fetch(url,options)
    const data =await response.json()


    return data
}

