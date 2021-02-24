import './list-view.scss';

function ListView(props) {
  return (
    <>
      <div className="p-4 md:p-10">
        {props.data.map((item) => (
          <article
            className="w-full lg:max-w-full lg:flex mb-4"
            key={item.title}
          >
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
              <a href={item.link}>
                <img alt="" className="block h-auto w-full" src={item.img} />
              </a>
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal flex-grow">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {item.title}
                </div>
                <p className="text-gray-700 text-base">{item.description}</p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-600">{item.pubDate}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default ListView;
