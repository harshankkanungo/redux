import React from 'react';

function NewsWidget({ data }) {
  return (
    <div className="widget news-widget">
      <h2>News</h2>
      <ul>
        {data.map((article, index) => (
          <li key={index}>
            <strong>{article.headline}</strong>
            <p>Source: {article.source}</p>
            <p>Date: {article.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsWidget;
