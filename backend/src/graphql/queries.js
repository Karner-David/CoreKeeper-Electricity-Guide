/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      name
      desc
      descLonger
      img
      materials
      materialImg
      station
      stationImg
      howToUse
      howToGif
      exploreMoreItem
      exploreMoreContra
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        desc
        descLonger
        img
        materials
        materialImg
        station
        stationImg
        howToUse
        howToGif
        exploreMoreItem
        exploreMoreContra
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getContrapItem = /* GraphQL */ `
  query GetContrapItem($id: ID!) {
    getContrapItem(id: $id) {
      id
      contrapName
      materials
      p1
      gif1
      p2
      gif2
      p3
      gif3
      p4
      gif4
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listContrapItems = /* GraphQL */ `
  query ListContrapItems(
    $filter: ModelContrapItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContrapItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        contrapName
        materials
        p1
        gif1
        p2
        gif2
        p3
        gif3
        p4
        gif4
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
