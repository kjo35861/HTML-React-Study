import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import TextInput from "../../components/TextInput/TextInput";
import * as s from "./styles";
import { usePosts } from "../../hooks/queries/usePosts";
import { useState } from "react";

function PostList() {

    const [page, setPage] = useState(1);
    const posts = usePosts(page, 4);

    const handlePageOnClick = (e) => {
        setPage(parseInt(e.target.value))
    };
    console.log(posts);

    return (
        <>
            <div>
                <Header />
                <main>
                    <article css={s.top}>

                    </article>
                    <div css={s.searchContainer}>
                        <TextInput />
                        <Button>검색</Button>
                    </div>
                    <ul css={s.postListContainer}>
                        {
                            posts.isLoading ? <></> : posts.data.map(post => {
                                <li key={post.id} css={s.card}>
                                    <header css={s.cardthumbnail(post.thumbnail.dataUrl)}>123</header>
                                    <div>{post.content}</div>
                                    <footer>{post.user.fullName}</footer>
                                </li>
                            })
                        }
                    </ul>
                    <div css={s.pagination}>
                        <Button><FiChevronLeft /></Button>
                        <Button onClick={handlePageOnClick} value={1}>1</Button>
                        <Button onClick={handlePageOnClick} value={2}>2</Button>
                        <Button onClick={handlePageOnClick} value={3}>3</Button>
                        <Button onClick={handlePageOnClick} value={4}>4</Button>
                        <Button onClick={handlePageOnClick} value={5}>5</Button>
                        <Button><FiChevronRight /></Button>
                    </div>
                </main>
            </div>
        </>
    )
}

export default PostList;