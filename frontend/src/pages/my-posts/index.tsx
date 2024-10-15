const { API_ENDPOINT } = process.env;
import BlogPost from '@/components/BlogPost';
import styles from '@/styles/BlogPost.module.css';

interface BlogPost {
  id: string;
  author: string;
  title: string;
  content: string;
  datePosted: Date;
}
interface FormattedBlogPost {
  id: string;
  author: string;
  title: string;
  content: string;
  datePosted: string;
}

export async function getStaticProps() {
  // Fetch all posts from go api endpoint
  const res: Response = await fetch(`${API_ENDPOINT}/posts`);
  const data: BlogPost[] = await res.json();

  // Function to format the date attribute of post data
  function formatDate(rawDate: Date): string {
    // Create a new Date from the rawDate returned by GO to ensure JS date methods work
    const date: Date = new Date(rawDate);
    const day: string = date.getDate().toString().padStart(2, '0');
    const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
    const year: number = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  const formattedData: FormattedBlogPost[] = data.map(
    (post: BlogPost): FormattedBlogPost => {
      return {
        ...post,
        datePosted: formatDate(post.datePosted),
      };
    }
  );

  return {
    props: {
      data: formattedData,
    },
    revalidate: 10, // Re-fetch data every 10 seconds (ISR)
  };
}

export default function MyPostsPage({ data }: { data: FormattedBlogPost[] }) {
  console.log(data);

  return (
    <div>
      <div className={styles.postPageTitle}>
        <span>My Posts</span>
      </div>
      <div className={styles.postsContainer}>
        {data.map(
          ({ author, id, title, content, datePosted }: FormattedBlogPost) => {
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
          }
        )}
      </div>
    </div>
  );
}
