interface TitleAndSubtitleProps {
   title: string;
   subtitle: string;
}

const TitleAndSubtitle = (props: TitleAndSubtitleProps) => {
   return (
      <header className="text-center">
         <h1 className="text-xl">{props.title}</h1>
         <h3>{props.subtitle}</h3>
      </header>
   );
};

export default TitleAndSubtitle;
