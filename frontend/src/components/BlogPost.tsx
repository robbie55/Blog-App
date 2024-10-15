import styles from '../styles/BlogPost.module.css';

export default function BlogPost({
  title,
  author,
  content,
  datePosted,
}: // id,
{
  title: string;
  author: string;
  content: string;
  datePosted: string;
  id: string;
}) {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postTopbar}>
        <div>
          <span>{title}</span>
          <span>
            Written by {author} on {datePosted}
          </span>
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
}
