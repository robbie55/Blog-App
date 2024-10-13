import styles from '../styles/BlogPost.module.css';

export default function BlogPost({
  title,
  author,
  content,
  datePosted,
  id,
}: {
  title: string;
  author: string;
  content: string;
  datePosted: Date;
  id: string;
}) {
  return (
    <div className={styles.postContainer}>
      <div>
        <span>{title}</span>
      </div>
      <div>
        <span>
          Written by {author} on {datePosted.toString()}
        </span>
      </div>
      <div>{content}</div>
    </div>
  );
}
