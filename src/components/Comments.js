import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Comments = () => {
    const [allComments, setAllComments] = useState(null)
    const { id } = useParams();
    useEffect(() => {
        getCommmentsData()
    }, [])

    const getCommmentsData = async () => {
        try {
            let response = await axios.get(
                `  https://jsonplaceholder.typicode.com/comments`
            );
            setAllComments(response.data)
        } catch (error) {
            console.log('error while fetching Comments data', error)
        }
    }
    return (
        <div>
            <table className="table table-striped table-hover">
                <thead className='table-primary'>
                    <tr className='myClass'>
                        <th style={{ width: '50px' }} scope="col">Post ID</th>
                        <th style={{ width: '50px' }} scope="col">Comment ID</th>
                        <th style={{ width: '150px' }} scope="col">Name</th>
                        <th style={{ width: '100px' }} scope="col">Email</th>
                        <th style={{ width: '250px' }} scope="col">Comment Body</th>
                    </tr>
                </thead>
                <tbody>
                {allComments && allComments
                    .filter((comments) => {
                        let postFinalId = id.toString()
                        let postIdOfComment = (comments.postId).toString()
                        if (postIdOfComment === postFinalId) {
                            return comments
                        }
                    })
                    .map((comments, index) => {
                        return (                            
                                <tr key={index} >
                                    <th scope="row">
                                        {comments.postId}
                                    </th>
                                    <td scope="row">
                                        {comments.id}
                                    </td>
                                    <td>{comments.name}</td>
                                    <td>{comments.email}</td>
                                    <td>{comments.body}</td>
                                </tr>                            
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Comments
