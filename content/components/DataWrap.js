import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

export default function DataWrapChart({ title, src, ...props }) {
  const id = src.split("/").filter((str, i) => str.length === 5 && !!i);

  const [height, setState] = useState(500);

  const randomNum = Math.floor(Math.random() * 1000);

  const randomId = id + randomNum.toString() + Date.now();

  const srcNew = src;

  const onMessage = useCallback(
    ({ data = {} }) => {
      if (typeof data === "string") return;
      const height =
        data["datawrapper-height"] && data["datawrapper-height"][id];
      if (height) {
        setState(height);
      }
    },
    [id, setState]
  );

  useEffect(() => {
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [id, height, setState, onMessage]);

  return (
    <iframe
      scrolling="no"
      frameBorder="0"
      width="99%"
      {...props}
      title={title}
      src={srcNew}
      height={height}
      name={randomId}
    />
  );
}

DataWrapChart.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
