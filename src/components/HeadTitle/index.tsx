interface HeadTitleProps {
  title: string;
}

const HeadTitle: React.FC<HeadTitleProps> = ({ title }: HeadTitleProps) => {
  return (
    <div>
      <h1 style={{backgroundColor:'red'}} id="titulo">{title}</h1>
    </div>
  );
};

export default HeadTitle;
