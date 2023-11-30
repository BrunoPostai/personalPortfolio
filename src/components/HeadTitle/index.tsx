interface HeadTitleProps {
  title: string;
}

const HeadTitle: React.FC<HeadTitleProps> = ({ title }: HeadTitleProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default HeadTitle;
