import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
   const [postsTest, setPostsTest] = useState('');
   const [usersTest, setUsersTest] = useState('');

    useEffect(() => {
        axios.get('/api/v1/posts/test')
        .then(response => {
            console.log(response)
            setPostsTest(response.data)
        })
        .catch(error => console.log(error))
    }, []);

    useEffect(() => {
            axios.get('/api/v1/users/test')
            .then(response => {
                console.log(response)
                setUsersTest(response.data)
            })
            .catch(error => console.log(error))
        }, []);

    return (
        <div>
            Posts from backend : {postsTest}
            <br />
            Users from backend : {usersTest}
        </div>
    );
}

export default App;
