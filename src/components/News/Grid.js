import './Grid.css';

function Grid(props) {
    return (
        <>
            <div className="p-4 md:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {props.data.map(item => (
                    <article className="overflow-hidden rounded shadow-lg news-item-card" key={item.title}>
                        <a href={item.link} className="block overflow-hidden">
                            <img alt="" className="block h-auto w-full transform-img"
                                 src={item.img}/>
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{item.title}</div>
                            <p className="text-gray-700 text-base">
                                {item.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    {item.pubDate}
                                </span>
                        </div>
                    </article>
                ))}
            </div>
        </>
    );
}


export default Grid;
