const apiUrl = 'https://wger.de/api/v2/exercise/?format=json';
const apiKey = '45c0e3ebe337f8f1f265d9b0640653f58a466abb';
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'Authorization': `Token ${apiKey}`,
    'Content-Type': 'application/json',
  },
}
  
export const fetchData = async (url,options)=>{

    const response = await fetch(url,options)
    const data =await response.json()


    return data
}

