import BlogPost from '@/components/BlogPost';
import styles from '@/styles/BlogPost.module.css';

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:8080/posts');
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 10, // Re-fetch data every 10 seconds (ISR)
  };
}

interface BlogPost {
  id: string;
  author: string;
  title: string;
  content: string;
  datePosted: Date;
}

export default function MyPostsPage({ data }: { data: BlogPost[] }) {
  console.log(data);
  return (
    <div>
      <div className={styles.postPageTitle}>
        <span>My Posts</span>
      </div>
      <div className={styles.postsContainer}>
        {data.map(({ author, id, title, content, datePosted }: BlogPost) => {
          return (
            <BlogPost
              key={id}
              author={author}
              id={id}
              content={content}
              title={title}
              datePosted={datePosted}
            />
          );
        })}
      </div>
    </div>
  );
}
