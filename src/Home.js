import { useState } from "react";
import Tour from "./Tour";
import Notours from "./Notours";

const Home = () => {
  const [tours, setTours] = useState([
    {
      price: "$2,095",
      image: "https://images2.imgbox.com/67/2f/Sk5x6VxF_o.jpeg",
      title: "Best Of Rome In 7 Days Tour",
      desc: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
      id: 1,
    },
    {
      price: "$1.95",
      image: "https://images2.imgbox.com/d6/91/DLtwCiTn_o.jpg",
      title: "Best Of Paris In 7 Days Tour",
      desc: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
      id: 2,
    },
    {
      price: "$3.85",
      image: "https://images2.imgbox.com/e5/62/SR8sJgyg_o.jpeg",
      title: "Best Of Ireland In 14 Days Tour",
      desc: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
      id: 3,
    },
    {
      price: "$78",
      image: "https://images2.imgbox.com/ff/f5/vFKUUGBY_o.jpeg",
      title: "Best Of Salzburg & Vienna In 8 Days Tour",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsum tenetur, consequatur odio eum iusto sint repellat a nulla ipsam eaque modi itaque perspiciatis distinctio veritatis voluptatibus dolorum, quae placeat.",
      id: 4,
    },
    {
      price: "$0.35",
      image: "https://images2.imgbox.com/ff/f5/vFKUUGBY_o.jpeg",
      title: "Best Of Poland In 10 Days Tour",
      desc: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
      id: 5,
    },
  ]);

  const handleDelete = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  // const shorten = () => {
  //   const newDesc = tours.filter((tour) => );
  //   setTours(newDesc);
  // };
  const isEmpty = tours.length === 0;
  return (
    <div className="Home">
      <Tour tours={tours} handleDelete={handleDelete} /*shorten={shorten}*/ />
      {isEmpty && <Notours />}
    </div>
  );
};

export default Home;
