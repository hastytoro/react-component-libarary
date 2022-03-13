import React from 'react';
import styled from 'styled-components';
import data from './data';

const App = () => {
  return (
    <>
      <MainContent />
    </>
  );
};

const MainContent = () => (
  <Wrapper>
    {data.map(({ id, src, alt, tags }) => (
      <GridItem key={id} id={id} src={src} alt={alt} tags={tags} />
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  /* wrapper configuration: */
  padding: 0 32px;
  margin: 0 auto;
  /* grid configuration: */
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* cushion setting */
  padding-top: 128px;
  padding-bottom: 128px;
`;

// Next incorporate different files depending on the pixel aspect ratio.
// And we can do this with updating the markup to use the srcSet attribute with <source> to support modern image formats.
// We use the covered html elements <picture> and <source>.
// Your project public/images folder will hold all the needed files offering different "high-DPI" supportive image variants.

const GridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          {/* We can add multiple <source> elements if we wish to offer different files.
          The order matters so ensure that the most optimized option is on the top of the available choices. */}
          <source
            type="image/jpeg"
            srcSet={`
            ${src} 1x,
            ${src.replace('.jpg', '@2x.jpg')} 2x,
            ${src.replace('.jpg', '@3x.jpg')} 3x,
          `}
          />
          <Image src={src} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  /* toggle these properties: */
  /* aspect-ratio: 1 / 1; */
  height: 300px;

  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Tag = styled.li`
  display: inline-block;
  padding: 4px 8px;
  background: hsl(225deg 8% 80%);
  font-size: 0.87rem;
`;

export default App;
