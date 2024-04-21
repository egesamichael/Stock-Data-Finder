import React, { useState, useEffect } from 'react';

function Stock(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.polygon.io/v1/open-close/${props.company}/2023-01-09?adjusted=true&apiKey=iFujpirSbQKne_BBVG4vSfCH1KSesSTf`;
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [props.company]); // Make sure to re-run the effect if `props.symbol` changes

  return (
    <div className='stockCard'>
      <h3>{props.company}</h3>
      {data && (
        <div>
          {/* Display fetched data */}
          <p>Open: {data.open}</p>
          <p>Close: {data.close}</p>
        </div>
      )}
    </div>
  );
}

export default Stock;
