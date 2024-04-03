import CountryItem from './CountryItem';
import styles from './CountryList.module.css';
import Spinner from './Spinner';
import Message from './Message';
function CountryList({cities, isLoading}) {
  // console.log(cities);

// country = cities.map((item,index)=> !country.includes(item.country) && item.country);
  // console.log(country)
  if(isLoading) return <Spinner />
  if(!cities.length) 
  return (
  <Message message="Add your first city by clicking on a city on the map" />
  )
 const countries = cities.reduce((arr, city)=>{
 if(!arr.map(el=>el.country).includes(city.country))
 return [...arr, { country: city.country, emoji: city.emoji }];
else return arr;
 } ,[]);
  return (
  <ul className={styles.countryList}>
{countries.map(country => <CountryItem country={country} /> )}
  </ul>
  )
}

export default CountryList;

