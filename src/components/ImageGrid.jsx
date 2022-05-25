import React, { useState, useEffect } from "react";
import axios from "axios";

import "./ImageGrid.scss";

const ImageGrid = (props) => {
  const [images, setImages] = useState([]);
  const [ clickedImages, setClickedImages ] = useState({}) ;

  useEffect(() => {
    getImages()
      .then((data) => {
        let allImgs = data.data.memes;
        const localImgs = [];
        for (let i = 0; i < 10; i += 1) {
          localImgs.push({
            name: allImgs[i].name,
            src: allImgs[i].url,
            id: i,
          });
        }
        setImages(localImgs);
        return data;
      })
      .catch((err) => console.log(err));
  }, []);

  const getImages = () => {
    let imgapi = "https://api.imgflip.com/get_memes";
    return axios
      .get(imgapi)
      .then((data) => data.data)
      .catch((err) => console.log(err));
  };

  const checkImg = (id) => {
		console.log(clickedImages[id])
    if (id in clickedImages) {
      props.setScores(0);
      setClickedImages({});
    } else {
      let tmpImages = clickedImages;
      tmpImages[id] = true;
      setClickedImages(tmpImages);
			props.addScore()
    }
		shuffleImages()
  };

  const shuffleImages = () => {
    let currentIndex = images.length;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [images[currentIndex], images[randomIndex]] = [
        images[randomIndex],
        images[currentIndex],
      ];
    }
  };

  if (typeof images === null) {
    return <div className="imageGrid"></div>;
  }

  return (
    <div className="imageGrid">
      {images.map((ig, i) => {
        return (
					<div>
						<img onClick={()=>{checkImg(ig.id)}} key={ig.id} src={ig.src} />
						<p>{ig.name}</p> 
					</div>);
      })}
    </div>
  );
};

export default ImageGrid;
