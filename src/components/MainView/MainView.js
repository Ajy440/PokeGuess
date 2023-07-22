import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MainView = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    const img = new Image();
    img.src = props?.staticimage;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [props?.staticimage]);

  const img = isLoaded ? props?.staticimage : props?.gifImage;

  return (
    <>
      <div
        style={{
          textAlign: "center",
          alignContent: "center",
          alignItems: "center",
          height: "90%",
        }}
      >
        <AnimatePresence>
          <motion.img
            src={img}
            alt={"PokeImage"}
            style={{ height: "50vh", width: "50vw", marginTop: "10%" }}
            onLoad={() => setIsLoaded(true)}
          />
        </AnimatePresence>
      </div>
    </>
  );
};

export default MainView;
