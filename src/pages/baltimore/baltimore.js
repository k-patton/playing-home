import React from 'react';
import './baltimore.scss';
import PageLayout from "../../components/pageLayout/pageLayout"

function Baltimore() {
  const overview = "Baltimore is the most populous city in the U.S. state of Maryland, as well as the 30th most populous city in the United States, with a population of 602,495 in 2018 and also the largest such independent city in the country. Baltimore was established by the Constitution of Maryland[9] as an independent city in 1729. As of 2017, the population of the Baltimore metropolitan area was estimated to be just under 2.802 million, making it the 21st largest metropolitan area in the country.[10] Baltimore is located about 40 miles (64 km) northeast of Washington, D.C.,[11] making it a principal city in the Washington-Baltimore combined statistical area (CSA), the fourth-largest CSA in the nation, with a calculated 2018 population of 9,797,063.[12]"
  const neighborhood = "Baltimore is in north-central Maryland on the Patapsco River close to where it empties into the Chesapeake Bay. The city is also located on the fall line between the Piedmont Plateau and the Atlantic coastal plain, which divides Baltimore into lower city and upper city. The city's elevation ranges from sea level at the harbor to 480 feet (150 m) in the northwest corner near Pimlico"
  const food = "Baltimore is known for its Maryland blue crabs, crab cake, Old Bay Seasoning, pit beef, and the chicken box. The city has many restaurants in or around the Inner Harbor. The most known and acclaimed are the Charleston, Woodberry Kitchen, and the Charm City Cakes bakery featured on the Food Network's Ace of Cakes. The Little Italy neighborhood's biggest draw is the food. Fells Point also is a foodie neighborhood for tourists and locals and is where the oldest continuously running tavern in the country, The Horse You Came in on Saloon, is located.[210] Many of the city's upscale restaurants can be found in Harbor East. Five public markets are located across the city. The Baltimore Public Market System is the oldest continuously operating public market system in the United States.[211] Lexington Market is one of the longest-running markets in the world and longest running in the country, having been around since 1782. The market continues to stand at its original site. Baltimore is the last place in America where one can still find arabbers, vendors who sell fresh fruits and vegetables from a horse-drawn cart that goes up and down neighborhood streets.[212] Food- and drink-rating site Zagat ranked Baltimore second in a list of the 17 best food cities in the country in 2015.[213]"
  const activities = "Baltimore is known for its Maryland blue crabs, crab cake, Old Bay Seasoning, pit beef, and the chicken box. The city has many restaurants in or around the Inner Harbor. The most known and acclaimed are the Charleston, Woodberry Kitchen, and the Charm City Cakes bakery featured on the Food Network's Ace of Cakes. The Little Italy neighborhood's biggest draw is the food. Fells Point also is a foodie neighborhood for tourists and locals and is where the oldest continuously running tavern in the country, The Horse You Came in on Saloon, is located.[210] Many of the city's upscale restaurants can be found in Harbor East. Five public markets are located across the city. The Baltimore Public Market System is the oldest continuously operating public market system in the United States.[211] Lexington Market is one of the longest-running markets in the world and longest running in the country, having been around since 1782. The market continues to stand at its original site. Baltimore is the last place in America where one can still find arabbers, vendors who sell fresh fruits and vegetables from a horse-drawn cart that goes up and down neighborhood streets.[212] Food- and drink-rating site Zagat ranked Baltimore second in a list of the 17 best food cities in the country in 2015.[213]"
  const health = "Baltimore is known for its Maryland blue crabs, crab cake, Old Bay Seasoning, pit beef, and the chicken box. The city has many restaurants in or around the Inner Harbor. The most known and acclaimed are the Charleston, Woodberry Kitchen, and the Charm City Cakes bakery featured on the Food Network's Ace of Cakes. The Little Italy neighborhood's biggest draw is the food. Fells Point also is a foodie neighborhood for tourists and locals and is where the oldest continuously running tavern in the country, The Horse You Came in on Saloon, is located.[210] Many of the city's upscale restaurants can be found in Harbor East. Five public markets are located across the city. The Baltimore Public Market System is the oldest continuously operating public market system in the United States.[211] Lexington Market is one of the longest-running markets in the world and longest running in the country, having been around since 1782. The market continues to stand at its original site. Baltimore is the last place in America where one can still find arabbers, vendors who sell fresh fruits and vegetables from a horse-drawn cart that goes up and down neighborhood streets.[212] Food- and drink-rating site Zagat ranked Baltimore second in a list of the 17 best food cities in the country in 2015.[213]"
  const lodging = "Baltimore is known for its Maryland blue crabs, crab cake, Old Bay Seasoning, pit beef, and the chicken box. The city has many restaurants in or around the Inner Harbor. The most known and acclaimed are the Charleston, Woodberry Kitchen, and the Charm City Cakes bakery featured on the Food Network's Ace of Cakes. The Little Italy neighborhood's biggest draw is the food. Fells Point also is a foodie neighborhood for tourists and locals and is where the oldest continuously running tavern in the country, The Horse You Came in on Saloon, is located.[210] Many of the city's upscale restaurants can be found in Harbor East. Five public markets are located across the city. The Baltimore Public Market System is the oldest continuously operating public market system in the United States.[211] Lexington Market is one of the longest-running markets in the world and longest running in the country, having been around since 1782. The market continues to stand at its original site. Baltimore is the last place in America where one can still find arabbers, vendors who sell fresh fruits and vegetables from a horse-drawn cart that goes up and down neighborhood streets.[212] Food- and drink-rating site Zagat ranked Baltimore second in a list of the 17 best food cities in the country in 2015.[213]"
  const transportation = "Baltimore is known for its Maryland blue crabs, crab cake, Old Bay Seasoning, pit beef, and the chicken box. The city has many restaurants in or around the Inner Harbor. The most known and acclaimed are the Charleston, Woodberry Kitchen, and the Charm City Cakes bakery featured on the Food Network's Ace of Cakes. The Little Italy neighborhood's biggest draw is the food. Fells Point also is a foodie neighborhood for tourists and locals and is where the oldest continuously running tavern in the country, The Horse You Came in on Saloon, is located.[210] Many of the city's upscale restaurants can be found in Harbor East. Five public markets are located across the city. The Baltimore Public Market System is the oldest continuously operating public market system in the United States.[211] Lexington Market is one of the longest-running markets in the world and longest running in the country, having been around since 1782. The market continues to stand at its original site. Baltimore is the last place in America where one can still find arabbers, vendors who sell fresh fruits and vegetables from a horse-drawn cart that goes up and down neighborhood streets.[212] Food- and drink-rating site Zagat ranked Baltimore second in a list of the 17 best food cities in the country in 2015.[213]"
  
  return (
    <PageLayout city="Baltimore" image="./img/baltimore.jpg" imageStyle="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))" overview={overview} neighborhood={neighborhood} food={food} activities={activities} health={health} lodging={lodging} transportation={transportation}></PageLayout>
  );
}

export default Baltimore;