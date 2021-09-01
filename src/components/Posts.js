import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const Posts = () => {
    const [allPosts, setAllPosts] = useState(null)
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        getPostsData()
    }, [])

    const getPostsData = async () => {
        try {
            let response = await axios.get(
                `  https://jsonplaceholder.typicode.com/posts`
            );
            setAllPosts(response.data)

        } catch (error) {
            console.log('error while fetching Posts data', error)
        }
    }

    const CommentsDetails = (id) => {
        history.push(`/CommentsDetails/${id}`)
    }
    return (
        <div>
            <table className="table table-striped table-hover">
                <thead className='table-primary'>
                    <tr >
                        <th style={{ width: '50px' }} scope="col">User ID</th>
                        <th style={{ width: '50px' }} scope="col">Post ID</th>
                        <th style={{ width: '250px' }} scope="col">Post Title</th>
                        <th style={{ width: '50%' }} scope="col">Post Body</th>
                    </tr>
                </thead>
                <tbody>
                {allPosts && allPosts
                    .filter((posts) => {
                        let userFinalId = id.toString()
                        let userIdOfPosts = (posts.userId).toString()
                        if (userIdOfPosts === userFinalId) {
                            return posts
                        }
                    })
                    .map((posts, index) => {
                        return (                            
                                <tr key={index} onClick={() => CommentsDetails(posts.id)} >
                                    <th scope="row">
                                        {posts.userId}
                                    </th>
                                    <td scope="row">
                                        {posts.id}
                                    </td>
                                    <td>{posts.title}</td>
                                    <td>{posts.body}</td>
                                </tr>                           
                        )
                    })}
                    </tbody>
            </table>
        </div>
    )
}

export default Posts
