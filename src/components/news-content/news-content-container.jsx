import GridView from './components/grid-view';
import ListView from './components/list-view';

const displayMode = 'grid';

function NewsContent({ data }) {
  if (displayMode === 'grid') {
    return (
      <>
        <GridView data={data} />
      </>
    );
  }
  return (
    <>
      <ListView data={data} />
    </>
  );
}

export default NewsContent;
