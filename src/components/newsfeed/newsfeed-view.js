import NewsContent from "./../news-content";
import NavBar from "./../nav-bar";

function Newsfeed() {
    return (
        <>
            <NavBar />
            <div className="p-4 md:p-12">
                <NewsContent />
            </div>
        </>
    );
}


export default Newsfeed;
