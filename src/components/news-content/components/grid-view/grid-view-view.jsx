import GridItem from '../grid-item';

function GridView(props) {
  return (
    <>
      <div className="p-4 md:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {props.data.map((item, index) => (
          <GridItem
            key={`grid-item--${index}`}
            link={item.link}
            title={item.title}
            imgSrc={item.img}
            description={item.description}
            pubDate={item.pubDate}
            fullDate={item.fullDate}
          />
        ))}
      </div>
    </>
  );
}

export default GridView;
