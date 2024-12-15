interface PostProps {
  title: string;
}

export const Post = ({ title }: PostProps) => {
  return (
    <div className="border rounded-md p-4 shadow-sm w-[300px]">
      <p>{title}</p>
    </div>
  );
};
