import React, { useState, useRef, useEffect, useMemo } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { BiGitRepoForked } from 'react-icons/bi';

import useVisibility from '../../hooks/useVisibility';

import { Repo } from '../../pages/timeline/[username]';
import {
  formatRepoDate,
  formatLastUpdateDate,
  getLanguageColor,
  lightOrDark,
  formatNumber,
} from '../../utils';

import {
  Container,
  TimelinePoint,
  Arrow,
  Content,
  Item,
  Date,
  Name,
  Description,
  ItemText,
  Footer,
  Language,
} from './styles';

interface TimelineItemProps {
  position?: 'left' | 'right';
  repo: Repo;
  alwaysVisible?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  position = 'left',
  repo,
  alwaysVisible,
}) => {
  const [isVisibleRaw, ref] = useVisibility<HTMLLIElement>(-30);
  const showed = useRef(false);
  const [delay, setDelay] = useState(0.7);

  const langColor = useMemo(() => getLanguageColor(repo.language), [repo]);
  const isVisible = useMemo(() => isVisibleRaw || alwaysVisible, [
    isVisibleRaw,
    alwaysVisible,
  ]);

  const variants = {
    final: { opacity: 1, x: 0 },
    right: { opacity: 0, x: 200 },
    left: { opacity: 0, x: -200 },
  };

  const variantsScale = {
    final: { scale: 1 },
    initial: { scale: 0 },
  };

  useEffect(() => {
    if (isVisible) showed.current = true;
  }, [isVisible]);

  useEffect(() => {
    const id = setTimeout(() => {
      setDelay(0);
    }, 700);
    return () => clearTimeout(id);
  }, []);

  return (
    <Container className={position} ref={ref}>
      <TimelinePoint
        initial={'initial'}
        animate={isVisible || showed.current ? 'final' : 'initial'}
        variants={variantsScale}
        transition={{ delay }}
        color={langColor}
      />
      <Content
        initial={position}
        animate={isVisible || showed.current ? 'final' : position}
        variants={variants}
        transition={{ delay }}
        className={position}
      >
        <Arrow className={position} />
        <Item>
          <Date colorType={lightOrDark(langColor)} color={langColor}>
            {formatRepoDate(repo.created_at)}
          </Date>
          <ItemText>
            <Name href={repo.html_url} target="_blank">
              {repo.name}
            </Name>
            <Description>{repo.description}</Description>
          </ItemText>
          <Footer>
            {repo.language && (
              <div>
                <Language color={langColor}>{repo.language}</Language>
              </div>
            )}
            <div>
              <AiOutlineStar size="16" /> {formatNumber(repo.stargazers_count)}
            </div>
            <div>
              <BiGitRepoForked /> {formatNumber(repo.forks_count)}
            </div>
            <span>{formatLastUpdateDate(repo.pushed_at)}</span>
          </Footer>
        </Item>
      </Content>
    </Container>
  );
};

export default TimelineItem;
