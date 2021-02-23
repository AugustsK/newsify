import axios from "axios";
import { useAsync } from "react-async";
import GridView from "./components/grid-view";
import ListView from "./components/list-view";
import Loader from "./components/loader";
import Error from "./components/error";
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

function NewsContent() {
    const { data, error, isLoading } = useAsync({ promiseFn: loadNews })
    if (isLoading) return (<Loader />)
    if (error) return (<Error message={error.message}/>)
    if (data && displayMode === 'grid')
        return (
            <>
                <GridView data={data} />
            </>
        );
    else if (data)
        return (
            <>
                <ListView data={data} />
            </>
        )
}


export default NewsContent;
