import axios from "axios";
import { useAsync } from "react-async";
import Grid from "./News/Grid";
import List from "./News/List";
//import { formatRelative, parse } from "date-fns";

const loadNews = async () => {
    const response = await axios.get('/rss/?lang=lv&catid=14');
    const items = [];
    const xml = new window.DOMParser().parseFromString(response.data, "text/xml");

    xml.querySelectorAll('item').forEach(item => {
        items.push({
            title: item.querySelector('title').innerHTML,
            link: item.querySelector('link').innerHTML,
            pubDate: item.querySelector('pubDate').innerHTML,
            description: item.querySelector('description').innerHTML,
            img: item.querySelector('enclosure[type="image/jpeg"]').getAttribute('url')
        });
    });

    return items;
}

let displayMode = 'grid';

function IsLoading() {
    return (
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-gray-500">
            <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-bell" />
            </span>
            <span className="inline-block align-middle mr-8">
                <b className="capitalize">Just a sec!</b> Loading content...
            </span>
        </div>
    );
}

function SomethingWentWrong(props) {
    return (
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
            <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-bell" />
            </span>
            <span className="inline-block align-middle mr-8">
                <b className="capitalize">Something went wrong:</b> ${props.message}
            </span>
        </div>
    );
}

function News() {
    const { data, error, isLoading } = useAsync({ promiseFn: loadNews })
    if (isLoading) return (<IsLoading/>)
    if (error) return (<SomethingWentWrong message={error.message}/>)
    if (data && displayMode === 'grid')
        return (
            <>
                <Grid data={data} />
            </>
        );
    else if (data)
        return (
            <>
                <List data={data} />
            </>
        )
}


export default News;
