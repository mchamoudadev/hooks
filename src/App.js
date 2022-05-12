import { useState } from 'react';
import './App.css';

function App() {

  // const [counter, setCounter] = useState(0);

  // const countCounter = () => {
  //   setCounter(prev => prev + 1);
  // };

  // const resetCounter = () => {
  //   if (window.confirm("are you sure you want to reset the counter")) {
  //     setCounter(0);
  //   }
  // };

  // single post
  const [post, setPost] = useState({
    title: '',
    content: '',
  });

  //all posts

  const [posts, setPosts] = useState([]);

  const submitForm = (e) => {

    e.preventDefault();
    setPosts([{ title: post.title, content: post.content }, ...posts]);
    setPost({ title: "", content: "", });
  };


  return (
    <div className="App">
      <div className="container">
        {/* <h1>Counter Application</h1>
        <h2>{counter}</h2>
        <button type="button" className="btn btn-primary"
          onClick={countCounter}
        >
          Add
        </button>
        <button type="button" className="btn btn-secondary"
          onClick={resetCounter}
        >
          Reset
        </button> */}

        <form onSubmit={submitForm}>
          <h1>Add Posts</h1>
          <input type="text" placeholder="post title"
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            value={post.title}
          />
          <input type="text" placeholder="post content"
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            value={post.content}
          />
          <button type="sumbit" className="btn btn-primary"
          >
            Add
        </button>
        </form>

        {posts.length > 0 &&
          posts.map(post => (
            <div className="card">
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </div>
          ))
        }

      </div>
    </div >
  );
}

export default App;
