export default function Accountant({ posts }) {
  return (
    <div className="col-6 temporary_border">
    <h2> This is Accountant related data!</h2>
    <ul>
      {posts.map((post) => (
        <li>{post.name}</li>
      ))}
    </ul>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts = await res.json();
 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}