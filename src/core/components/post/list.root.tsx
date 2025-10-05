import PostItem from "./post.item"



function PostList() {
    const myArray = Array.from({ length: 5 }, (v, i) => i);

    return (
        <div className="flex flex-col gap-3 mt-3 items-center">

            <h1 className="text-2xl font-bold  mb-3">Top Feeds For You</h1>

            <div className="flex gap-6 flex-wrap justify-center items-center">
                {
                    myArray.map((e) => (
                        <PostItem key={e} />
                    ))
                }
            </div>

        </div>
    )
}

export default PostList
