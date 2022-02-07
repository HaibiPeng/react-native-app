import React from 'react';
import { RepositoryListContainer } from '../../Components/RepositoryList';
import { render } from '@testing-library/react-native';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
    
      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories}/>);

      const repositoryItems = getAllByTestId('repositoryItem');
      expect(repositoryItems).toHaveLength(2);
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      expect(firstRepositoryItem).toHaveTextContent('jaredpalmer/formik');
      expect(firstRepositoryItem).toHaveTextContent('Build forms in React, without the tears');
      expect(firstRepositoryItem).toHaveTextContent('TypeScript');
      
      expect(secondRepositoryItem).toHaveTextContent('async-library/react-async');
      expect(secondRepositoryItem).toHaveTextContent('Flexible promise-based React data loader');
      expect(secondRepositoryItem).toHaveTextContent('JavaScript');

      const repositoryItemData = getAllByTestId('repositoryItemData');
      const [firstRepositoryItemData, secondRepositoryItemData] = repositoryItemData;
      expect(firstRepositoryItemData.children[0].children[0].children[0]).toHaveTextContent('21.9k');
      expect(firstRepositoryItemData.children[1].children[0].children[0]).toHaveTextContent('1.6k');
      expect(firstRepositoryItemData.children[2].children[0].children[0]).toHaveTextContent('3');
      expect(firstRepositoryItemData.children[3].children[0].children[0]).toHaveTextContent('88');

      expect(secondRepositoryItemData.children[0].children[0].children[0]).toHaveTextContent('1.8k');
      expect(secondRepositoryItemData.children[1].children[0].children[0]).toHaveTextContent('69');
      expect(secondRepositoryItemData.children[2].children[0].children[0]).toHaveTextContent('3');
      expect(secondRepositoryItemData.children[3].children[0].children[0]).toHaveTextContent('72');
    });
  });
});