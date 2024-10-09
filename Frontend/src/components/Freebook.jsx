import React, { useEffect, useState } from "react";
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
function Freebook() {
  const [choco, setChoco] = useState([]);
  useEffect(() => {
    // setChoco(objects)
    const getChoco = async () => {
      try {
        const res = await axios.get("http://localhost:4001/choco");
        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setChoco(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChoco();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Chocolates</h1>
          <p>
         "Indulge in our irresistible selection of chocolates—absolutely free!
         Sourced from the finest ingredients,
          each chocolate is a perfect balance of rich flavors and creamy textures,
           designed to delight your taste buds.
            Whether you're craving classic milk chocolate, decadent dark varieties,
             or adventurous new flavors, our complimentary chocolates are a little treat to sweeten your day.
              Enjoy a moment of pure indulgence—on us!"
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {choco.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
          {/* <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider> */}
        </div>
      </div>
    </>
  );
}
export default Freebook;

const objects = [
  {
    "id": 1,
    "name": "Lindt Excellence 70% Dark Chocolate",
    "price": 5.99,
    "category": "paid",
    "origin": "Switzerland",
    "title": "Lindt Excellence 70% is a rich and intense dark chocolate with smooth cocoa flavor for true chocolate enthusiasts.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnLJWCua_5zJisqg49MZCYUUTpmIi1rPcIMg&s"
  },
  {
    "id": 2,
    "name": "Hershey's Milk Chocolate Bar",
    
    "price": "Free",
    "category": "Free",
    "origin": "United States",
    "title": "Hershey's Milk Chocolate Bar is a classic, creamy chocolate made with farm-fresh milk.",
    "image": "https://example.com/images/hersheys-milk-chocolate-bar.jpg"
  },
  {
    "id": 3,
    "name": "Toblerone Milk Chocolate with Honey and Almond Nougat",
    
    "price": 4.50,
    "category": "paid",
    "origin": "Switzerland",
    "title": "Toblerone’s iconic triangular bar, made with Swiss milk chocolate, honey, and almond nougat, offers a unique flavor and texture.",
    "image": "https://example.com/images/toblerone-milk-chocolate.jpg"
  },
  {
    "id": 4,
    "name": "Milka Alpine Milk Chocolate",
       "price": 3.00,
    "category": "paid",
    "origin": "Germany",
    "title": "Milka Alpine Milk Chocolate is a smooth, creamy chocolate made with 100% Alpine milk.",
    "image": "https://example.com/images/milka-alpine-milk-chocolate.jpg"
  },
  {
    "id": 5,
    "name": "Godiva Signature Dark Chocolate Truffles",
        "price": 12.99,
    "category": "paid",
    "origin": "Belgium",
    "title": "Godiva’s Dark Chocolate Truffles deliver an intense, rich cocoa experience wrapped in smooth dark chocolate.",
    "image": "https://example.com/images/godiva-dark-chocolate-truffles.jpg"
  },
  {
    "id": 6,
    "name": "Ferrero Rocher",
         "price": 10.00,
    "category": "paid",
    "origin": "Italy",
    "title": "Ferrero Rocher offers a luxurious experience with its crunchy hazelnut shell, smooth chocolate, and whole hazelnut center.",
    "image": "https://example.com/images/ferrero-rocher.jpg"
  },
  {
    "id": 7,
    "name": "Mars Bar",
      "price": 1.50,
    "category": "paid",
    "origin": "United States",
    "title": "Mars Bar is a delicious blend of nougat, caramel, and milk chocolate that delivers a satisfying treat.",
    "image": "https://example.com/images/mars-bar.jpg"
  },
  {
    "id": 8,
    "name": "Lindt Swiss Premium Milk Chocolate",
       "price": 7.50,
    "category": "paid",
    "origin": "Switzerland",
    "title": "Lindt Swiss Premium Milk Chocolate is a velvety smooth chocolate made from the finest Swiss ingredients.",
    "image": "https://example.com/images/lindt-premium-milk.jpg"
  },
  {
    "id": 9,
    "name": "Hershey's Cookies 'n' Creme",
    
    "price": 2.50,
    "category": "paid",
    "origin": "United States",
    "title": "Hershey's Cookies 'n' Creme combines the sweet flavor of white chocolate with crunchy cookie bits.",
    "image": "https://example.com/images/hersheys-cookies-n-creme.jpg"
  },
  {
    "id": 10,
    "name": "Toblerone Dark Chocolate",
    
    "price": 5.00,
    "category": "paid",
    "origin": "Switzerland",
    "title": "Toblerone Dark Chocolate combines rich dark Swiss chocolate with honey and almond nougat for a bittersweet treat.",
    "image": "https://example.com/images/toblerone-dark-chocolate.jpg"
  },
  {
    "id": 11,
    "name": "Milka Oreo Chocolate",
       "price": 3.50,
    "category": "paid",
    "origin": "Germany",
    "title": "Milka Oreo Chocolate is a perfect combination of creamy Milka chocolate and crunchy Oreo cookie pieces.",
    "image": "https://example.com/images/milka-oreo-chocolate.jpg"
  },
  {
    "id": 12,
    "name": "Godiva Milk Chocolate Caramel Bar",
        "price": "Free",
    "category": "Free",
    "origin": "Belgium",
    "title": "Godiva’s Milk Chocolate Caramel Bar offers a perfect blend of smooth milk chocolate and rich, buttery caramel.",
    "image": "https://example.com/images/godiva-caramel-bar.jpg"
  },
  {
    "id": 13,
    "name": "Ferrero Collection",
         "price": 15.00,
    "category": "paid",
    "origin": "Italy",
    "title": "Ferrero Collection features an assortment of Ferrero Rocher, Ferrero Rondnoir, and Raffaello for a mix of chocolate indulgence.",
    "image": "https://example.com/images/ferrero-collection.jpg"
  },
  {
    "id": 14,
    "name": "Mars Fun Size Pack",
      "price": "Free",
    "category": "Free",
    "origin": "United States",
    "title": "The Mars Fun Size Pack offers bite-sized versions of the classic Mars Bar, perfect for sharing or snacking.",
    "image": "https://example.com/images/mars-fun-size.jpg"
  },
  {
    "id": 15,
    "name": "Lindt Lindor Milk Chocolate Truffles",
       "price": 9.99,
    "category": "paid",
    "origin": "Switzerland",
    "title": "Lindt Lindor Truffles are filled with smooth, melting milk chocolate encased in a delicate shell.",
    "image": "https://example.com/images/lindt-lindor-truffles.jpg"
  },
  {
    "id": 16,
    "name": "Hershey's Kisses Milk Chocolate",
    
    "price": 3.99,
    "category": "paid",
    "origin": "United States",
    "title": "Hershey's Kisses are classic bite-sized chocolates wrapped in foil, perfect for gifting or sharing.",
    "image": "https://example.com/images/hersheys-kisses.jpg"
  },
  {
    "id": 17,
    "name": "Toblerone White Chocolate",
    
    "price": 5.50,
    "category": "paid",
    "origin": "Switzerland",
    "title": "Toblerone White Chocolate offers a creamy and smooth white chocolate experience with honey and almond nougat.",
    "image": "https://example.com/images/toblerone-white-chocolate.jpg"
  },
  {
    "id": 18,
    "name": "Milka Noisette Chocolate Bar",
       "price": 3.25,
    "category": "paid",
    "origin": "Germany",
    "title": "Milka Noisette is a deliciously creamy milk chocolate bar infused with smooth hazelnut flavor.",
    "image": "https://example.com/images/milka-noisette-chocolate.jpg"
  },
  {
    "id": 19,
    "name": "Godiva Chocolate Domes",
        "price": "Free",
    "category": "Free",
    "origin": "Belgium",
    "title": "Godiva Chocolate Domes offer a rich and indulgent chocolate experience with a crunchy exterior and creamy filling.",
    "image": "https://example.com/images/godiva-chocolate-domes.jpg"
  }
]