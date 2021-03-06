import React from 'react';
import ExploreViewListEntry from './ExploreViewListEntry.jsx';

let ExploreView = (props) => {

  return (
    <div className="viewTable">
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.explore.map(item =>
            <ExploreViewListEntry key={props.explore.indexOf(item)} item={item} />
          ) }
        </tbody>
      </table>
    </div>
  );
};


export default ExploreView;
