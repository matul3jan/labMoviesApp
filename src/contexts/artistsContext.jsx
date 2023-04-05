import React, { useState } from "react";

export const ArtistsContext = React.createContext(null);

const ArtistsContextProvider = (props) => {
  const [pageArtists, setPageArtists] = useState(1);

  return (
    <ArtistsContext.Provider
      value={{
        pageArtists,
        setPageArtists,
      }}
    >
      {props.children}
    </ArtistsContext.Provider>
  );
};

export default ArtistsContextProvider;
